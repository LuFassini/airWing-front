import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Logo = ({left}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Image
        source={require('./../../../assets/images/logo.png')}
        style={{
          width: 70,
          height: 70,
          marginLeft: left,
        }}
      />
    </TouchableOpacity>
  );
};

export default Logo;