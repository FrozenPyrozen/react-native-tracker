import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';

import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

// Development purposes only! Delete before production
// import '../_mockLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const [err] = useLocation(isFocused, location => {
    addLocation(location, state.recording);
  });

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2 style={styles.text}>
        Create a Track
      </Text>
      <Map />
      {err ? (
        <Text style={styles.error}>Please enable location services</Text>
      ) : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 20,
  },
});

export default withNavigationFocus(TrackCreateScreen);
