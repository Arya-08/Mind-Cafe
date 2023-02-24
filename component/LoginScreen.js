import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import AppForm from './AppForm';
import AppFormField from './AppFormField';
import SubmitButton from './SubmitButton';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function LoginScreen({navigation}) {
  function check(values) {
    if (values.email == 'demo@gmail.com') {
      if (values.password == 1234) {
        {
          navigation.navigate('Home');
        }
      } else alert('wrong password');
    } else alert('Wrong email');
  }
  return (
    <View style={styles.container}>
      <Image style={styles.img1} source={require('./Mindcafe-preview2.png')} />
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => check(values)}
        validationSchema={validationSchema}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="useremail"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <Text style={{fontSize: 16, color: '#000000'}}>
            Not have an account?{' '}
          </Text>
          <TouchableOpacity
            style={{color: '#171E38'}}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#000000'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faede4',
    alignItems: 'center',
  },
  img1: {
    height: 96,
    width: 228,
    marginTop: 74,
    marginBottom: 160,
  },
});
