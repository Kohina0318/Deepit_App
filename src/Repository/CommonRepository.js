import {  ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigateToClearStack } from '../Navigation/NavigationService';

const postLoginProcess = async (mobileNo, password) => {
  try {
    const response = await fetch(
      `https://deepticomputer.co.in/api/login-process?mobile_no=${mobileNo}&password=${password}`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
      },
    );
    const result = await response.json();
  
    if (result.status) {
      return result;
    } else {
      return result;
    }
  } catch (err) {
    console.log('error inn Login Process api ', err);
  }
};

const getLogOut = async () => {
  var token = await AsyncStorage.getItem('@token');

  try {
    const response = await fetch(
      'https://deepticomputer.co.in/api/logout-process',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
      },
    );
    const result = await response.json();
    
    if (result.token_status == 'false') {
      await AsyncStorage.removeItem('@UserData');
      await AsyncStorage.removeItem('@token');
      ToastAndroid.showWithGravityAndOffset(
        `${'Token Expired'}`,
        ToastAndroid.TOP,
        ToastAndroid.LONG,
        10,
        10,
      );
      navigateToClearStack('Login');
    } else {
      return result;
    }
  } catch (err) {
    console.log('error inn getLogOut api ', err);
  }
};

const getAttendance = async (rno, sd, ed) => {
  var token = await AsyncStorage.getItem('@token');

  try {
    const response = await fetch(
      `https://deepticomputer.co.in/api/get-attendance?student_id=${rno}&start_date=${sd}&end_date=${ed}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
      },
    );
    const result = await response.json();
    
    if (result.token_status == 'false') {
      await AsyncStorage.removeItem('@UserData');
      await AsyncStorage.removeItem('@token');
      ToastAndroid.showWithGravityAndOffset(
        `${'Token Expired'}`,
        ToastAndroid.TOP,
        ToastAndroid.LONG,
        10,
        10,
      );
      navigateToClearStack('Login');
    } else {
      return result;
    }
  } catch (err) {
    console.log('error inn Attandance api ', err);
  }
};

const getMarkAttendance = async (onscreen, ipadd) => {
  var token = await AsyncStorage.getItem('@token');

  try {
    const response = await fetch(
      `https://deepticomputer.co.in/api/mark-attendance?onScreen=${onscreen}&ipAddress=${ipadd}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: token,
        },
      },
    );
    const result = await response.json();

    if (result.token_status == 'false') {
      await AsyncStorage.removeItem('@UserData');
      await AsyncStorage.removeItem('@token');
      ToastAndroid.showWithGravityAndOffset(
        `${'Token Expired'}`,
        ToastAndroid.TOP,
        ToastAndroid.LONG,
        10,
        10,
      );
      navigateToClearStack('Login');
    } else {
      return result;
    }
  } catch (err) {
    console.log('error inn getMarkAttendance api ', err);
  }
};

export {postLoginProcess, getLogOut, getAttendance, getMarkAttendance};
