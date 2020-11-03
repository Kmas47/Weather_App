let initial_state = {
    city: ""
};

export default function rootReducer(state ={initial_state}, action) {
    switch (action.type) {
        case 'INITIAL':
            return 1  
        default:
            return state
    }
}