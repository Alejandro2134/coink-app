import React from 'react';
import {
  ColorValue,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

type Props = {
  title: string;
  containerStyle: {
    backgroundColor: ColorValue;
  };
  textStyle: {
    color: ColorValue;
    fontFamily: string;
  };
  onPress: () => void;
};

const Button: React.FC<Props> = ({
  containerStyle,
  textStyle,
  title,
  onPress,
}: Props) => {
  const handlePress = () => onPress();

  return (
    <TouchableHighlight
      onPress={handlePress}
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      style={styles.touchable}>
      <View style={[styles.container, containerStyle]}>
        <Text style={textStyle}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    height: 50,
    width: '100%',
  },
  touchable: {
    borderRadius: 25,
  },
});

export default Button;
