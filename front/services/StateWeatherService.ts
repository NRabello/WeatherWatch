import axios from 'axios';
import { StateWeatherData } from '~/models/StateWeatherData';

const API_URL = 'https://localhost:7023/StateWeather/getAllStates';

export class StateWeatherService {
    public static async findAll(): Promise<StateWeatherData[]> {
        try {
            const response = await axios.get(API_URL);

            if (response.data && Array.isArray(response.data)) {
                return response.data.map((item: StateWeatherData) => new StateWeatherData(item));
            } else {
                throw new Error('Formato de resposta inesperado.');
            }
        } catch (error) {
            throw error;
        }
    }
}
