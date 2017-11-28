import axios from 'axios';

import { DEFAULT_RESPONSE } from '../util/data';

const HIPSTER_API_URL = 'http://hipsterjesus.com/api';

const getHipsterText = () => {
    const cachedText = window.localStorage.getItem('text');
    if (cachedText && cachedText.length) {
        return Promise.resolve(cachedText);
    }

    const getParsedText = text => {
        const parsedResp = text
            .replace('put a bird on it', 'savage')
            .replace('you probably haven\'t heard of them', 'AF')
            .split(' ');
        window.localStorage.setItem('text', parsedResp);
        return parsedResp;
    };

    return axios.get(HIPSTER_API_URL)
        .then((resp = DEFAULT_RESPONSE) => getParsedText(resp.data.text))
        .catch(err => { throw err; });
};

export {
    getHipsterText,
};

