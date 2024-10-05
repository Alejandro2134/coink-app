import React, {useState} from 'react';
import {
  InputModeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Line from '../Line/Line';

type Props = {
  placeholder: string;
  inputMode: InputModeOptions;
};

const Input = ({placeholder, inputMode}: Props) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      {value && <Text style={styles.headingText}>{placeholder}</Text>}
      <View>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          inputMode={inputMode}
          placeholderTextColor={'#AAAAAA'}
          value={value}
          onChangeText={setValue}
        />
      </View>

      <View>
        <Line color="#AAAAAA" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontFamily: 'AvenirLTStd65Medium',
    fontSize: 16,
    color: '#212121',
    height: 40,
    marginLeft: 8,
  },
  headingText: {
    fontSize: 14,
    color: '#AAAAAA',
    fontFamily: 'AvenirLTStd65Medium',
    marginLeft: 12,
  },
  container: {
    marginTop: 24,
  },
});

export default Input;
