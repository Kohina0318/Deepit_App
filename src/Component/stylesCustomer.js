import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../config/Colors';
import {FontSize} from '../config/Fonts';
import {FontFamily} from '../config/FontFamily';
const {width, height} = Dimensions.get('screen');
const win = Dimensions.get('window');

export default StyleSheet.create({
  FirstView: {
    flex: 1,
    backgroundColor: Colors.mainbg,
  },
  MainView: {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    borderRadius: 7,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  BackgroundView:{
    width: width, height: 90
},
Header:
{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
    top: 5,
    flex:1
  },
  BackArrow:
  {
      width: 25, 
      height: 30,
    },
textContainer1: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      height: 50,
      borderWidth: 1,
      borderColor: Colors.borderColor,
      color: Colors.grey,
      overflow: 'hidden',
      backgroundColor: Colors.Textinputbg,
    },
  Height70:{height:70},
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    height: 40,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    color: Colors.grey,
    overflow: 'hidden',
    backgroundColor: '#ebecef',
  },
  textStyleText: {
    fontSize: FontSize.labelText,
    fontFamily: FontFamily.PopinsMedium,
    height: 50,
    color: Colors.black,
    top: 3, width: width * 0.4,left:7
  },
  CardText: {
    fontSize: FontSize.labelText3,
    fontFamily: FontFamily.PopinsMedium,
    color: Colors.black,
    alignSelf: 'center',
    alignSelf:'flex-start',
    left:10
  },
  RBText: {
    fontSize: FontSize.labelText2,
    fontFamily: FontFamily.PopinsMedium,
    color: Colors.black,
  },
  RBTextBlue: {
    fontSize: FontSize.labelText2,
    fontFamily: FontFamily.PopinsMedium,
    color: Colors.bluetheme,
  },
  imageStyle: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: FontSize.labelText,
    fontFamily: FontFamily.PopinsMedium,
    color: Colors.black,
  },
  title1: {
    fontSize: FontSize.labelText,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.grey,
  },
  Text: {
    fontSize: FontSize.labelText4,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.white,
    alignSelf:'flex-start',
    justifyContent:'flex-start',
    width: width * 0.65
  },
  timeupdate: {
    fontSize: FontSize.smallText,
    fontFamily: FontFamily.PopinsMedium,
    color: Colors.grey,
  },
  center: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  PlusIcon:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    top:-4,
  },
  RightAlign:
 { right:38},
 RightAlign2:{right:18},
 SView:{
    height: height,
 },
 FlatListView:
 {
    width: width * 0.92,
    alignSelf: 'center',
    height: 'auto',
  },

  RBView:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  CloseIcon:
  {width: 11, height: 23},
  CloseIcon1:
  {width: 14, height: 14},
  RBView1:
  {justifyContent:'center',alignSelf:'center',flex:1},
  RBView2:
  {
    fontSize: FontSize.labelText3,
    fontFamily: FontFamily.PopinsMedium,
    color: Colors.black,
    alignSelf:'flex-start',left:10
  },
  RBView3:{justifyContent:'space-between',backgroundColor:Colors.white,flexDirection:'row'},
  width9:{width:width*0.9},
  width9center:{
 width:width*0.9,
 alignSelf: 'center',
  top: 5,
  flexDirection: 'row',
  justifyContent: 'space-between',},
  datacheckFlatView:
  {
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.9,
  },
  BackView:
  {width: width, height: 'auto'},
  Header2:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
    top: 30,
  },
  Width65:
  {width: width * 0.65},
  WhatsappView:
  {
    justifyContent: 'space-between',
    flexDirection: 'row',
    top:-5
  },
  Right22:
  {right: 22},
  CustomerDView:
  {
    width: width * 0.9,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  Name: {
    fontSize: FontSize.labelText3,
    fontFamily: FontFamily.PopinsMedium,
    color: Colors.white,
  },
  NameOpacity:
  { color: Colors.white,
    fontFamily: FontFamily.PopinsMedium,
    fontSize: FontSize.smallText,
    opacity:0.5
  },
  HistoryFlatListView:
  {
    width: width * 0.9,
    alignSelf: 'center',
    height: 'auto',
    overflow:'hidden',
    zIndex:0
  },
  SortDateRangeBy:
  {justifyContent: 'center', alignSelf: 'center', flex: 1},
  ShowDaterangeView:
  {
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    flexDirection: 'row',
  },
  RangeDateView:
  {width: width * 0.42,flexDirection:'row',justifyContent:'center',alignItems:'center'},
  RangeDateView1:
  {width: width * 0.9,flexDirection:'row',justifyContent:'center',alignItems:'center'},
  CalendarIcon:
  {right:12,fontSize: 14},
  CallNowButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    width: width * 0.9,
    borderRadius: 12,
    backgroundColor:Colors.bluetheme
  },
  CallbuttonText: {
    fontSize: FontSize.h4,
    textAlign: 'center',
    color: Colors.white,
    fontFamily: FontFamily.PopinsMedium,
  },
  Fbottom: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom:10
  },
  HistoryTitle:{
    color: Colors.black,
    fontFamily: FontFamily.Popinsbold,
    fontSize: FontSize.labelText4,
    top: 3,
  },
  ViewRoundSort:
  {
    width: 80,
    height: 30,
    backgroundColor: Colors.bluetheme1,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 9999,
  },
  TItleSort:
  { 
    left: 2,
    top: 2,
    fontSize: FontSize.labelText3,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.white,
  },
  Width82:
  {width: width * 0.82},
  TViewMain:
  {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
TInput:
{top: 3, width: width * 0.44,left:7,    fontSize: FontSize.labelText3,
  fontFamily: FontFamily.PopinsMedium,},
FullInput:
{top: 3, width: width * 0.85,
  fontSize: FontSize.labelText3,
  fontFamily: FontFamily.PopinsMedium,},
  TextArea:
  {top: 3, width: width * 0.85,height:70,justifyContent: 'flex-start',textAlignVertical:'top',fontSize: FontSize.labelText3,
  fontFamily: FontFamily.PopinsMedium,},
  SelectDateInput:
  {top: 3, width: width * 0.82,left:7,fontSize:12,color:Colors.black,fontSize: FontSize.labelText,fontFamily: FontFamily.PopinsMedium,},
  CustomPickerView:
  {justifyContent: 'center',width:width*0.85,height:50,alignSelf:'center',padding:2,borderRadius:5,borderWidth:1,borderColor:Colors.borderColor, },
  CustomPickerText:
  {width:10,height:10,backgroundColor:Colors.productcolor1,alignSelf:'center',justifyContent:'center', },
  CustomPickerRadius:
  {borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10},
    ArrowDown:
    {justifyContent:'flex-end',position:'absolute',alignSelf:'flex-end',right:8},
    optionContainer: {
      padding: 10,
      borderBottomColor: 'lightgrey',
      borderRadius: 50,
      overflow: 'hidden',
    },
    optionInnerContainer: {
      flex: 1,
      flexDirection: 'row',
      // borderRadius: 50,
      // overflow: 'hidden',
    },
    box: {
      width: 12,
      height: 12,
      marginRight: 5,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 3,
    },
    text: {
      fontSize: 12,
    },
    FontStyle: {
      fontSize: 13,
      color: Colors.black,
      fontFamily: FontFamily.PopinsRegular,
    },
    container: {
      borderColor: 'grey',
    },
    TO:{justifyContent:'center',alignItems:'center',alignSelf:'center',paddingHorizontal:5,fontFamily:FontFamily.PopinsMedium},
});
