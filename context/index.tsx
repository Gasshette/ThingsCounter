import React, { useReducer, Dispatch, Reducer, useContext } from 'react';
import IThing from './interfaces/i-thing';
import IActions from './interfaces/i-actions';
import thingsMock from './mock';

export interface IState {
  isLoading: boolean;
  things: Array<IThing>;
}

export interface IThingProviderProps {
  reducer: Reducer<IState, IActions>;
  initialState: IState;
}

export interface IThingContextProps {
  state: IState;
  dispatch: Dispatch<IActions>
}

export const initialState: IState = {
  isLoading: true,
  things: thingsMock
}

export const ThingsContext = React.createContext(initialState as IThingContextProps);

export const ThingsProvider: React.FC<IThingProviderProps> = ({reducer, initialState, children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <ThingsContext.Provider value={value}>{children}</ThingsContext.Provider>
  );
};

export const useThingContextValue = () => useContext(ThingsContext);