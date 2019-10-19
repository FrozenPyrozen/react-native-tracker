import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location';

import Map from '../components/Map';

// Development purposes only! Delete before production
import '../_mockLocation';

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    startWatching();
  }, []);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
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
