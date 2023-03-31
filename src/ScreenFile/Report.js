import React, {useState, useEffect} from 'react';
import {Colors} from '../config/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, Dimensions, StatusBar} from 'react-native';
import Header from '../Component/Header';
import {MyThemeClass} from '../Component/Theme/ThemeDarkLightColor';
import {ReportFlatList} from '../Component/FlateListData';
const {width, height} = Dimensions.get('screen');
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getAttendance} from '../Repository/CommonRepository';
import {useToast} from 'react-native-toast-notifications';
import moment from 'moment';
import Loader from '../Component/Loader/Loader';

export default function Report(props) {
  const toast = useToast();
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [regestrationNo, setRegestrationNo] = useState('');
  const [reportData, setReportData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [loader, setLoader] = React.useState(false);

  useEffect(async () => {
    setLoader(true);
    try {
      var UserData = await AsyncStorage.getItem('@UserData');
      var data = JSON.parse(UserData);
      setName(data.name);
      setPhoto(data.photo);
      setRegestrationNo(data.regestration_no);
      setLoader(false);
    } catch (e) {
      setLoader(false);
    }
  }, []);

  const handleAttendanceReport = async () => {
    setLoader(true);
    var sd = moment().startOf('month').format('DD-MM-YYYY');
    var ed = moment().endOf('month').format('DD-MM-YYYY');
    try {
      var res = await getAttendance(regestrationNo, sd, ed);
      if (res.status == 'true') {
        setReportData(res.data);
        setLoader(false);
      } else {
        setLoader(false);
        toast.show(res.message, {
          type: 'danger',
          placement: 'bottom',
          duration: 3000,
          offset: 30,
          animationType: 'slide-in',
        });
      }
    } catch (e) {
      setLoader(false);
      console.log('catch in ....REport api  in Report page', e);
      
    }
  };

  useEffect(() => {
    handleAttendanceReport();
  }, []);

  const handleAttendanceReportByDate = async () => {
    setLoader(true);
   
    var startDay = moment(startDate).format('DD-MM-YYYY');
    var endDay = moment(endDate).format('DD-MM-YYYY');

    try {
      var res = await getAttendance(regestrationNo, startDay, endDay);
      if (res.status == 'true') {
        setReportData(res.data);
        setLoader(false);
      } else {
        setLoader(false);
        toast.show(res.message, {
          type: 'danger',
          placement: 'bottom',
          duration: 3000,
          offset: 30,
          animationType: 'slide-in',
        });
      }
    } catch (e) {
      setLoader(false);
      console.log('catch in ....REport api  in Report page', e);
     
    }
  };

  return (
    <>
      <StatusBar translucent barStyle="light-content" />

      {loader ? (
        <Loader />
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
              height: height * 0.37,
              backgroundColor: Colors.white,
            }}>
            <View style={{height: height * 0.37, width: width}}>
              <Header
                name={name}
                photo={photo}
                regestrationNo={regestrationNo}
                height={0.37}
                dataShown={false}
                setEndDate={setEndDate}
                setStartDate={setStartDate}
                handleAttendanceReportByDate={handleAttendanceReportByDate}
              />
            </View>
          </LinearGradient>

          <View
            style={{
              backgroundColor: themecolor.GRADIENTHEADER2COLOR,
              height: height * 0.9,
              width: width,
            }}>
            <View
              style={{
                backgroundColor: themecolor.LOGINTHEMECOLOR,
                height: height * 0.9,
                width: width,
                borderTopRightRadius: 60,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: width * 0.85,
                  alignSelf: 'center',
                  height: height * 0.7,
                  marginTop: 20,
                  justifyContent: 'center',
                }}>
                <ReportFlatList
                  props={props}
                  reportData={reportData}
                  length={reportData.length}
                />
                <View style={{marginVertical: 75}} />
              </View>
            </View>
          </View>
        </View>
      )}
    </>
  );
}
