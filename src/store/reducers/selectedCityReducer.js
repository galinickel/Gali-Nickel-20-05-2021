/* eslint-disable import/no-anonymous-default-export */
export default (state = {city: 'Tel Aviv', cityCode:215854}, action) => {
    switch (action.type) {
        case 'SET_CODE':
            return action.payload;
        default:
            return state;
    }
};
