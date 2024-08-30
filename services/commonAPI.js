import axios from 'axios';

export const commonAPI = async (httpMethod, url, reqBody) => {
    const reqConfig = {
        method: httpMethod,
        url,
        headers: {
            "Content-Type": "application/json"
        },
        data: reqBody
    };

    try {
        const response = await axios(reqConfig);
        return response;
    } catch (error) {
        console.error('API call failed:', error);
        return error;
    }
};


