import { Reducer } from 'react';
import IActions from '../context/interfaces/i-actions';
import { IState } from '../context';

const thingReducer: Reducer<IState, IActions> = (state, action) => {
  switch (action.type) {
    case 'SET_LOADER':
      return { ...state, isLoading: !state.isLoading };
    case 'CHANGE_COLOR':
      let newThings = Object.assign({}, state.things);

      for (let i = 0; i < state.things.length; i++) {
        const element = state.things[i];

        if (element.id === action.payload.thingId) {
          newThings[i].color = action.payload.paletteColor;
          return { ...state, things: [...Object.values(newThings)] };
        }
      }

      return state;

    default:
      return state;
  }
};

export default thingReducer;
