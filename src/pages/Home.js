import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Home = () => {
  const account = useSelector(state => state.auth.account);
  console.log(account, 'CHECK ACCOUNT');
  return (
    <View style={styles.container}>
      <Text>This is the home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
