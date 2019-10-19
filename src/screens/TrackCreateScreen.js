import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from 'expo-location';

import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';

// Development purposes only! Delete before production
//import '../_mockLocation';

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);

  useEffect(() => {
    startWatching();
  }, []);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        location => {
          addLocation(location);
        }
      );
    } catch (error) {
      setErr(error);
    }
  };

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2 style={styles.text}>
        Create a Track
      </Text>
      <Map />
      {err ? (
        <Text style={styles.error}>Please enable location services</Text>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 20,
  },
});

export default TrackCreateScreen;
