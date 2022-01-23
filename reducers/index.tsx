import { Reducer } from 'react';
import IActions from '../context/interfaces/i-actions';
import { IState } from '../context';
import * as Types from '../actions/action-types';

const thingReducer: Reducer<IState, IActions> = (state, action) => {
  let newThings = undefined;

  switch (action.type) {
    case Types.SET_LOADER:
      return { ...state, isLoading: !state.isLoading };

    case Types.CHANGE_COLOR:
      newThings = Object.assign({}, state.things);

      for (let i = 0; i < state.things.length; i++) {
        const element = state.things[i];

        if (element.id === action.payload.thingId) {
          newThings[i].color = action.payload.paletteColor;
          return { ...state, things: [...Object.values(newThings)] };
        }
      }
      return state;

    case Types.UPDATE_THING:
      newThings = Object.assign({}, state.things);
      console.log('[reducer] thing = ', action.payload);
      console.log('[reducer] newThings = ', newThings);

      for (let i = 0; i < state.things.length; i++) {
        const element = state.things[i];

        if (element.id === action.payload.id) {
          newThings[i] = action.payload;
          return { ...state, things: [...Object.values(newThings)] };
        }
      }
      // If the thing isn't found, it's a new one so just push it and save in store
      newThings = Array.from(Object.values(newThings)).push(action.payload);
      const newState = { ...state, things: newThings };
      console.log('newState = ', newState);

      return newState;

    case Types.DISPLAY_SNACKBAR:
      return { ...state, snackbarProps: action.payload };

    case Types.HIDE_SNACKBAR:
      return {
        ...state,
        snackbarProps: { ...state.snackbarProps, isVisible: false },
      };

    default:
      return state;
  }
};

export default thingReducer;
