import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Colors} from '../config/Colors';
import {FontFamily} from '../config/FontFamily';
import MCIcon from 'react-native-vector-icons/MaterialIcons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {MyThemeClass} from './Theme/ThemeDarkLightColor';

const {width} = Dimensions.get('window');

export default FullsizeButton = props => {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const styles = StyleSheet.create({
    bigButton: {
      // backgroundColor: props.backgroundColor,
      width: props.width,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: props.height,
      borderRadius: props.BRadius,
    },
  });

  return (
    <View>
      <TouchableOpacity  onPress={props.onPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={props.linearColor}
          style={{...styles.bigButton}}>
          <Text
            style={{
              color: props.titlecolor,
              fontFamily: FontFamily.PopinsMedium,
              fontSize: props.fontsize,
            }}>
            {props.title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

FullsizeButton.defaultProps = {
  height: 45,
  title: 'Submit',
  width: width * 0.9,
  titlecolor: '#FFF',
  BRadius: 10,
  backgroundColor: Colors.bluetheme,
};
