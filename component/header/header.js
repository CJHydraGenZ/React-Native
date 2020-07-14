import React from 'react';
import { Text, View } from 'react-native';
import { Route, Link } from "react-router-native";
import { styles } from '../styles/Styles'
import { Home } from '../Content/Home/Home';
import { About } from '../Content/About/About';
import { Topic } from '../Content/Topic/Topic';
import { Topics } from '../Content/Topic/Topics';

export const Header = () => {
  return (

    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link
          to="/about"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>About</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Topics</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </View>
  )
}