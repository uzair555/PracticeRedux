import {subtraction} from './action';
import * as actionTypes from './actionTypes';

const initialState = {
  counter: 0,
  name: 'Uzair Korai',
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDITION:
      //...state is a copy of state
      // state.counter pointing the initialState
      return {...state, counter: state.counter + 1};
    case actionTypes.SUBTRACTION:
      return {...state, counter: state.counter - 1};

    default:
      return state;
  }
};
