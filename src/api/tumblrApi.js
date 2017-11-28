import axios from 'axios';

import { DEFAULT_RESPONSE } from '../util/data';

const TUMBLR_API_URL = 'http://localhost:4000/api/tumblr';

const getTumblrImagesByUsername = (username = 'null') => {
    const cachedImages = window.localStorage.getItem(username) || {};
    if (cachedImages.list && cachedImages.list.length) {
        return Promise.resolve(JSON.parse(cachedImages));
    }

    return axios.get(`${TUMBLR_API_URL}/${username}`)
        .then((resp = DEFAULT_RESPONSE) => {
            return { [username]: resp.data };
        })
        .catch(err => { throw err; });
};

const users = ['dreamcorp420', 'wheresmymind', 'karakult', 'bkcollage', 'sooujin'];

const getTumblrImagesByUserList = () => {
    const requests = users.map(user => getTumblrImagesByUsername(user));

    return Promise.all(requests).then(data =>
        window.localStorage.setItem('tumblr', JSON.stringify(data)));
};
// getTumblrImagesByUserList()
export {
    getTumblrImagesByUsername,
    getTumblrImagesByUserList,
};
