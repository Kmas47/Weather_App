let initial_state = {
    city: null
};

export default function rootReducer(state ={ initial_state }, action) {
    switch (action.type) {
        case 'INITIAL':
            return  {
              state:  { city: action.payload }
            };  
        default:
            return state
    }
}