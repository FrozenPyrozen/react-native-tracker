import React from 'react';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import Spacer from './Spacer';

const TrackForm = ({}) => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter name" />
      </Spacer>
      <Spacer>
        <Button title="Start Recording" />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
