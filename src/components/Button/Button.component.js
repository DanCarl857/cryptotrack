import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Button.component.style';

const Button = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text.toUpperCase()}</Text>
  </TouchableOpacity>
)

export default Button