import { optionsMap } from './data';

const entries = array => array
    .map(object => Object.entries(object)[0]);

const keys = array => entries(array)
    .map(([key]) => key);

/* 
/   appplicable to array of objects of this structure:
/   [{ id: [list] }, { id: [list] }, { id: [list] },...]
*/

const newMap = (data, optionId) => {
    const { name, aliases, featured } = optionsMap.get(optionId);
    const map = new Map(entries(data));
    map.set('tags', keys(data));
    map.set('name', name);
    map.set('aliases', new Set(aliases));
    map.set('featured', featured);

    return map;
};

export default newMap;
