import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './component/styles/Styles';
import { NativeRouter, Route, Link } from "react-router-native";
import { Header } from './component/header/header'











export default function App() {
  return (
    <NativeRouter>
      <Header />
    </NativeRouter>
  );
}


