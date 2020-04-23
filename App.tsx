import 'react-native-gesture-handler';
import React from 'react';
import ThingsList from './components/thingsList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppConfiguration from './components/app-configuration';
import styles, { colors } from './styles';
import ThingDetails from './components/thing-details';
import { Provider as PaperProvider, DarkTheme } from 'react-native-paper';
import Header from './components/header/header';
import { ThingsProvider, initialState } from './context';
import thingReducer from './reducers';
import IThing from './context/interfaces/i-thing';

const Stack = createStackNavigator();


export default function App() {
  return (
    <PaperProvider theme={DarkTheme}>
      <ThingsProvider initialState={initialState} reducer={thingReducer}>
        {/* navigation is passed through screenOptions and therefore accessible */}
        {/* in headerRight component with useNavigation() Hook */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={() => ({
              headerMode: 'screen',
              cardStyle: { backgroundColor: colors.black },
              header: ({ scene, previous, navigation }) => (
                <Header
                  scene={scene}
                  previous={previous}
                  navigation={navigation}
                />
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
              options={{ title: 'Edition/Création' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThingsProvider>
    </PaperProvider>
  );
}
