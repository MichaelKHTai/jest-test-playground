import axios from 'axios';

export interface APIData {
    id: number;
    title: string;
};

export async function getPostTitle(): Promise<string> {
    const url = 'https://fakeapi.com/data';
    const response = await axios.get<APIData>(url);
    return response?.data.title;
}