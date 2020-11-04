let initialState = {
    city: null
};

export default function rootReducer(state ={ initialState }, action) {
    switch (action.type) {
        case 'INITIAL':
            return  {
              state:  { city: action.payload }
            };  
        default:
            return state
    }
}