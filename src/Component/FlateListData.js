import React, {useState} from 'react';
import {
  View,
  Dimensions,
  FlatList,
  Text,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import OIcon from 'react-native-vector-icons/Octicons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {FontSize} from '../config/Fonts';
import {FontFamily} from '../config/FontFamily';
import styles from './CssTask';
import {Colors} from '../config/Colors';
import {useSelector} from 'react-redux';
import {MyThemeClass} from './Theme/ThemeDarkLightColor';
import moment from 'moment';

const {width} = Dimensions.get('window');

function ReportFlatListData({item, props, themecolor, index}) {
  return (
    <>
      {props.length > 0 ? (
        <View
          style={{
            flex: 1,
            padding: 15,
            backgroundColor: themecolor.BOXBORDERCOLOR,
            overflow: 'hidden',
            borderRadius: 7,
            borderColor: themecolor.BOXBORDERCOLOR1,
            borderWidth: 1,
          }}>
          <View
            style={{
              justifyContent: 'flex-start',
              flex: 1,
              flexDirection: 'row',
              width: width * 0.77,
            }}>
            <View style={{width: width * 0.5}}>
              <Text
                style={{
                  ...styles.title,
                  fontSize: FontSize.labelText4,
                  color: themecolor.TXTWHITE,
                  fontWeight: 'bold',
                }}>
                {moment(item.entry_date).format('ll')}
              </Text>
            </View>

            <View
              style={{
                width: width * 0.25,
                justifyContent: 'center',
              }}>
              {item.status === 0 ? (
                <View
                  style={{
                    width: 'auto',
                    height: 20,
                    backgroundColor: themecolor.CHECKOUTTHEMECOLOR,
                    borderRadius: 20,
                    justifyContent: 'center',
                    paddingHorizontal: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    zIndex: 999,
                    left: 5,
                  }}>
                  <Text
                    style={{
                      ...styles.Text,
                      fontSize: FontSize.labelText3,
                      fontFamily: FontFamily.PopinsMedium,
                    }}>
                    Absent
                  </Text>
                </View>
              ) : item.status === 1 ? (
                <View
                  style={{
                    width: 'auto',
                    height: 20,
                    backgroundColor: themecolor.PLACEORDERTHEMECOLOR,
                    borderRadius: 20,
                    justifyContent: 'center',
                    paddingHorizontal: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    zIndex: 999,
                    left: 5,
                  }}>
                  <Text
                    style={{
                      ...styles.Text,
                      fontSize: FontSize.labelText3,
                      fontFamily: FontFamily.PopinsMedium,
                    }}>
                    Present
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    width: 'auto',
                    height: 20,
                    backgroundColor: themecolor.ORANGETHEMECOLOR,
                    borderRadius: 20,
                    justifyContent: 'center',
                    paddingHorizontal: 8,
                    flexDirection: 'row',
                    alignItems: 'center',
                    zIndex: 999,
                    left: 5,
                  }}>
                  <Text
                    style={{
                      ...styles.Text,
                      fontSize: FontSize.labelText3,
                      fontFamily: FontFamily.PopinsMedium,
                    }}>
                    Holiday
                  </Text>
                </View>
              )}
            </View>
          </View>

          <View
            style={{
              justifyContent: 'flex-start',
              flex: 1,
              flexDirection: 'row',
              margin: 5,
              width: width * 0.77,
            }}>
            <Text
              style={{
                ...styles.title1,
                fontSize: FontSize.labelText3,
                color: themecolor.TXTWHITE,
                width: width * 0.4,
              }}>
              {item.entry_time == "00:00:00" ||item.entry_time == null ? (
                <>
                  {' '}
                  <Text style={{fontWeight: 'bold'}}>In Time : </Text>00:00
                </>
              ) : (
                <>
                  {' '}
                  <Text style={{fontWeight: 'bold'}}>In Time: </Text>&nbsp;
                  {moment(item.entry_time, 'HH:mm:ss').format('hh:mm A')}
                </>
              )}
            </Text>

            <Text
              style={{
                ...styles.title1,
                fontSize: FontSize.labelText3,
                color: themecolor.TXTWHITE,
                width: width * 0.4,
              }}>
              {item.check_out_time == "00:00:00" || item.check_out_time == null  ? (
                <>
                  {' '}
                  <Text style={{fontWeight: 'bold'}}>Out Time : </Text>00:00
                </>
              ) : (
                <>
                  {' '}
                  <Text style={{fontWeight: 'bold'}}>Out Time: </Text>&nbsp;
                  {moment(item.check_out_time, 'HH:mm:ss').format('hh:mm A')}
                </>
              )}
            </Text>
          </View>
        </View>
      ) : index == 0 ? (
        <View style={{alignSelf: 'center', flex: 1}}>
          <Text>No Data Found!</Text>
        </View>
      ) : (
        <></>
      )}
      <View style={{marginVertical: 4}} />
    </>
  );
}

function ReportFlatList(props) {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();
  return (
    <>
      <FlatList
        data={props.reportData}
        renderItem={({item, index}) => (

          <ReportFlatListData
            item={item}
            props={props}
            themecolor={themecolor}
            index={index}
          />
        )}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      />
      <View style={{marginVertical: 10}} />
    </>
  );
}

// Setting List End
export {ReportFlatList};
