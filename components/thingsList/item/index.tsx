import React from 'react';
import { Text, View, StyleSheet, ViewStyle, Image } from 'react-native';
import { colors, basePadding } from '../../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import IThing from '../../../context/interfaces/i-thing';

export default function Item({ thing }: { thing: IThing }) {
  const chosenStyle = StyleSheet.create({
    background: {
      backgroundColor: thing.color,
    },
  });

  const navigation = useNavigation();

  const ItemStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 1,
      borderRadius: 50,
      padding: basePadding,
      borderColor:colors.white,
      borderWidth:1,
    },
    iconsViews: {
      width: '15%',
      alignItems: 'center',
    },
    text: {
      color: colors.white,
    },
    itemName: { fontWeight: 'bold', fontSize: 18 },
    item: {
      width: '70%',
      paddingHorizontal: basePadding,
      alignItems: 'center',
      alignContent: 'center',
      flexDirection: 'column',
    },
  });

  return (
    <View style={[chosenStyle.background, ItemStyles.container] as ViewStyle}>
      <View style={ItemStyles.iconsViews}>
        <Image source={require('icons/sharp_remove_white_18dp.png')} />
      </View>

      <View style={ItemStyles.item}>
        <TouchableOpacity
          onPress={() => navigation.navigate('thingDetails', { thingId:thing.id })}
        >
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text
              style={[ItemStyles.text, ItemStyles.itemName]}
              numberOfLines={1}
            >
              {thing.name}
            </Text>
            <Text style={ItemStyles.text}>{thing.counterValue}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={ItemStyles.iconsViews}>
        <Image source={require('icons/sharp_add_white_18dp.png')} />
      </View>
    </View>
  );
}
