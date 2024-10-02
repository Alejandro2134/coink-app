/* eslint-disable react/no-unstable-nested-components */
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Login from './src/components/pages/Login/Login';
import {StatusBar, TouchableHighlight} from 'react-native';
import AddCellphone from './src/components/pages/AddCellphone/AddCellphone';
import {RootStackParamList} from './src/constants/types';
import Header from './src/components/organisms/Header/Header';
import BackArrow from './src/assets/img/backArrow.svg';
import AccountData from './src/components/pages/AccountData/AccountData';
import Finish from './src/components/pages/Finish/Finish';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <Stack.Navigator
        screenOptions={({navigation}) => ({
          headerBackVisible: false,
          headerLeft: () => (
            <TouchableHighlight
              onPress={navigation.goBack}
              activeOpacity={0.6}
              underlayColor="#DDDDDD">
              <BackArrow width={40} height={40} />
            </TouchableHighlight>
          ),
          headerTitleAlign: 'center',
        })}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddCellphone"
          component={AddCellphone}
          options={{
            headerTitle: () => (
              <Header headerText="NÚMERO CELULAR" isFirstStep={true} />
            ),
          }}
        />
        <Stack.Screen
          name="AccountData"
          component={AccountData}
          options={{
            headerTitle: () => (
              <Header headerText="DATOS DE CUENTA" isSecondStep={true} />
            ),
          }}
        />
        <Stack.Screen
          name="Finish"
          component={Finish}
          options={{
            headerTitle: () => (
              <Header headerText="FINALIZAR" isThirdStep={true} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
