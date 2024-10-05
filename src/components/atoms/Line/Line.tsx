import React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  color?: '#1EEA00' | '#AAAAAA';
};

const Line = ({color = '#1EEA00'}: Props) => {
  return <View style={[styles.line, {borderBottomColor: color}]} />;
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Line;
