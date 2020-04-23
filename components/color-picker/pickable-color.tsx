import React from 'react';
import { colors } from '../../styles';
import { StyleSheet, ViewStyle } from 'react-native';
import { Button } from 'react-native-paper';
import { useThingContextValue } from '../../context';
import IActions from '../../context/interfaces/i-actions';

export default function PickableColor({
  thingId,
  paletteColor,
  borderWidth,
}: {
  thingId: string;
  paletteColor: [string, string];
  borderWidth: number;
}) {
  const localStyle = StyleSheet.create({
    circle: {
      width: 70,
      height: 70,
      borderRadius: 70 / 2,
      borderColor: colors.white,
      margin: 5,
    },
  });

  const { dispatch } = useThingContextValue();

  return (
    <Button
      onPress={() =>
        dispatch({
          type: 'CHANGE_COLOR',
          payload: { thingId, paletteColor: paletteColor[1] },
        } as IActions)
      }
      style={
        [
          localStyle.circle,
          { backgroundColor: paletteColor[1], borderWidth: borderWidth },
        ] as ViewStyle
      }
    >
      {}
    </Button>
  );
}
