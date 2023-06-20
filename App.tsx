/* eslint-disable react/style-prop-object */
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { LiveWeatherBlock } from './src/LiveWeatherBlock';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#08244F', '#134CB5', '#0B42AB']}
        locations={[0.05, 0.8]}
        style={styles.gradient}
      >
        <LiveWeatherBlock />
      </LinearGradient>
    </View>
  );
}
