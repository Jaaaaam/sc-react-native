import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {login} from '../api/AuthService';
import {useDispatch} from 'react-redux';
import {setAccount} from '../reducers/authReducer';
import {Dimensions} from 'react-native';

import {TextInput, Button, ActivityIndicator} from 'react-native-paper';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    login({email, password, role: 'customer'})
      .then(res => {
        console.log(res, 'success');
        dispatch(setAccount(res.data));
        navigation.navigate('Home');
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err, 'err1232');
        setIsLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.redBox} />
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome back!</Text>
        <TextInput
          value={email}
          name="email"
          placeholder="Email"
          mode="outlined"
          style={styles.input}
          theme={{colors: {primary: '#aa0e0e', placeholder: '#E2E2E2'}}}
          onChangeText={value => {
            setEmail(value);
          }}
        />
        <TextInput
          value={password}
          name="password"
          placeholder="password"
          mode="outlined"
          type="password"
          style={styles.input}
          theme={{colors: {primary: '#aa0e0e', placeholder: '#E2E2E2'}}}
          onChangeText={value => {
            setPassword(value);
          }}
        />
        <Button
          onPress={handleLogin}
          mode="contained"
          color="#aa0e0e"
          style={{borderRadius: 50, marginTop: 20}}>
          Sign In
        </Button>
      </View>
      {isLoading && (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator color="#aa0e0e" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'SourceSans',
  },
  logo: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  redBox: {
    position: 'absolute',
    height: 400,
    backgroundColor: '#aa0e0e',
    width: '100%',
    top: 0,
  },
  content: {
    padding: 20,
    margin: 20,
    width: screenWidth - 40,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  input: {
    backgroundColor: 'none',
    border: '1px solid #E2E2E2',
  },
  loaderWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'rgba(255,255,255, .4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;
