import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.text}>TrackListScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
