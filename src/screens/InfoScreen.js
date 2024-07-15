import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const InfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Info Screen</Text>
      <Button
        title="Go to Info02"
        onPress={() => navigation.navigate('Info02')}
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

export default InfoScreen;
