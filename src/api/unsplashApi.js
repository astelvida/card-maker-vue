import axios from 'axios';

import { queryParamMap, SEARCH, COLLECTION_ID, DEFAULT_RESPONSE } from '../util/data';

const UNSPLASH_API_URL = 'https://api.unsplash.com';
const UNSPLASH_APP_ID = '0b748b2d294462cabfe1617af6439c0f01a1a8d5f76de9b7b435ebbbc84170dc';
const UNSPLASH_DEFAULT_PARAMS = { queryParam: '', page: 1 };

const getCollectionByIdUrl = (id, page) =>
    `${UNSPLASH_API_URL}/collections/${id}/photos?client_id=${UNSPLASH_APP_ID}` +
    `&per_page=10&page=${page}`;

const getSearchUrl = (query, page) =>
    `${UNSPLASH_API_URL}/search/photos?client_id=${UNSPLASH_APP_ID}` +
    `&query=${query}&per_page=10&page=${page}`;


const getRequestUrl = ({ tag, page }) => {
    const { param, type } = queryParamMap[tag];
    switch (type) {
    case SEARCH:
        return getSearchUrl(param, page);
    case COLLECTION_ID:
        return getCollectionByIdUrl(param, page);
    default:
        return getSearchUrl(param, page);
    }
};

const getUnsplashPhotos = ({ tag, page = 1 } = UNSPLASH_DEFAULT_PARAMS) => {
    const cachedPhotos = window.localStorage.getItem(`${tag}Photos`);

    if (cachedPhotos && cachedPhotos.length) {
        return Promise.resolve(JSON.parse(cachedPhotos));
    }

    const url = getRequestUrl({ tag, page });
    return axios.get(url)
        .then((resp = DEFAULT_RESPONSE) => {
            const photoList = resp.data.results || resp.data;
            const cherryPickedPhotos = photoList.map(photo => ({
                id: photo.id,
                likes: photo.likes,
                description: photo.description,
                color: photo.color,
                imgSmall: photo.urls.small,
                imgRegular: photo.urls.regular,
                imgThumb: photo.urls.thumb,
                height: photo.height,
                width: photo.width,
            }));
            cherryPickedPhotos.sort((p1, p2) => p1.likes < p2.likes);
            const result = {
                list: cherryPickedPhotos,
                listId: tag,
            };
            window.localStorage.setItem(`${tag}Photos`, JSON.stringify(result));
            return result;
        })
        .catch(err => { throw err; });
};

export {
    getUnsplashPhotos,
};


// https://78.media.tumblr.com/bda510e495f7978a58eab425fa031bd5/tumblr_ozfannxFLs1qkprgpo1_1280.gif