import React, {useState, useEffect} from 'react';
import {Colors} from '../config/Colors';
import {FontFamily} from '../config/FontFamily';
import {Avatar} from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, Dimensions, StatusBar} from 'react-native';
import Header from '../Component/Header';
import FullsizeButton from '../Component/FullsizeButton';
import {MyThemeClass} from '../Component/Theme/ThemeDarkLightColor';
const {width, height} = Dimensions.get('screen');
import {useSelector} from 'react-redux';
import {useToast} from 'react-native-toast-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getMarkAttendance} from '../Repository/CommonRepository';
import { NetworkInfo } from "react-native-network-info";
import Loader from '../Component/Loader/Loader';

export default function Dashboard(props) {
  const toast = useToast();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [regestrationNo, setRegestrationNo] = useState('');

  const [inTime, setInTime] = useState('00:00:00');
  const [outTime, setOutTime] = useState('00:00:00');
  const [totalTime, setTotalTime] = useState('00:00:00');
  const [status, setStatus] = useState(0);
  const [loader, setLoader] = React.useState(false);

  useEffect(async () => {
    try {
      var UserData = await AsyncStorage.getItem('@UserData');
      var data = JSON.parse(UserData);
      setName(data.name);
      setPhoto(data.photo);
      setRegestrationNo(data.regestration_no);
    } catch (e) {}
  }, []);

  const handleCheckInOut = async onScreen => {
    setLoader(true)
    var ipAddress= ''
    await NetworkInfo.getIPV4Address().then(ipv4Address => {
      ipAddress= ipv4Address;
    });
    try {
      const res = await getMarkAttendance(onScreen,ipAddress);
      console.log('...getMarkAttendance api data in dashboard....=>', res);
      if (res.status === true) {
        setInTime(res.data.attendance_in_time);
        setOutTime(res.data.attendance_out_time);
        setTotalTime(res.data.attendance_total_time);
        setStatus(res.data.status_out);
        setLoader(false)
        if (onScreen == 'no') {
          toast.show(res.message, {
            type: 'success',
            placement: 'bottom',
            duration: 3000,
            offset: 30,
            animationType: 'slide-in',
          });
        }
     
      } else {
        setLoader(false)
        if (onScreen === 'no') {
          toast.show(res.message, {
            type: 'warning',
            placement: 'bottom',
            duration: 3000,
            offset: 30,
            animationType: 'slide-in',
          });
        }
      }
    } catch (e) {
      console.log('catch in ....dashboard page', e);
      setLoader(false)
      // if (onScreen == 'no') {
      //   toast.show('Something went wrong!, Try again later.', {
      //     type: 'danger',
      //     placement: 'bottom',
      //     duration: 3000,
      //     offset: 30,
      //     animationType: 'slide-in',
      //   });
      // }
    }
  };

  useEffect(() => {
    handleCheckInOut('yes');
  }, []);

  return (
    <>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={'transparent'}
      />
{loader ? (
        <Loader/>
      ) : (
      <View
        style={{
          backgroundColor: themecolor.LOGINTHEMECOLOR,
          height: height,
          width: width,
        }}>
        <LinearGradient
          colors={[
            themecolor.GRADIENTHEADER1COLOR,
            themecolor.GRADIENTHEADER2COLOR,
          ]}
          style={{
            borderBottomLeftRadius: 60,
            height: height * 0.5,
            backgroundColor: Colors.white,
          }}>
          <View style={{height: height * 0.5, width: width}}>
            <Header
              name={name}
              photo={photo}
              regestrationNo={regestrationNo}
              height={0.5}
              dataShown={true}
              setLoader={setLoader}
            />
          </View>
        </LinearGradient>

        <View
          style={{
            backgroundColor: themecolor.GRADIENTHEADER2COLOR,
            height: height * 0.5,
            width: width,
          }}>
          <View
            style={{
              backgroundColor: themecolor.LOGINTHEMECOLOR,
              height: height * 0.5,
              width: width,
              borderTopRightRadius: 60,
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: height * 0.15,
                flexDirection: 'row',
                width: width * 0.9,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: width * 0.4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      color: themecolor.HEADINGTEXTCOLOR,
                      fontSize: 23,
                      fontWeight: '600',
                      fontFamily: FontFamily.Serif,
                    }}>
                    In Time
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: themecolor.TXTWHITE,
                      fontSize: 20,
                      fontWeight: '600',
                      fontFamily: FontFamily.Serif,
                    }}>
                    {inTime}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  height: height * 0.1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'red',
                }}>
                <View
                  style={{
                    borderRightColor: themecolor.HEADINGTEXTCOLOR,
                    borderRightWidth: 2,
                    height: height * 0.1,
                  }}
                />
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: width * 0.4,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      color: themecolor.HEADINGTEXTCOLOR,
                      fontSize: 23,
                      fontWeight: '600',
                      fontFamily: FontFamily.Serif,
                    }}>
                    Out Time
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: themecolor.TXTWHITE,
                      fontSize: 20,
                      fontWeight: '600',
                      fontFamily: FontFamily.Serif,
                    }}>
                    {outTime}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: height * 0.13,
                flexDirection: 'row',
                width: width * 0.8,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: width * 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Text
                    style={{
                      color: themecolor.HEADINGTEXTCOLOR,
                      fontSize: 23,
                      fontWeight: '600',
                      fontFamily: FontFamily.Serif,
                    }}>
                    Total Time
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: themecolor.TXTWHITE,
                      fontSize: 20,
                      fontWeight: '600',
                      fontFamily: FontFamily.Serif,
                    }}>
                    {totalTime}
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: height * 0.1,
                flexDirection: 'row',
                width: width * 0.8,
              }}>
              {status === 0 ? (
                <FullsizeButton
                  linearColor={[
                    themecolor.GRADIENTHEADER1COLOR,
                    themecolor.GRADIENTHEADER2COLOR,
                  ]}
                  onPress={() => handleCheckInOut('no')}
                  title="Check In"
                  width={200}
                  BRadius={50}
                  fontsize={22}
                />
              ) : status === 1 ? (
                <FullsizeButton
                  linearColor={[
                    themecolor.ORANGEREDTHEMECOLOR,
                    themecolor.ORANGETHEMECOLOR,
                  ]}
                  onPress={() => handleCheckInOut('no')}
                  title="Check Out"
                  width={200}
                  BRadius={50}
                  fontsize={20}
                />
              ) : (
                <></>
              )}
            </View>
          </View>
        </View>
      </View>)}
    </>
  );
}
