import React from 'react';
import { colors } from '../../styles';
import { View } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function PickableColor({
  paletteColor
}: {
  paletteColor: string
}) {

  return (
    <View
      style={{
        backgroundColor: paletteColor,
        borderRadius: 15,
        padding: 6,
        margin: 5,
        borderColor:colors.white,
        borderWidth: 1
      }}
    >
      <RadioButton value={paletteColor} uncheckedColor={paletteColor} />
    </View>
  );
}
