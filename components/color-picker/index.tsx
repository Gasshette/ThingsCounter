import React, { useState } from 'react';
import { View } from 'react-native';
import styles, { colors } from '../../styles';
import PickableColor from './pickable-color';
import IThing from '../../context/interfaces/i-thing';

export default function ColorPicker({ thing }: {thing: IThing}) {

  const drawPickableColors = () => {
    return Object.entries(colors).map((val) => {
      const borderWidth = thing.color === val[1] ? 5 : 1;

      return (
        <PickableColor
          key={val[0]}
          thingId={thing.id}
          paletteColor={val}
          borderWidth={borderWidth}
        />
      );
    });
  };

  return <View style={styles.flexRow}>{drawPickableColors()}</View>;
}


