import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import { Formik } from 'formik';

import RegisterButton from '../../widgets/register_button';
import ScreenStatusBar from '../../widgets/screen_status_bar';
import { styles } from './styles';

let registerSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email.')
    .required('Email is required.'),
  password: yup
    .string()
    .min(8, e => `Password must atleast ${e.min} characters.`)
    .required('Password is required.'),
  name: yup.string().required('Name is required.'),
  image: yup.string().required('Image is required.'),
  bio: yup.string().required('Bio is required.'),
});

const RegisterScreen = () => {
  const navigation = useNavigation();

  const notUsed = () => {};

  return (
    <Formik
      initialValues={{ email: '', password: '', name: '', image: '', bio: '' }}
      validateOnMount={true}
      validationSchema={registerSchema}
      onSubmit={values => console.log(values)}>
      {({ handleChange, handleBlur, values, touched, errors }) => (
        <View style={styles.container}>
          <ScreenStatusBar />
          <View style={styles.main}>
            <Text style={styles.title}>Register Screen</Text>
            <TextInput
              style={styles.usernameInputBar}
              placeholder="Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <Text style={styles.errorMessage}>{errors.name}</Text>
            ) : (
              <View />
            )}
            <TextInput
              style={styles.emailInputBar}
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
            <TextInput
              style={styles.imageInputBar}
              placeholder="Image URL"
              onChangeText={handleChange('image')}
              onBlur={handleBlur('image')}
              value={values.image}
            />
            {errors.image && touched.image ? (
              <Text style={styles.errorMessage}>{errors.image}</Text>
            ) : (
              <View />
            )}
            <TextInput
              style={styles.numberInputBar}
              placeholder="Bio"
              onChangeText={handleChange('bio')}
              onBlur={handleBlur('bio')}
              value={values.bio}
            />
            {errors.bio && touched.bio ? (
              <Text style={styles.errorMessage}>{errors.bio}</Text>
            ) : (
              <View />
            )}
            <RegisterButton
              name={values.name}
              email={values.email}
              password={values.password}
              image={values.image}
              bio={values.bio}
            />
            <TouchableOpacity
              style={styles.moveButton}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.moveButtonText}>Move to Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default RegisterScreen;
