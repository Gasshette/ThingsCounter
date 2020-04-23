import React from 'react';
import { Appbar } from 'react-native-paper';

export default function Header({ scene, previous, navigation }: any) {
  const { options } = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  const previousIcon = () => {
    if (previous) {
      return <Appbar.BackAction onPress={() => navigation.goBack()} />;
    }
  };

  return (
    <Appbar.Header>
      {previousIcon()}

      <Appbar.Content title={title} />
      <Appbar.Action
        icon='home'
        onPress={() => navigation.navigate('thingsList')}
      />
      <Appbar.Action
        icon='settings'
        onPress={() => navigation.navigate('appConfiguration')}
      />
    </Appbar.Header>
  );
}
