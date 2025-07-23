// src/utils/getStarArray.js

const getStarArray = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars.push('full');
        } else if (i - rating < 1) {
            stars.push('half');
        } else {
            stars.push('empty');
        }
    }
    return stars;
};

export default getStarArray;
