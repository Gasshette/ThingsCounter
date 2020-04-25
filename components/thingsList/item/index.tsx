import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ViewStyle } from 'react-native';
import { colors, basePadding } from '../../../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import IThing from '../../../context/interfaces/i-thing';
import { IconButton } from 'react-native-paper';
import { useThingContextValue, SnackbarProps } from '../../../context';
import { updateThing, hideSnackbar, displaySnackbar } from '../../../actions';
import * as types from '../../../actions/action-types';

export default function Item({ thing }: { thing: IThing }) {
  const navigation = useNavigation();
  const { dispatch } = useThingContextValue();
  const [updateThingTimeout, setUpdateThingTimeout] = useState(0);
  const [newCounterValue, setNewCounterValue] = useState(thing.counterValue);
  const [didThingUpdate, setDidThingUpdate] = useState(false);

  const ItemStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 1,
      borderRadius: 50,
      padding: basePadding,
      borderColor: colors.white,
      borderWidth: 1,
    },
    iconsViews: {
      alignItems: 'center',
      width: '15%',
      textAlign: 'center',
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

  useEffect(() => {
    console.log('newCounterValue has changed');
    if (didThingUpdate) {
      setUpdateThingTimeout(
        setTimeout(
          () =>
            dispatch(updateThing({ ...thing, counterValue: newCounterValue })),
          1000
        )
      );
    }
    return () => clearTimeout(updateThingTimeout);
  }, [newCounterValue]);

  // On render/rerender, we set the counter to the new prop value
  useEffect(() => {
    if (didThingUpdate) {
      console.log('useEffet Thing triggered');
      setNewCounterValue(thing.counterValue);

      const snackbarProps: SnackbarProps = {
        duration: 1500,
        isVisible: true,
        message: 'Modification Saved !',
        onDismiss: () => dispatch(hideSnackbar()),
      };

      dispatch(displaySnackbar(snackbarProps));
    } else {
      setDidThingUpdate(true);
    }
  }, [thing]);

  const count = (type: string) => {
    console.log('count triggered');
    // clearTimeout(updateThingTimeout);

    const step = parseFloat(thing.step);
    const counterValue = parseFloat(thing.counterValue);

    if (type === types.INCREMENT) {
      setNewCounterValue(`${(counterValue + step).toFixed(1)}`);
    } else {
      setNewCounterValue(`${(counterValue - step).toFixed(1)}`);
    }
  };

  return (
    <View
      style={
        [{ backgroundColor: thing.color }, ItemStyles.container] as ViewStyle
      }
    >
      <View style={ItemStyles.iconsViews}>
        <IconButton
          onPress={() => count(types.DECREMENT)}
          icon='minus'
          size={30}
        ></IconButton>
      </View>
      <View style={ItemStyles.item}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('thingDetails', { thingId: thing.id })
          }
        >
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <Text
              style={[ItemStyles.text, ItemStyles.itemName]}
              numberOfLines={1}
            >
              {thing.name}
            </Text>
            <Text style={ItemStyles.text}>{newCounterValue}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={ItemStyles.iconsViews}>
        <IconButton
          onPress={() => count(types.INCREMENT)}
          icon='plus'
          size={30}
        ></IconButton>
      </View>
    </View>
  );
}
