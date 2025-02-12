import axios from 'axios';
import { PostalInfo } from '~/models/PostalInfo';
import { WeatherResponse } from '~/models/WeatherResponse';

const API_URL = 'https://localhost:7023/weather/find';

export class WeatherService {
    public static async find(info: PostalInfo): Promise<WeatherResponse> {
        try {
            const response = await axios.get(API_URL, {
                params: {
                    lat: info.lat,
                    lng: info.lng
                }
            });

            if (response.data) {
                return new WeatherResponse(response.data);
            } else {
                throw new Error('Formato de resposta inesperado.');
            }
        } catch (error) {
            console.error('Erro ao buscar dados geográficos:', error);
            throw error;
        }
    }
}
