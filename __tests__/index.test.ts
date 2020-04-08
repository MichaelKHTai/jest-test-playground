import axios from 'axios';
import { getPostTitle, reponseError } from '../index';

jest.mock('axios');

const mockAPIResponse = {
    PAGE_NOT_FOUND: {
        response: {
            status: 404,
            data: {
                detail: 'Page Not Found'
            }
        }
    },
}

describe('getPostTitle', () => {
    it('fetches erroneously data from an API', async () => {
        (axios.get as jest.Mock).mockRejectedValueOnce(mockAPIResponse.PAGE_NOT_FOUND);
        
        await expect(getPostTitle()).resolves.toEqual(reponseError.PAGE_NOT_FOUND);
    });
});