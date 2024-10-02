import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StepOne from '../../../assets/img/stepOne.svg';
import StepTwo from '../../../assets/img/stepTwo.svg';
import StepThree from '../../../assets/img/stepThree.svg';

type Props = {
  headerText: string;
  isFirstStep?: boolean;
  isSecondStep?: boolean;
  isThirdStep?: boolean;
};

const Header = ({
  headerText,
  isFirstStep = false,
  isSecondStep = false,
  isThirdStep = false,
}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{headerText}</Text>
      <View style={styles.containerStepOne}>
        {isFirstStep ? <StepOne /> : null}
        {isSecondStep ? <StepTwo /> : null}
        {isThirdStep ? <StepThree /> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MontserratBold',
    color: '#004B40',
    textAlign: 'center',
  },
  container: {
    marginBottom: 10,
  },
  containerStepOne: {
    marginTop: 16,
  },
});

export default Header;
