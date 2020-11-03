import rootReducer from './reducer';
import { createStore } from '@reduxjs/toolkit';

const store = createStore(rootReducer);


export default store;