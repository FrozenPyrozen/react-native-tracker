import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitBtnText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView behavior="padding">
      <Spacer>
        <Text h3>{headerText}</Text>
      </Spacer>
      <Input
        style
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitBtnText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
  },
});

export default AuthForm;
