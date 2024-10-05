import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
};

const FormSection = ({title, children}: PropsWithChildren<Props>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'MontserratBold',
    color: '#004B40',
    fontSize: 16,
  },
  container: {
    marginTop: 24,
  },
});

export default FormSection;
