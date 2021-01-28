import {createStore} from 'redux';
import {mainReducer} from './reducers';

export const store = createStore(mainReducer);

//So the reducer is responsible for modifying state according to the action
