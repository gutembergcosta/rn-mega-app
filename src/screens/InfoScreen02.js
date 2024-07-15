import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const InfoScreen02 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Info 02</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InfoScreen02;
