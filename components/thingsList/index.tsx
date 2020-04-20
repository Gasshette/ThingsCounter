import React from 'react';
import { ActivityIndicator, View, FlatList, Text } from 'react-native';
import Item from './item';
import { indigo, lightBlue, green, red, yellow } from '../../styles';

export default function ThingsList() {
  const state = {
    isLoading: false,
    data: [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        backgroundColor: yellow,
      },
      {
        id: '3ac68afc-c605-48d3- a4f8-fbd91aa97f633ac68afc -c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        backgroundColor: red,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        backgroundColor: green,
      }
    ]
  };

  if (state.isLoading) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={state.data}
          renderItem={({ item }) => <Item item={item}></Item>}
        />
      </View>
    );
  }
}
