import React from 'react';
import { Text, View, StyleSheet, ViewStyle, Image } from 'react-native';
import { white, basePadding, black } from '../../../styles';

export type IItem = {
  item: {
    id: string;
    title: string;
    backgroundColor: string;
  };
};

export default function Item({ item }: IItem) {
  const chosenStyle = StyleSheet.create({
    background: {
      backgroundColor: item.backgroundColor
    }
  });

  return (
    <View style={[chosenStyle.background, localStyles.container] as ViewStyle}>
      <View style={localStyles.iconsViews}>
        <Image source={require('icons/sharp_remove_white_18dp.png')} />
      </View>
      <View style={localStyles.title}>
        <Text style={localStyles.text} numberOfLines={1}>
          {item.title}
        </Text>
      </View>

      <View style={localStyles.iconsViews}>
        <Image source={require('icons/sharp_add_white_18dp.png')} />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
    borderRadius: 50,
    padding: basePadding
  },
  iconsViews: {
    width: '15%',
    alignItems: 'center'
  },
  text: {
    color: white
  },
  id: {
    fontWeight: 'bold'
  },
  title: {
    width: '70%',
    paddingHorizontal: basePadding,
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'column'
  }
});
