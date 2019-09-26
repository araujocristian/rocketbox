import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import styles from './styles';

import logo from '../../asserts/logo.png';

const Main = ({ navigation: { navigate } }) => {
  const [newBox, setNewBox] = useState('');
  const handleSignIn = async () => {
    const response = await api.post('boxes', {
      title: newBox,
    });

    navigate('Box');
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <TextInput
        style={styles.input}
        placeholder="Crie um box"
        placeholderTextColor="#999"
        autoCapitalize="none"
        autoCorrect={false}
        underlineColorAndroid="transparent"
        value={newBox}
        onChangeText={text => setNewBox(text)}
      />

      <TouchableOpacity onPress={handleSignIn} style={styles.button}>
        <Text style={styles.buttonText}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Main;
