import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { Formik } from 'formik';

import LoginButton from '../../widgets/login_button';
import ScreenStatusBar from '../../widgets/screen_status_bar';
import { styles } from './styles';

let loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('Email is required.'),
  password: yup
    .string()
    .min(8, e => `Password must atleast ${e.min} characters.`)
    .required('Password is required.'),
});

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validateOnMount={true}
      validationSchema={loginSchema}
      onSubmit={values => console.log(values)}>
      {({ handleChange, handleBlur, values, touched, errors }) => (
        <View style={styles.container}>
          <ScreenStatusBar />
          <View style={styles.main}>
            <Text style={styles.title}>Login Screen</Text>
            <TextInput
              style={styles.usernameInputBar}
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            ) : (
              <View />
            )}
            <TextInput
              style={styles.passwordInputBar}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && touched.password ? (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            ) : (
              <View />
            )}
            <LoginButton email={values.email} password={values.password} />
            <TouchableOpacity
              style={styles.moveButton}
              onPress={() => navigation.navigate('Register')}>
              <Text style={styles.moveButtonText}>Move to Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default LoginScreen;
