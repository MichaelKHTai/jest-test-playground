import axios from 'axios';
import { getPostTitle, reponseError } from '../index';

jest.mock('axios');

describe('getPostTitle', () => {
    it('fetches erroneously data from an API', async () => {
        const pageNotFoundResponse = { response: { status: 404, data: { detail: 'Page Not Found'} } };
        (axios.get as jest.Mock).mockRejectedValueOnce(pageNotFoundResponse);
        await expect(getPostTitle()).resolves.toEqual(reponseError.PAGE_NOT_FOUND);
    });
});