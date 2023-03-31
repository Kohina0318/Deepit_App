import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors} from '../config/Colors';
import {FontFamily} from '../config/FontFamily';
import moment from 'moment';
import {Avatar} from '@rneui/themed';
import {useSelector} from 'react-redux';
import Time from './Time';
const {width, height} = Dimensions.get('screen');
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePickerRange from './DatePicker';
import RBSheet from 'react-native-raw-bottom-sheet';
import styles from '../config/css/CssCalendar';
import EN from 'react-native-vector-icons/Entypo';
import {MyThemeClass} from '../Component/Theme/ThemeDarkLightColor';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {getLogOut} from '../Repository/CommonRepository';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigateToClearStack} from '../Navigation/NavigationService';
import {useToast} from 'react-native-toast-notifications';
import Loader from './Loader/Loader';

export default function Header(props) {
  const toast = useToast();
  const refRBSheet = useRef();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();
  const [date, setDate] = useState(moment().format('LL'));
  const [loader, setLoader] = React.useState(false);
  const [disable, setDisable] = useState(false);

  const confirmLogout =()=>{
    Alert.alert('Are you sure?', 'Do you want to logout?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Yes', onPress: () => handleLogOut()},
    ]);

  }

  const handleLogOut = async () => {
    setDisable(true);
    props.setLoader(true)
    try {
      var res = await getLogOut();
      if (res.status == 'true') {
        await AsyncStorage.removeItem('@UserData');
        await AsyncStorage.removeItem('@token');
        setLoader(false)
        navigateToClearStack('Login');
      } else {
        setDisable(false);
        props.setLoader(false)
        toast.show(res.message, {
          type: 'danger',
          placement: 'bottom',
          duration: 3000,
          offset: 30,
          animationType: 'slide-in',
        });
      }
    } catch (e) {
      props.setLoader(false)
      console.log('catch in ....logout api in header page', e);
    }
  };

  const handleChange = value => {
     props.setStartDate(value.dateFrom);
    props.setEndDate(value.dateTo);
  };

  const OnClick = () => {
    refRBSheet.current.close();
    props.handleAttendanceReportByDate();
  };

  return (
    <View
      style={{
        height: height * props.height,
        width: width,
        flexDirection: 'column',
      }}>
      <View
        style={{
          marginTop: 20,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        {props.dataShown ? (
          <TouchableOpacity
            activeOpacity={0.7}
            disabled={disable}
            onPress={() => confirmLogout()}>
            <View style={{marginTop: 10, marginRight: 15}}>
              <AntDesignIcon name="logout" size={22} color={Colors.white} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => refRBSheet.current.open()}>
            <View style={{marginTop: 10, marginRight: 15}}>
              <MCI name="filter" color={Colors.white} size={25} />
            </View>
          </TouchableOpacity>
        )}
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
        <View
          style={{
            width: width * 0.9,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}>
          <View>
            {props.photo == '' || props.photo == null ? (
              <Avatar
                size={150}
                rounded
                avatarStyle={{
                  borderWidth: 5,
                  borderColor: 'white',
                  borderStyle: 'solid',
                }}
                source={require('../config/images/admin.jpeg')}
              />
            ) : (
              <Avatar
                size={150}
                rounded
                avatarStyle={{
                  borderWidth: 5,
                  borderColor: 'white',
                  borderStyle: 'solid',
                }}
                source={{uri: props.photo}}
              />
            )}
          </View>

          <View style={{marginTop: 5}} />

          <View>
            {props.name == null || props.name == '' ? (
              <Text
                style={{
                  color: Colors.white,
                  alignItems: 'center',
                  fontSize: 21,
                  fontWeight: 600,
                  fontFamily: FontFamily.Serif,
                }}>
                -------
              </Text>
            ) : (
              <Text
                style={{
                  color: Colors.white,
                  alignItems: 'center',
                  fontSize: 21,
                  fontWeight: 600,
                  fontFamily: FontFamily.Serif,
                }}>
                {props.name}
              </Text>
            )}
          </View>

          <View>
            {props.regestrationNo == null || props.regestrationNo == '' ? (
              <Text
                style={{
                  color: Colors.white,
                  alignItems: 'center',
                  fontSize: 1,
                  fontWeight: 300,
                  fontFamily: FontFamily.Serif,
                }}>
                ------
              </Text>
            ) : (
              <Text
                style={{
                  color: Colors.white,
                  alignItems: 'center',
                  fontSize: 17,
                  fontWeight: 300,
                  fontFamily: FontFamily.Serif,
                }}>
                {props.regestrationNo}
              </Text>
            )}
          </View>
        </View>

        <View style={{marginTop: 20}} />

        {props.dataShown ? (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
            <View>
              <Text
                style={{
                  color: Colors.white,
                  alignItems: 'center',
                  fontSize: 22,
                  fontWeight: 600,
                  fontFamily: FontFamily.Serif,
                }}>
                {date}
              </Text>
            </View>
            <View>
              <Time />
            </View>
          </View>
        ) : (
          <></>
        )}
      </View>

      <RBSheet
        ref={refRBSheet}
        animationType={'slide'}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={150}
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 0,
            backgroundColor: themecolor.RB2,
          },
          draggableIcon: {
            display: 'none',
          },
        }}>
        <View style={{...styles.view14}}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => refRBSheet.current.close()}>
            <EN name="cross" color={themecolor.TXTWHITE} size={28} />
          </TouchableOpacity>
          <View>
            <Text style={{...styles.RBText, color: themecolor.TXTWHITE}}>
              Set Filters
            </Text>
          </View>
          <View>
            <View>
              <TouchableOpacity activeOpacity={1} onPress={() => OnClick()}>
                <Text
                  style={{
                    ...styles.RBText,
                    ...styles.clrtheme,
                    color: themecolor.TXTWHITE,
                  }}>
                  Done
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{...styles.Borderline}} />
        <View style={styles.view16}>
          <View>
            <Text
              style={{
                ...styles.CardText,
                ...styles.align3,
                ...styles.left1,
                color: themecolor.TXTWHITE,
                marginBottom: 10,
              }}>
              Sort by date range
            </Text>
          </View>
          <View style={styles.view17}>
            <DatePickerRange onChange={value => handleChange(value)} />
          </View>
          <View style={styles.marg} />
        </View>
      </RBSheet>
    </View>
  );
}
