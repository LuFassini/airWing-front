import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logo = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Image
        source={require('./../../../assets/images/logo.png')}
        style={{
          width: 70,
          height: 70,
          marginTop: 50,
          marginBottom: 45,
          marginLeft: 15,
        }}
      />
    </TouchableOpacity>
  );
};

export default Logo;