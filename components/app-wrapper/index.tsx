import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { useThingContextValue } from "../../context";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "../../styles";
import Header from "../header";
import ThingsList from "../thingsList";
import AppConfiguration from "../app-configuration";
import ThingDetails from "../thing-details";
import { Snackbar } from "react-native-paper";

export default function AppWrapper() {
  const Stack = createStackNavigator();
  const { state } = useThingContextValue();
  return (
    <NavigationContainer>
      {/* navigation is passed through screenOptions and therefore accessible */}
      {/* in headerRight component with useNavigation() Hook */}
      <Stack.Navigator
        screenOptions={() => ({
          headerMode: 'screen',
          cardStyle: { backgroundColor: colors.black },
          header: ({ scene, previous, navigation }) => (
            <Header scene={scene} previous={previous} navigation={navigation} />
          ),
        })}
      >
        <Stack.Screen
          name='thingsList'
          component={ThingsList}
          options={{ title: 'Things counter' }}
        />
        <Stack.Screen
          name='appConfiguration'
          component={AppConfiguration}
          options={{ title: 'Configuration' }}
        />
        <Stack.Screen
          name='thingDetails'
          component={ThingDetails}
          options={{ title: 'Edition/Creation' }}
        />
      </Stack.Navigator>
      <Snackbar
        visible={state.snackbarProps.isVisible}
        duration={state.snackbarProps.duration}
        onDismiss={state.snackbarProps.onDismiss}
      >
        {state.snackbarProps.message}
      </Snackbar>
    </NavigationContainer>
  );
}
