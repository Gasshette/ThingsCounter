import React, { useState } from 'react';
import { View } from 'react-native';
import styles, { colors } from '../../styles';
import PickableColor from './pickable-color';
import IThing from '../../context/interfaces/i-thing';
import { RadioButton } from 'react-native-paper';

export default function ColorPicker({ thing, onPick }: { thing: IThing, onPick: (params: {color?:string;}) => void }) {
  const drawPickableColors = () => {
    return Object.entries(colors).map((val) => (
        <PickableColor
          key={val[0]}
          paletteColor={val[1]}
        />
    ));
  };
  return (
    <View style={styles.flexRow}>
      <RadioButton.Group
        value={thing.color}
        onValueChange={(color: string) => onPick({color})}
      >
        {drawPickableColors()}
      </RadioButton.Group>
    </View>
  );
}
