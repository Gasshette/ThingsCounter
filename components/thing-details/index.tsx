import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles, { basePadding, colors } from '../../styles';
import ColorPicker from '../color-picker';
import { useThingContextValue } from '../../context';
import IThing from '../../context/interfaces/i-thing';
import { updateThing } from '../../actions';

export default function ThingDetails({
  route,
  navigation,
}: {
  navigation: any;
  route: { params?: any };
}) {
  const { state, dispatch } = useThingContextValue();
  const [isCreationMode] = useState(route?.params?.thingId === undefined);
  const [timer, setTimer] = useState(0);
  const [shouldCreate, setShouldCreate] = useState(false);

  const defaultThingState = () => {
    if (!isCreationMode) {
      return state.things[route.params.thingId];
    }

    // En mode création, on construit une object Thing pour le push plus tard
    const emptyThing: IThing = {
      id: '',
      color: colors.white,
      counterValue: '',
      name: '',
      step: '',
    };

    return emptyThing;
  };

  const [thing, setThing] = useState(defaultThingState());

  useEffect(() => {
    if (shouldCreate) {
      dispatch(updateThing(thing));
      navigation.push('thingsList');
    }
  }, [shouldCreate]);

  const setThingDebounce = (params: {
    name?: string;
    counterValue?: string;
    step?: string;
    color?: string;
  }) => {
    clearTimeout(timer);
    // setThing({ ...thing, ...params });
    setTimer(setTimeout(() => setThing({ ...thing, ...params }), 300));
  };

  const createThing = () => {
    setThing({ ...thing, id: `${state.things.length}` });
    setShouldCreate(true);
  };

  const localStyles = StyleSheet.create({
    container: {
      padding: basePadding,
      paddingBottom: 50,
    },
    col: {
      width: '45%',
    },
    input: {
      width: '100%',
      marginBottom: 15,
    },
  });

  return (
    <ScrollView style={localStyles.container}>
      <View style={{ paddingBottom: 50 }}>
        <TextInput
          label='Name'
          style={localStyles.input}
          value={thing.name}
          onChangeText={(name: string) => setThingDebounce({ name })}
        />

        <View style={styles.flexRow}>
          <View style={localStyles.col}>
            <TextInput
              label='Counter value'
              style={localStyles.input}
              value={thing.counterValue}
              keyboardType={'numeric'}
              onChangeText={(counterValue: string) =>
                setThingDebounce({ counterValue })
              }
            />
          </View>

          <View style={localStyles.col}>
            <TextInput
              label='Step'
              style={localStyles.input}
              value={thing.step}
              keyboardType={'numeric'}
              onChangeText={(step: string) => setThingDebounce({ step })}
            />
          </View>
        </View>

        <ColorPicker thing={thing} onPick={setThingDebounce} />

        <Button icon='check' onPress={() => createThing()}>
          Create
        </Button>
      </View>
    </ScrollView>
  );
}
