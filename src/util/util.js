const arrayGen = (array = [], defaultElement) => {
    let i = 0;
    return () => {
        if (i === array.length) {
            i = 0;
        }
        return array[i++] || defaultElement;
    };
};

export { arrayGen };
