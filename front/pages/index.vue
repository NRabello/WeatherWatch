<template>
    <div class="w-screen h-screen bg-slate-300">
        <div class="relative w-full h-[420px]">
            <img src="~/public/nature.png" class="absolute inset-0 h-full w-full object-cover object-top z-0" />

            <div
                class="absolute top-0 left-8 right-8 sm:left-16 sm:right-16 md:left-[205px] md:right-[205px] lg:left-[400px] lg:right-[400px] flex items-center justify-between">
                <div class="flex items-center mr-4">
                    <img src="~/public/clima.png" class="w-[35px] h-[35px] m-2" />
                    <h1 class="text-white text-[25px] font-sans">WeatherWatch</h1>
                </div>
                <img src="~/public/more.png" class="w-[20px] h-[20px] m-2" />
            </div>
            <div class="absolute inset-0 flex flex-col justify-center items-center mt-6">
                <div
                    class="flex w-[522px] h-[44px] bg-white rounded-sm items-center shadow-[0_15px_65px_-20px_rgba(0,0,0,0.3)] shadow-black">
                    <img src="~/public/pesquisar.png" class="w-[25px] h-[25px] m-2" />
                    <input type="text" v-model="searchQuery" @focus="handleFocus" @blur="handleBlur"
                        placeholder="Procure por cidades ou estados"
                        class="w-full h-full bg-transparent outline-none placeholder:font-sans placeholder:text-gray-500">
                    <div v-if="isFocused && postalInfos.length && searchQuery"
                        class="absolute mt-[350px] w-[522px] bg-white rounded-sm shadow-lg z-10">
                        <ul>
                            <li v-for="info in postalInfos" :key="info.postalCode"
                                @mousedown.prevent="selectPostalInfo(info as PostalInfo)"
                                class="p-2 cursor-pointer hover:bg-gray-200">

                                <div class="font-bold">
                                    {{ info.adminName2 }}
                                </div>
                                <div class="text-gray-600 text-sm">
                                    {{ info.adminName2 ? `${info.adminName2},
                                    ${info.adminName1} - ${info.countryCode}` : info.adminName1 }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <p class="mt-2 text-white font-medium text-base font-mono">Recent Locations</p>
                <div class="flex mt-2 space-x-4 w-[522px]">
                    <div class="flex flex-col w-1/3 h-[142px] bg-black/25 backdrop-blur-[20px] text-white rounded-lg items-center justify-center"
                        v-for="recent in recentPostalInfos">
                        <p class="font-serif text-[28px] px-4 text-center">
                            {{ recent.adminName2 }}
                        </p>
                        <p>
                            {{ recent.adminName1 }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-[10px] p-4">
            <div v-for="(stateData, index) in stateWeatherDatas" :key="stateData.latitude"
                class="flex items-center bg-white p-2 rounded shadow hover:bg-blue-200 hover:cursor-pointer h-[42px]">
                <div class="flex-grow font-serif font-medium">{{ states[index] }}</div>
                <img :src="`/${getWeatherIcon(stateData.current.weather_code)}`" alt="Weather Icon"
                    class="absolute ml-[470px] w-8 h-8" />
                <div class="font-serif">{{ stateData.current.temperature_2m }}°C</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { PostalInfo } from '~/models/PostalInfo';
import type { IPostalInfo } from '~/models/PostalInfo';
import { GeoService } from '~/services/GeoService';
import { StateWeatherService } from '~/services/StateWeatherService';
import { States } from '~/models/EStates';
import { StateWeatherData } from '~/models/StateWeatherData';
import { getWeatherIcon } from '~/models/EWeatherIcon';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

export default {
    setup() {
        const router = useRouter();
        const searchQuery = ref('');
        const postalInfos = ref<PostalInfo[]>([]);
        const recentPostalInfos = ref<PostalInfo[]>([]);
        const stateWeatherDatas = ref<StateWeatherData[]>([]);
        const isFocused = ref(true);
        const states = ref(Object.values(States));


        watch(searchQuery, () => {
            handleSearch();
        });

        const handleSearch = async () => {
            if (searchQuery.value.trim() === '') {
                postalInfos.value = [];
                return;
            }
            try {
                postalInfos.value = await GeoService.findByName(searchQuery.value);
                console.log('Postal Infos:', postalInfos.value);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        const fetchRecentLocations = () => {
            const storedPostalInfos = JSON.parse(localStorage.getItem('postalInfos') || '[]') as PostalInfo[];
            recentPostalInfos.value = storedPostalInfos.map(PostalInfo.fromJSON);
        };

        const handleFocus = () => {
            isFocused.value = true;
        };

        const handleBlur = () => {
            setTimeout(() => {
                isFocused.value = false;
            }, 100);
        };

        const selectPostalInfo = (info: PostalInfo) => {
            router.push({
                path: '/teste',
                query: {
                    postalInfo: JSON.stringify(info.toJSON()),
                },
            });

            const postalInfosList: IPostalInfo[] = JSON.parse(localStorage.getItem('postalInfos') || '[]');

            if (postalInfosList.length === 3) postalInfosList.shift();

            postalInfosList.push(info.toJSON());
            localStorage.setItem('postalInfos', JSON.stringify(postalInfosList));
            isFocused.value = false;
        };

        const fetchStatesData = async () => {
            try {
                stateWeatherDatas.value = await StateWeatherService.findAll();
                console.log('State Weather Datas:', stateWeatherDatas.value);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        onMounted(() => {
            fetchStatesData();
            fetchRecentLocations();
        });

        return {
            searchQuery,
            postalInfos,
            recentPostalInfos,
            stateWeatherDatas,
            isFocused,
            states,
            handleSearch,
            fetchRecentLocations,
            handleFocus,
            handleBlur,
            selectPostalInfo,
            getWeatherIcon,
        };
    },
};
</script>
