import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../atoms/Button/Button';
import CoinkLogo from '../../../assets/img/coinkLogo.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../constants/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoInfoContainer}>
        <CoinkLogo width={155} height={126} />
        <Text style={styles.text}>LA ALCANCÍA QUE SIEMPRE TE ACOMPAÑA</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          title="REGÍSTRATE"
          containerStyle={styles.signUpButton}
          textStyle={styles.signUpButtonText}
          onPress={() => navigation.navigate('AddCellphone')}
        />
        <View style={styles.loginButtonContainer}>
          <Button
            title="INGRESA"
            containerStyle={styles.logInButton}
            textStyle={styles.logInButtonText}
            onPress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 25,
    marginRight: 25,
    flex: 1,
  },
  signUpButton: {
    backgroundColor: '#1EEA00',
  },
  signUpButtonText: {
    color: '#004B40',
    fontFamily: 'MontserratBold',
  },
  logInButton: {
    backgroundColor: '#004B40',
  },
  logInButtonText: {
    color: '#FFFFFF',
    fontFamily: 'MontserratSemiBold',
  },
  logoInfoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 4,
  },
  buttonsContainer: {
    flex: 1,
  },
  text: {
    fontFamily: 'MontserratBold',
    color: '#1EEA00',
    fontSize: 18,
    marginTop: 40,
    textAlign: 'center',
  },
  loginButtonContainer: {
    marginTop: 16,
  },
});

export default Login;
