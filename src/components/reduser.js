const initialState = {
    data: 0,
};

export default function reduser(state = initialState, action) {
    switch (action.type) {
        case 'increment': {
            return {
                ...state,
                data: state.data + 1
            };
        }
        case 'decrement': {
            return {
                ...state,
                data: state.data - 1
            };
        }
    
        default:
            return state;
    }
}