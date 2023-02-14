import React,{useState,useEffect} from 'react'
import {View,Text,Image,Dimensions} from 'react-native'
import moment from 'moment';
import { Colors } from '../config/Colors';
import { FontFamily } from '../config/FontFamily';

export default function Time (){
    const [time,setTime]=useState(moment().format("hh:mm:ss"))
    const [d,setd]=useState(moment().format("HH"))

    useEffect(() => {
        setInterval(() =>{ setTime(moment().format("hh:mm:ss")),  setd(moment().format("HH"))}, 1000);
      
      }, []);
  return (
<View>
{ d>'11'?
  <Text style={{color:Colors.white,alignItems:'center',fontSize:28,fontWeight:'bold',fontFamily:FontFamily.Serif}}>{time} PM</Text> 
  :
  <Text style={{color:Colors.white,alignItems:'center',fontSize:28,fontWeight:'bold',fontFamily:FontFamily.Serif}}>{time} AM</Text> 
  }
</View>
  )
}
