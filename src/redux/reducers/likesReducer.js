import { INCREMENT_LIKES, DECREMENT_LIKES } from '../types';


const initialStata = {
    likes: 0
};

export default (state = initialStata, action) => {
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