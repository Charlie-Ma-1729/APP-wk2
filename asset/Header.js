import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header=()=> {
  return (
    <View>
      <View style={styles.headerstyle}>
        <Text style={styles.headtextstyle}>
        The 5 Greatest Albums of All Time
        </Text>
        <Text style={styles.textstyle}>BY ROLLING STONE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerstyle: {
    height: 60,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#FFFFFF",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    elevation: 2,
  },

  headtextstyle: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  textstyle: {
    color: "#FFFFFF",
  }
});

export default Header;