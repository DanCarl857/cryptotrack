import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './Button.component.style'

const Button = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text.toUpperCase()}</Text>
  </TouchableOpacity>
)

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func
}

export default Button