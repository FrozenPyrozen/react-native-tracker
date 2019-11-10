import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam('_id');
  const track = state.find(track => track._id === _id);
  const { name } = track;
  return (
    <View>
      <Text style={styles.text}>name</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
