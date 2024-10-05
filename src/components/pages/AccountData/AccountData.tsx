import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OinkM from '../../../assets/img/oinkM.svg';
import Line from '../../atoms/Line/Line';
import FormSection from '../../organisms/FormSection/FormSection';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
import {RootStackParamList} from '../../../constants/types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'AccountData'>;

const AccountData = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerMessage}>
          <OinkM />
          <View style={styles.containerText}>
            <Text style={styles.textTitle}>¿CUÁLES SON TUS DATOS?</Text>
            <Text style={styles.text}>
              Ahora necesitamos saber algunos datos tuyos
            </Text>
          </View>
        </View>

        <View style={styles.containerLine}>
          <Line />
        </View>
      </View>

      <View>
        <FormSection title="Documento de identidad">
          <Input placeholder="Número de documento" inputMode="numeric" />
          <Input
            placeholder="Fecha de expedición del documento"
            inputMode="text"
          />
          <Input placeholder="Fecha de nacimiento" inputMode="text" />
        </FormSection>
        <FormSection title="Configura tu cuenta">
          <Input placeholder="Correo electrónico" inputMode="email" />
          <Input placeholder="Confirmar correo electrónico" inputMode="email" />
          <Input placeholder="PIN de seguridad" inputMode="text" />
          <Input placeholder="Confirmar PIN de seguridad" inputMode="text" />
        </FormSection>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="SIGUIENTE"
          onPress={() => navigation.navigate('Finish')}
          containerStyle={styles.nextStepButton}
          textStyle={styles.nextStepButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 43,
  },
  containerText: {
    marginLeft: 24,
    flex: 1,
    justifyContent: 'center',
  },
  containerMessage: {
    flexDirection: 'row',
  },
  containerLine: {
    marginTop: 24,
  },
  textTitle: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    color: '#004B40',
    flexWrap: 'wrap',
  },
  text: {
    fontFamily: 'AvenirLTStd55Roman',
    fontSize: 16,
    flexWrap: 'wrap',
    color: '#757575',
    marginTop: 12,
  },
  nextStepButton: {
    backgroundColor: '#1EEA00',
  },
  nextStepButtonText: {
    color: '#004B40',
    fontFamily: 'MontserratBold',
  },
  buttonContainer: {
    marginTop: 48,
  },
});

export default AccountData;
