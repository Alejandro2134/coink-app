import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Oink from '../../../assets/img/oink.svg';
import PhoneInput from '../../organisms/PhoneInput/PhoneInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../constants/types';

type Props = NativeStackScreenProps<RootStackParamList, 'AddCellphone'>;

const AddCellphone = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.messageContainer}>
          <Oink height={64} width={72} />
          <View style={styles.containerText}>
            <Text style={styles.text}>
              Para comenzar, por favor ingresa{' '}
              <Text style={styles.innerText}>tu número celular.</Text>
            </Text>
          </View>
        </View>

        <View style={styles.line} />
      </View>

      <View style={styles.phoneInputContainer}>
        <PhoneInput navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 56,
    flex: 1,
  },
  containerText: {
    marginLeft: 24,
    flex: 1,
    justifyContent: 'center',
  },
  messageContainer: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'AvenirLTStd55Roman',
    fontSize: 16,
    flexWrap: 'wrap',
  },
  innerText: {
    fontFamily: 'AvenirLTStd85Heavy',
    color: '#757575',
    fontSize: 16,
  },
  line: {
    marginTop: 24,
    borderBottomColor: '#1EEA00',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  phoneInputContainer: {
    flex: 6,
  },
  infoContainer: {
    flex: 1,
  },
});

export default AddCellphone;
