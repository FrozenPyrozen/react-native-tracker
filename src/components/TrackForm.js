import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = ({}) => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        <Button
          title={recording ? 'Stop' : 'Start Recording'}
          onPress={recording ? stopRecording : startRecording}
        />
      </Spacer>

      {!recording && locations.length ? (
        <Spacer>
          <Button title="Save Recording" onPress={saveTrack} />
        </Spacer>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
