/* eslint-disable import/no-anonymous-default-export */

export default async (state = [], action) => {

    switch (action.type) {
        case 'SET_FAVORITES':
            console.log('called set');
            return action.payload;
        case 'GET_FAVORITES':
            console.log('log from favoritesReducer. called get:',action.payload);
            return  action.payload;
        default:
            return state;
    }
};
