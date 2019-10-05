import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

const NavLink = ({ navigation, text, routeName }) => {
  const handleNavigation = () => navigation.navigate(routeName);
  return (
    <TouchableOpacity onPress={handleNavigation}>
      <Text style={styles.link}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
});

export default withNavigation(NavLink);
