import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider, DarkTheme } from 'react-native-paper';
import { ThingsProvider, initialState } from './context';
import thingReducer from './reducers';
import AppWrapper from './components/app-wrapper';

export default function App() {
  return (
    <PaperProvider theme={DarkTheme}>
      <ThingsProvider initialState={initialState} reducer={thingReducer}>
        <AppWrapper />
      </ThingsProvider>
    </PaperProvider>
  );
}
