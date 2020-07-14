import React, { useState } from 'react';
import { Text, View, Button, Alert } from 'react-native';

import { styles } from '../../styles/Styles'

export const Home = () => {
  // const [timesPressed, setTimesPressed] = useState(0);
  const [click, setClick] = useState(0)
  function tambah() {
    setClick(click + 1)
  }
  function kurang() {
    if (click <= 0) return Alert.alert('sudah mencapai 0')
    setClick(click - 1)
  }

  return (
    <View>
      <Text style={styles.header}>Home</Text>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <Button
        title='tambah'
        onPress={tambah}
      />
      <Button
        title='kurang'
        onPress={kurang}
      />
      <Text style={styles.header}>{click}</Text>

    </View>
  )
}