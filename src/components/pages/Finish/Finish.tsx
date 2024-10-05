import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import OinkPolicia from '../../../assets/img/oinkPolicia.svg';
import Line from '../../atoms/Line/Line';
import Button from '../../atoms/Button/Button';

const Finish = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.containerMessage}>
          <OinkPolicia />
          <View style={styles.containerText}>
            <Text style={styles.textTitle}>
              ESTAS MUY CERCA DE SER PARTE DE COINK.
            </Text>
            <Text style={styles.text}>
              Solo es necesario que leas detenidamente el contrato que se
              encuentra al final de esta pantalla y lo aceptes.
            </Text>
          </View>
        </View>

        <View style={styles.containerLine}>
          <Line />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <Text style={styles.textTitle}>LO MÁS IMPORTANTE</Text>
        <Text style={styles.text}>
          {'\n'}
          <Text>
            Para la apertura del Depósito de Bajo Monto en COINK debes ser una
            persona natural que de acuerdo con nuestra legislación vigente te
            encuentres en plena capacidad para adquirir derechos y contraer
            obligaciones.
          </Text>
          {'\n'}
          {'\n'}
          <Text>
            Abrirás una cuenta COINK de Bajo Monto la cual te permitirá tener un
            saldo hasta por 8 salarios mínimos en el mes y realizar débitos por
            el mismo valor. Si deseas sobrepasar estos límites debes
            solicitarnos la apertura de un Depósito Ordinario COINK Persona
            Natural.
          </Text>
          {'\n'}
          {'\n'}
          <Text>
            Solo puedes tener una cuenta COINK de Bajo Monto y podrás utilizar
            tu dispositivo móvil para consultar tu saldo, tus movimientos,
            realizar tus transacciones y administrar tu cuenta.
          </Text>
          {'\n'}
          {'\n'}
          <Text>
            Recuerda que no necesitas saldo mínimo ni monto inicial para su
            apertura.
          </Text>
        </Text>
      </View>

      <View style={styles.contractContainer}>
        <Text style={styles.contractText}>Lee tu contrato</Text>
        <View style={styles.acceptanceContainer}>
          <Text style={styles.acceptanceText}>
            He leído y acepto el contrato
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {}}
          title="ACEPTAR"
          containerStyle={styles.acceptButton}
          textStyle={styles.acceptButtonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 24,
    marginRight: 24,
    marginTop: 40,
    flex: 1,
  },
  containerMessage: {
    flexDirection: 'row',
  },
  containerText: {
    marginLeft: 24,
    flex: 1,
    justifyContent: 'center',
  },
  textTitle: {
    fontFamily: 'MontserratBold',
    fontSize: 16,
    color: '#004B40',
    flexWrap: 'wrap',
  },
  text: {
    fontFamily: 'AvenirLTStd55Roman',
    fontSize: 14,
    flexWrap: 'wrap',
    color: '#323232',
    marginTop: 6,
  },
  containerLine: {
    marginTop: 24,
  },
  containerInfo: {
    marginTop: 40,
  },
  contractText: {
    fontSize: 16,
    color: '#004B40',
    fontFamily: 'AvenirLTStd95Black',
    textDecorationLine: 'underline',
  },
  acceptanceText: {
    fontSize: 16,
    color: '#004B40',
    fontFamily: 'AvenirLTStd55Roman',
  },
  acceptanceContainer: {
    marginTop: 16,
  },
  contractContainer: {
    marginTop: 40,
  },
  acceptButton: {
    backgroundColor: '#1EEA00',
  },
  acceptButtonText: {
    color: '#004B40',
    fontFamily: 'MontserratBold',
  },
  buttonContainer: {
    marginTop: 40,
  },
});

export default Finish;
