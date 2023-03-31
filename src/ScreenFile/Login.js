import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StatusBar,
  Appearance,
  Dimensions,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FullSizeButton from '../Component/FullsizeButton';
import {useSelector, useDispatch} from 'react-redux';
import {MyThemeClass} from '../Component/Theme/ThemeDarkLightColor';
import {useNavigation} from '@react-navigation/native';
import {LoginStyle} from '../config/css/LoginStyle';
import {useToast} from 'react-native-toast-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postLoginProcess } from '../Repository/CommonRepository';
import Loader from '../Component/Loader/Loader';

const {width, height} = Dimensions.get('screen');

export default function Login(props) {
  
  const toast = useToast();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();
  const isDarkMode = Appearance.getColorScheme() === 'dark';
  const [loader, setLoader] = React.useState(false);
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);


  const handleLogin = async () => {
    if (mobileNo == '') {
      toast.show('Mobile number is required!', {
        type: 'warning',
        placement: 'bottom',
        duration: 3000,
        offset: 30,
        animationType: 'slide-in',
      });
    } else if (mobileNo.length < 10) {
      toast.show('Please enter valid mobile number!', {
        type: 'warning',
        placement: 'bottom',
        duration: 3000,
        offset: 30,
        animationType: 'slide-in',
      });
    } else if (password == '') {
      toast.show('Password is required!', {
        type: 'warning',
        placement: 'bottom',
        duration: 3000,
        offset: 30,
        animationType: 'slide-in',
      });
    } else {
      setLoader(true)
      try {
        const res = await postLoginProcess(mobileNo, password);
      
        if (res.status == 'true') {
          await AsyncStorage.setItem('@UserData', JSON.stringify(res.data));
          await AsyncStorage.setItem('@token', res.data.token);
          props.navigation.navigate('Dashboard');
          setLoader(false)
        } 
        else {
          setLoader(false)
          toast.show(res.message, {
            type: 'danger',
            placement: 'bottom',
            duration: 3000,
            offset: 30,
            animationType: 'slide-in',
          });
        }
      } catch (e) {
        console.log('catch in ....login page', e);
        setLoader(false)
        toast.show('Something went wrong!, Try again later.', {
          type: 'danger',
          placement: 'bottom',
          duration: 3000,
          offset: 30,
          animationType: 'slide-in',
        });
      }
    }
  };

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      {loader ? (
        <Loader/>
      ) : (

      <ImageBackground
        resizeMode="cover"
        source={
          isDarkMode == 0
            ? require('../config/images/background.png')
            : require('../config/images/background-white.png')
        }
        style={{
          ...LoginStyle.imagebackgrount,
          backgroundColor: themecolor.LOGINTHEMECOLOR,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View>
            <Image
              style={{
                ...LoginStyle.iconImage,
              }}
              source={require('../config/images/logo.png')}
            />
          </View>

          <View
            style={{
              width: width * 0.85,
              alignSelf: 'center',
              marginTop: StatusBar.currentHeight + 1,
            }}>
            <Text
              style={{
                ...LoginStyle.uppertext,
                color: themecolor.TXTWHITE,
              }}>
              Please enter your registered mobile number and password to get
              login to your account
            </Text>
          </View>

          <View
            style={{
              ...LoginStyle.container,
            }}>
            <View
              style={{
                backgroundColor: themecolor.OTPBOXCOLOR,
                borderColor: themecolor.OTPBOXCOLOR,
                ...LoginStyle.textInputView,
              }}>
              <View>
                <TextInput
                  value={mobileNo}
                  placeholderTextColor={themecolor.TXTGREYS}
                  placeholder="Enter Mobile number"
                  keyboardType="numeric"
                  maxLength={10}
                  onChangeText={text => setMobileNo(text)}
                  style={{
                    color: themecolor.TXTWHITE,
                    ...LoginStyle.textInput,
                  }}
                />
              </View>
            </View>

            <View style={{...LoginStyle.MGv5}} />

            <View
              style={{
                ...LoginStyle.textInputView,
                backgroundColor: themecolor.OTPBOXCOLOR,
                borderColor: themecolor.OTPBOXCOLOR,
              }}>
              <View>
                <TextInput
                  value={password}
                  placeholderTextColor={themecolor.TXTGREYS}
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="newPassword"
                  secureTextEntry={isPasswordSecure}
                  enablesReturnKeyAutomatically
                  onChangeText={text => setPassword(text)}
                  style={{
                    color: themecolor.TXTWHITE,
                    ...LoginStyle.textInputpswd,
                  }}
                />
              </View>
              <View style={{...LoginStyle.eyeButton}}>
                <MaterialCommunityIcons
                  onPress={() => {
                    isPasswordSecure
                      ? setIsPasswordSecure(false)
                      : setIsPasswordSecure(true);
                  }}
                  name={isPasswordSecure ? 'eye-off' : 'eye'}
                  size={20}
                  color={themecolor.HEADERTHEMECOLOR}
                />
              </View>
            </View>

            <View style={{...LoginStyle.MGv15, marginBottom: height * 0.23}}>
              <FullSizeButton
                linearColor={[themecolor.GRADIENTHEADER1COLOR, themecolor.GRADIENTHEADER2COLOR]}
                onPress={() => {
                  handleLogin();
                }}
                title="Login"
              />
            </View>
          </View>
        </View>

        <View
          style={{
            alignSelf: 'flex-end',
            backgroundColor: themecolor.TXTDARKGREY,
            width: width,
            padding: 3,
            justifyContent: 'flex-end',
            bottom: 0,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text
              style={{
                color: themecolor.TXTWHITE,
              }}>
              Contact-us :
            </Text>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://deepticomputer.co.in/front-contact')
              }>
              <Text
                style={{
                  ...LoginStyle.contactText,
                  color: themecolor.HEADERTHEMECOLOR,
                }}>
                {' '}
                deepticomputer.co.in
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                ...LoginStyle.contactText,
                color: themecolor.TXTWHITE,
              }}>
              {' '}
              /{' '}
            </Text>

            <TouchableOpacity
              onPress={() => Linking.openURL('tel:+91 9893595355')}>
              <Text
                style={{
                  ...LoginStyle.contactText,
                  color: themecolor.HEADERTHEMECOLOR,
                }}>
                {' '}
                +91 9893595355
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      )}
    </>
  );
}
