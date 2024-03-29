import React from 'react';
import { View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './Card.component.style'

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  )
}

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}


export default Card