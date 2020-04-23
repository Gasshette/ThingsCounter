import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import styles, { basePadding } from '../../styles';
import ColorPicker from '../color-picker';
import { useThingContextValue } from '../../context';

export default function ThingDetails({ route }: any) {
  const {state} = useThingContextValue();
  const [thing, setState] = useState(state.things[route.params.thingId]);

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
          onChangeText={(value: string) => setState({ ...thing, name: value })}
        />

        <View style={styles.flexRow}>
          <View style={localStyles.col}>
            <TextInput
              label='Counter value'
              style={localStyles.input}
              value={thing.counterValue}
              keyboardType={'numeric'}
              onChangeText={(value: string) =>
                setState({ ...thing, counterValue: value })
              }
            />
          </View>

          <View style={localStyles.col}>
            <TextInput
              label='Step'
              style={localStyles.input}
              value={thing.step}
              keyboardType={'numeric'}
              onChangeText={(value: string) =>
                setState({ ...thing, step: value })
              }
            />
          </View>
        </View>

        <ColorPicker thing={thing} />
      </View>
    </ScrollView>
  );
}
