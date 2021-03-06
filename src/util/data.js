const categories = {
    Christmas: {
        title: 'Merry Christmas!',
        subtitle: 'Ho Ho Ho',
    },
    Birthday: {
        title: 'Happy birthday!',
        subtitle: 'Drink up!',
    },
    'It\'s a Tuesday': {
        title: 'Just a card with a giph...',
        subtitle: '#hasthagrandom',
    },
};

const defaultWords = [
    'authentic',
    'YOLO',
    'vegan',
    'mustache',
    'banjo',
    'swag',
    'Shoreditch',
    'quinoa',
    'bespoke',
    'ethical',
];

const defaultPhoto = {
    id: '',
    likes: 0,
    description: null,
    color: '#0D1A31',
    imgRegular: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=976&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    imgSmall: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=976&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
    imgThumb: '',
    height: 0,
    width: 0,
};

const fonts = ['Atomic Age', 'Bangers', 'Concert One', 'Cutive Mono', 'Permanent Marker', 'Roboto Mono', 'Sacramento', 'Ubuntu Mono'];

const SEARCH = 'SEARCH';
const COLLECTION_ID = 'COLLECTION_ID';

const queryParamMap = {
    stars: { param: 'stars', type: SEARCH },
    abstract: { param: 'abstract', type: SEARCH },
    funny: { param: 'funny', type: SEARCH },
    color: { param: 'color', type: SEARCH },
    wallpaper: { param: '1423468', type: COLLECTION_ID },
    quotes: { param: '1423424', type: COLLECTION_ID },    
};

const DEFAULT_RESPONSE = { data: {} };

const imageTypes = {
    Photography: 'photos',
    Motion: 'tumblr',
    'Graphic Art': 'tumblr',
};

const photoOptions = {
    name: 'photos',
    tags: 'keys',
    aliases: ['Photography'],
    featured: 'yellow',
};

const tumblrOptions = {
    name: 'tumblr',
    tags: 'keys',
    aliases: ['Graphic Art', 'Motion'],
    featured: 'dreamcorp420',
};

const optionsMap = new Map();
optionsMap.set('photos', photoOptions);
optionsMap.set('tumblr', tumblrOptions);

export {
    categories,
    defaultWords,
    queryParamMap,
    defaultPhoto,
    imageTypes,
    optionsMap,
    fonts,
    DEFAULT_RESPONSE,
    SEARCH,
    COLLECTION_ID,
};
