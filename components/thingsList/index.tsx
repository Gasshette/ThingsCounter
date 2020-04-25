import React from 'react';
import { ActivityIndicator, View, FlatList } from 'react-native';
import Item from './item';
import { useThingContextValue } from '../../context';
import IActions from '../../context/interfaces/i-actions';

export default function ThingsList() {
  const { state, dispatch } = useThingContextValue();

  if (state.isLoading) {
    dispatch({ type: 'SET_LOADER' } as IActions);

    return (
      <View style={{ marginTop: 15 }}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <View style={{ marginTop: 15 }}>
        <FlatList
          data={state.things}
          renderItem={({ item }) => <Item thing={item}></Item>}
        />
      </View>
    );
  }
}
