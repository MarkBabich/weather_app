/* eslint-disable react/style-prop-object */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Test } from './src/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>REACT NATIVE</Text>
      <Test />
      <StatusBar style="auto" />
    </View>
  );
};
