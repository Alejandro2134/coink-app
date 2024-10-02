import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Backspace from '../../../assets/img/backspace.svg';
import Check from '../../../assets/img/check.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../constants/types';

type Props = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    'AddCellphone',
    undefined
  >;
};

type ListData = {
  id: string;
  isComponent: boolean;
  value: string | JSX.Element;
  onPress: () => void;
};

const PhoneInput = ({navigation}: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  const addNumber = (number: string) => {
    if (phoneNumber.length < 10) {
      setPhoneNumber(phoneNumber + number);

      if (phoneNumber.length === 9) {
        setIsFilled(true);
      }
    }
  };

  const DATA: ListData[] = [
    {
      id: '1',
      isComponent: false,
      value: '1',
      onPress: () => addNumber('1'),
    },
    {
      id: '2',
      isComponent: false,
      value: '2',
      onPress: () => addNumber('2'),
    },
    {
      id: '3',
      isComponent: false,
      value: '3',
      onPress: () => addNumber('3'),
    },
    {
      id: '4',
      isComponent: false,
      value: '4',
      onPress: () => addNumber('4'),
    },
    {
      id: '5',
      isComponent: false,
      value: '5',
      onPress: () => addNumber('5'),
    },
    {
      id: '6',
      isComponent: false,
      value: '6',
      onPress: () => addNumber('6'),
    },
    {
      id: '7',
      isComponent: false,
      value: '7',
      onPress: () => addNumber('7'),
    },
    {
      id: '8',
      isComponent: false,
      value: '8',
      onPress: () => addNumber('8'),
    },
    {
      id: '9',
      isComponent: false,
      value: '9',
      onPress: () => addNumber('9'),
    },
    {
      id: '10',
      isComponent: true,
      value: <Backspace />,
      onPress: () => {
        setPhoneNumber(phoneNumber.slice(0, phoneNumber.length - 1));
        setIsFilled(false);
      },
    },
    {
      id: '11',
      isComponent: false,
      value: '0',
      onPress: () => addNumber('0'),
    },
    {
      id: '12',
      isComponent: true,
      value: (
        <View
          style={[
            styles.circle,
            isFilled ? styles.greenCircle : styles.defaultCircle,
          ]}>
          <Check />
        </View>
      ),
      onPress: () => {
        if (isFilled) {
          navigation.navigate('AccountData');
        }
      },
    },
  ];

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="( X X X - X X X X X X )"
          maxLength={10}
          showSoftInputOnFocus={false}
          textAlign="center"
          value={phoneNumber}
        />
      </View>
      <View style={styles.conatinerNumbers}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableHighlight
              onPress={item.onPress}
              activeOpacity={0.6}
              underlayColor="#DDDDDD">
              {item.isComponent ? (
                <View style={styles.listElementContainer}>{item.value}</View>
              ) : (
                <View style={styles.listElementContainer}>
                  <Text style={styles.text}>{item.value}</Text>
                </View>
              )}
            </TouchableHighlight>
          )}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={styles.listContainer}
          contentContainerStyle={styles.elementContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'MontserratMedium',
    color: '#004B40',
    fontSize: 32,
  },
  conatinerNumbers: {
    marginTop: 48,
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  listElementContainer: {
    width: 56,
    alignItems: 'center',
  },
  elementContainer: {
    gap: 24,
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultCircle: {
    backgroundColor: '#D3D3D3',
  },
  greenCircle: {
    backgroundColor: '#1EEA00',
  },
  input: {
    fontSize: 24,
    fontFamily: 'AvenirLTStd55Roman',
  },
  inputContainer: {
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 5,
  },
});

export default PhoneInput;
