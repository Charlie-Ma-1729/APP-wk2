import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Header from './asset/Header';
import AlbumList from './asset/AlbumList';

export default function App() {
  return (
    <SafeAreaView style={styles.backgroundstyle}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundstyle: {
    flex: 1,
    backgroundColor: "#000000",
  },
});
