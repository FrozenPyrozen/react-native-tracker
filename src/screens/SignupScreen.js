import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  const handleSubmit = ({ email, password }) => signup({ email, password });
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={handleSubmit}
        submitBtnText="Sign Up"
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.link}>
          Already have an account? Sign in instead
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SignupScreen.navigationOptions = () => ({
  header: null,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
});

export default SignupScreen;
