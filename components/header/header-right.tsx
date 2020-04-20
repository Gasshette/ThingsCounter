import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native";

export default function HeaderRight() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('appConfiguration');
      }}
    >
      <Image source={require('icons/baseline_settings_white_18dp.png')} />
    </TouchableOpacity>
  );
}