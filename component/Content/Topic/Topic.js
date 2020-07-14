import React from 'react';
import { Text } from 'react-native';

import { styles } from '../../styles/Styles'


export const Topic = ({ match }) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);

