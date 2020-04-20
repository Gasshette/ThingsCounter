import 'react-native-gesture-handler';
import React from 'react';
import ThingsList from './components/thingsList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppConfiguration from './components/app-configuration';
import styles, { white } from './styles';
import HeaderRight from './components/header/header-right';

const Stack = createStackNavigator();

export default function App() {
  return (
    // navigation is passed through screenOptions and therefore accessible in headerRight component with useNavigation() Hook
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={() => ({
          headerStyle: styles.headerStyle,
          headerTintColor: white,
          headerTitleStyle: styles.headerTitleStyle,
          headerRight: () => <HeaderRight />,
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
