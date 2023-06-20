// eslint-disable-next-line object-curly-newline
import { Text, View, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  currentTemperature: {
    fontSize: 64,
    marginBottom: '15px',
    color: 'white',
  },
  maxMinTemperature: {
    fontSize: 18,
    color: 'white',
  },
  currentIcon: {
    width: '100px',
    height: '100px',
  },
  additionalInfoView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    borderRadius: 20,
    width: '350px',
    backgroundColor: '#07224a',
  },
  additionalInfoText: {
    fontSize: 14,
    color: 'white',
  },
  additionalInfoIcon: {
    marginRight: 5,
    width: 16,
    height: 16,
  },
});

export const LiveWeatherBlock: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.currentIcon}
        source={require('../assets/icons/cloudy.png')}
      />
      <Text style={styles.currentTemperature}>28°</Text>
      <Text style={styles.maxMinTemperature}>Precipitations</Text>
      <Text style={[styles.maxMinTemperature, { marginBottom: 30 }]}>
        Max.: 31° Min.: 25°
      </Text>

      <View style={styles.additionalInfoView}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/icons/drops.svg')}
            style={styles.additionalInfoIcon}
          />
          <Text style={styles.additionalInfoText}>6%</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/icons/thermometer.svg')}
            style={styles.additionalInfoIcon}
          />
          <Text style={styles.additionalInfoText}>6%</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Image
            source={require('../assets/icons/wind.svg')}
            style={styles.additionalInfoIcon}
          />
          <Text style={[styles.additionalInfoText, { }]}>
            19 km/h
          </Text>
        </View>
      </View>
    </View>
  );
};
