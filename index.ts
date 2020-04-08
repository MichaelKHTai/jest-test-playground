import axios from 'axios';

export interface APIData {
    id: number;
    title: string;
};

export enum reponseError {
    PAGE_NOT_FOUND = 'Page not found',
};

export async function getPostTitle(): Promise<string> {
    const url = 'https://fakeapi.com/data';
    try {
        const response = await axios.get<APIData>(url);
        return response?.data.title;
    } catch (err) {
        if (err?.response.status === 404) {
            return reponseError.PAGE_NOT_FOUND;
        };
        throw new Error('Unknown Error');
    }
}