import {
    View,
    Image,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  import styles from './stylesLoader';
  import Color from './ThemeDarkLightColor';
  const {width, height} = Dimensions.get('window');
  
  const Loader = props => {
    return (
<>
        <View style={{...styles.MainView,backgroundColor:Color.Color.LOADERTHEMECOLOR}}>
        {/* <Image
        style={styles.IMGLOGO}
        source={require('../../assets/images/app,intro,splashscreen,login/saleskraftlogo.png')}
        /> */}

        <Image
        style={styles.IMGGIFLOGO}
        source={require('./dot.gif')}
        />
        </View>
        </>
    );
  };
  
export default Loader;
  