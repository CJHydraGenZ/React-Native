import React from 'react';
import { Text, View } from 'react-native';

import { styles } from '../../styles/Styles'
import { LinearGradient } from 'expo-linear-gradient';

export const About = () => {
  return (
    <View style={styles.containerAbout}>
      <LinearGradient
        start={[0.10, 0]}
        colors={['#23e8a3', '#23e8ca', '#23cee8']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 700,
        }}
      />
      <Text style={styles.text}>About</Text>
      <View style={styles.fullBox}>

      </View>
    </View>
  )
}