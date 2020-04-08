import axios from 'axios';
import { getPostTitle } from '../index';

jest.mock('axios');

describe('getPostTitle', () => {
    it('fetches erroneously data from an API', async () => {
        const errorMessage = { status: 404, data: { detail: 'Page Not Found'} };
        (axios.get as jest.Mock).mockRejectedValueOnce(errorMessage);
        await expect(getPostTitle()).rejects.toEqual(errorMessage);
    });
});