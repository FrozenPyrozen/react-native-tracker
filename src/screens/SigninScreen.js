import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import Spacer from '../components/Spacer';

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);

  const handleSubmit = ({ email, password }) => signin({ email, password });

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={handleSubmit}
        submitBtnText="Sign In"
      />
      <Spacer>
        <NavLink
          text="Already have an account? Sign up instead"
          routeName="Signup"
        />
      </Spacer>
    </View>
  );
};

SigninScreen.navigationOptions = () => ({
  header: null,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default SigninScreen;
