import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import { MaterialIcons } from '@expo/vector-icons';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text style={styles.text}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: 'Account',
  tabBarIcon: <MaterialIcons name="settings" size={20} />,
};

const styles = StyleSheet.create({
  text: {
    fontSize: 48,
  },
});

export default AccountScreen;
