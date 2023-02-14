import React,{useState,useEffect} from 'react';
import {TextInput,
View,
FlatList,
Text,
TouchableOpacity
} from 'react-native';
import Father from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontSize } from '../config/Fonts';
import StyleCss from './stylesCustomer';
import { MyThemeClass } from '../Component/Theme/ThemeDarkLightColor';
import { useSelector } from 'react-redux';

export default function DatePickerRange(props) {

    const [date1, setDate1] = useState(new Date());
    const [mode1, setMode1] = useState('date1');
    const [show1, setShow1] = useState(false);
  
  
    const [date2, setDate2] = useState(new Date());
    const [mode2, setMode2] = useState('date2');
    const [show2, setShow2] = useState(false);

    
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor()
  
    const onChange1 = (event, selectedDate) => {
      
      const currentDate = selectedDate || date1;
      setShow1(Platform.OS === 'ios');
      setDate1(currentDate);
      var body={dateFrom:currentDate,dateTo:date2}
      props.onChange(body)
    };
    const onChange2 = (event, selectedDate) => {
      const currentDate = selectedDate || date2;
      setShow2(Platform.OS === 'ios');
      setDate2(currentDate);
      var body={dateFrom:date1,dateTo:currentDate}
     props.onChange(body)
    };
    
    const showMode1 = currentMode => {
      setMode1(currentMode);
    };
  
    const showMode2 = currentMode => {
      setMode2(currentMode);
    };
  
    const showDatepicker1 = () => {
      setShow1(true);
      showMode1('date');
    };
    const showDatepicker2 = () => {
      setShow2(true);
      showMode2('date');
    };
  
        return (
          <View style={{...StyleCss.ShowDaterangeView, backgroundColor:themecolor.RB2}}>
          <View style={{...StyleCss.textContainer, backgroundColor:themecolor.RB2}}>
          <TouchableOpacity 
          onPress={showDatepicker1}
          >
            <View style={StyleCss.RangeDateView}>
              <TextInput
                editable={false}
                value={date1.toUTCString().substring(0, 16)}
                label="* Enter Date"
                style={{...StyleCss.textStyleText,color:themecolor.TXTWHITE}}
                underlineColor={'transparent'}
                labelStyle={FontSize.labelText}
              />
              <Father name="calendar" style={StyleCss.CalendarIcon} />
            </View>
          </TouchableOpacity>
  
          {show1 && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date1}
              mode={mode1}
              is24Hour={false}
              display="default"
              onChange={onChange1}
            />
          )}
        </View>
  
          <Text style={{...StyleCss.TO,color:themecolor.TXTWHITE}}>to</Text>
          <View style={{...StyleCss.textContainer, backgroundColor:themecolor.RB2}}>
          <TouchableOpacity onPress={showDatepicker2}>
            <View style={StyleCss.RangeDateView}>
              <TextInput
                editable={false}
                value={date2.toUTCString().substring(0, 16)}
                label="* Enter Date"
                style={{...StyleCss.textStyleText, color:themecolor.TXTWHITE}}
                underlineColor={'transparent'}
                labelStyle={FontSize.labelText}
              />
              <Father name="calendar" style={StyleCss.CalendarIcon} />
            </View>
          </TouchableOpacity>
          {show2 && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date2}
              mode={mode2}
              is24Hour={false}
              display="default"
              onChange={onChange2}
            />
          )}
        </View>
  
  
        </View>
        );
  }