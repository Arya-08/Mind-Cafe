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

export default function SingUpScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img1} source={require('./Mindcafe-preview2.png')} />
      <AppForm
        initialValues={{email: '', password: ''}}
        // onSubmit={values => check(values)}
        // validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account-circle"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="phone"
          keyboardType="numeric"
          name="email"
          placeholder="Mobile"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Sign Up" />
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <Text style={{fontSize: 16, color: '#000000'}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity
            style={{color: '#171E38'}}
            onPress={() => navigation.navigate('Login')}>
            <Text style={{fontWeight: 'bold', fontSize: 16, color: '#000000'}}>
              Sign In
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
    marginBottom: 75,
  },
});
