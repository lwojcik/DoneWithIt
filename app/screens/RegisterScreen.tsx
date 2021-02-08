import React from 'react'
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
  Form,
  FormField,
  SubmitButton,
} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField
          name="name"
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          placeholder="Name"
          textContentType="name" // iOS only
        />
        <FormField
          name="email"
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress" // iOS only
        />
        <FormField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password" // iOS only
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});