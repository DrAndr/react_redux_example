import { createStore } from 'redux';
import { INCREMENT_LIKES, DECREMENT_LIKES } from './types'


const initialStata = {
    likes: 0
};

const reducer = (state = initialStata, action) => {
    console.log('reducer > ', state, action);

    switch (action.type) {
        case INCREMENT_LIKES:
            return { ...state, likes: state.likes + 1 }
        // break;
        case DECREMENT_LIKES:
            return { ...state, likes: state.likes - 1 }
        // break;
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
