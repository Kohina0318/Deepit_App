import React from 'react';
import {Dimensions, Image, StatusBar, View, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Color, {MyThemeClass} from '../Component/Theme/ThemeDarkLightColor';
import {useSelector} from 'react-redux';
const {width} = Dimensions.get('window');

export default function Splash(props) {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  React.useEffect(() => {
    setTimeout(async () => {
      const user = await AsyncStorage.getItem('@UserData');
      const token = await AsyncStorage.getItem('@token');
     
      if ((user != null || user != undefined) && (token != null || token != undefined) ) {
        props.navigation.reset({
            index: '0',
            routes: [{name: 'Dashboard'}],
          });
      
      }else {
          props.navigation.reset({
            index: 0,
            routes: [{name: 'Login'}],
          });
      }
    }, 1000);

    return () => {};
  }, []);

  return (
    <View
      style={{
        ...styles.MainContainer,
        // backgroundColor: themecolor.THEMECOLOR,
      }}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Video
        source={require('../config/images/dotsbackground-pattern.mp4')}
        style={styles.backgroundVideo}
        muted={true}
        resizeMode={'cover'}
        repeat={true}
        rate={2.0}
        ignoreSilentSwitch={'obey'}
      />
      <Image
        style={{
          width: width * 0.6,
          resizeMode: 'contain',
          alignSelf: 'center',
          flex: 1,
          zIndex: 9999,
        }}
        source={require('../config/images/logo.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  Fbottom: {
    width: width,
    bottom: 0,
    position: 'absolute',
    flex: 1,
  },
  LogoStyle: {
    width: 280,
    height: 280,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  LogoBottom: {
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
