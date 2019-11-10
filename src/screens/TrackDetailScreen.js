import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(track => track._id === _id);
  const { name, locations } = track;
  const initialCoordinates = locations[0].coords;

  return (
    <>
      <Text style={styles.title}>name</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoordinates,
        }}
        style={styles.map}
      >
        <Polyline coordinates={locations.map(location => location.coords)} />
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 48 },
  map: {
    height: 300,
  },
});

export default TrackDetailScreen;
