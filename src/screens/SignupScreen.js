import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';

const SignupScreen = () => {
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
      <Spacer>
        <NavLink
          text="Already have an account? Sign in instead"
          routeName="Signin"
        />
      </Spacer>
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
});

export default SignupScreen;
