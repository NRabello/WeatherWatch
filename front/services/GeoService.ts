import axios from 'axios';
import { PostalInfo } from '~/models/PostalInfo';

const API_URL = 'https://localhost:7023/Geo';

export class GeoService {
    public static async findByName(filter: string): Promise<PostalInfo[]> {
        try {
            const response = await axios.get(`${API_URL}/FindByName`, {
                params: { filter }
            });

            if (response.data && Array.isArray(response.data.postalCodes)) {
                return response.data.postalCodes.map((item: PostalInfo) => new PostalInfo(item));
            } else {
                throw new Error('Formato de resposta inesperado.');
            }
        } catch (error) {
            console.error('Erro ao buscar dados geográficos:', error);
            throw error;
        }
    }
}
