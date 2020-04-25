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

  const homeIcon = () => {
    if (navigation.canGoBack()) {
      return (
        <Appbar.Action
          icon='home'
          onPress={() => navigation.navigate('thingsList')}
        />
      );
    }
  };

  const plusIcon = () => {
    return (
      <Appbar.Action
        icon='plus'
        onPress={() => navigation.navigate('thingDetails')}
      />
    );
  }

  return (
    <Appbar.Header>
      {previousIcon()}

      <Appbar.Content title={title} />
      {homeIcon()}
      {plusIcon()}
      <Appbar.Action
        icon='settings'
        onPress={() => navigation.navigate('appConfiguration')}
      />
    </Appbar.Header>
  );
}
