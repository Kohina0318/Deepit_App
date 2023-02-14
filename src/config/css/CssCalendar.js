import { StyleSheet, Dimensions, } from "react-native";
import { Colors } from "../Colors";
import { FontSize, } from '../Fonts';
import { FontFamily, } from '../FontFamily';
const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
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
    width: width * 0.78,
    height: 50,
    color: Colors.black,
  },
  CardText: {
    fontSize: FontSize.labelText3,
    fontFamily: FontFamily.PopinsMedium,
    alignSelf: 'center',
    fontWeight:'bold'
  },
  RBText: {
    fontSize: FontSize.mainButton,
    fontFamily: FontFamily.normal,
    fontWeight:'bold'
  },
  imageStyle: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title:
  {
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
  width1:
  {
    width: width * 0.9
  },
  width2:
    { width: width * 0.45 },
  align1:
    { alignSelf: 'flex-end' },
  align2:
    { alignSelf: 'center' },
  align3:
    { alignSelf: 'flex-start' },
  justify:
    { justifyContent: 'flex-end' },
  justify2:
    { justifyContent: 'center' },
  left1:
    { left: 10 },
  top1:
    { top: -4 },
  inputtxt:
    { top: 3, width: width * 0.4, left: 7 },
  tag2:
    { width: 70, height: 18, padding: 2, borderRadius: 30, backgroundColor: '#1ecc91', justifyContent: 'center' },
  tag2view:
    { fontSize: 9, justifyContent: 'center', alignSelf: 'center', color: '#FFF', fontFamily: FontFamily.Popinssemibold },
  tag1:
    { width: 70, height: 18, padding: 2, borderRadius: 30, backgroundColor: '#ff1717', justifyContent: 'center' },
  tag1view:
    { fontSize: 9, justifyContent: 'center', alignSelf: 'center', color: '#FFF', fontFamily: FontFamily.Popinssemibold },
  tag3:
    { width: 70, height: 18, padding: 2, borderRadius: 30, backgroundColor: '#ff7c17', justifyContent: 'center' },
  tag3view:
    { fontSize: 9, justifyContent: 'center', alignSelf: 'center', color: '#FFF', fontFamily: FontFamily.Popinssemibold },
  view1:
  {
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  view2:
  {
    backgroundColor: '#ebecef',
    borderRadius: 10,
    width: 90,
    height: 30,
    justifyContent: 'center',
  },
  view2text:
  {
    alignSelf: 'center', fontFamily: FontFamily.PopinsMedium, fontSize: 11
  },
  view3:
  {
    backgroundColor: '#ebecef',
    borderRadius: 10,
    width: 90,
    height: 30,
    justifyContent: 'center',
  },
  view3text: {
    alignSelf: 'center', fontFamily: FontFamily.PopinsMedium, fontSize: 11
  },
  view4: {
    backgroundColor: '#ebecef',
    borderRadius: 10,
    width: 90,
    height: 30,
    justifyContent: 'center',
  },
  view4text: {
    alignSelf: 'center', fontFamily: FontFamily.PopinsMedium, fontSize: 11
  },
  view5: {
    backgroundColor: '#ebecef',
    borderRadius: 10,
    width: 90,
    height: 30,
    justifyContent: 'center',
  },
  view5text:
  {
    alignSelf: 'center', fontFamily: FontFamily.PopinsMedium, fontSize: 11
  },
  view6:
  {
    backgroundColor: '#4261f7',
    borderRadius: 10,
    width: 90,
    height: 30,
    justifyContent: 'center',
  },
  view6text:
    { alignSelf: 'center', fontFamily: FontFamily.PopinsMedium, fontSize: 11, color: '#FFF' },
  view7:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  view7text:
  {
    top: 10,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
    left: 10,
    fontSize: FontSize.labelText,
  },
  view8:
  {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    borderRadius: 7,
    borderColor: Colors.borderColor,
    borderWidth: 1
  },
  view9: {
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'row'
  },
  view10:
    { width: width * 0.15, justifyContent: 'center', alignSelf: 'center' },
  view11:
    { flex: 1, backgroundColor: Colors.mainbg },
  view12:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
  },
  view12img:
    { width: 20, height: 20 },
  touch:
  {
    width: 80,
    height: 30,
    backgroundColor: Colors.bluetheme1,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 999
  },
  touchview:
    { width: width * 0.25, justifyContent: 'center', alignSelf: 'flex-end' },
  view13:
  {
    width: width * 0.92,
    alignSelf: 'center',
    height: 'auto',
  },
  touchclr:
    { color: '#333' },
  container:
  {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
  },
  view14:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  view15: {
    top: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgstyles:
    { width: 14, height: 14 },
  view16:
    { justifyContent: 'center', alignSelf: 'center', flex: 1 },
  view17:
  {
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    flexDirection: 'row',
  },
  view18:
    { width: width * 0.42, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  touch2:
    { right: 12, fontSize: 14 },
  view19:
    { width: width * 0.42, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  marg: { marginVertical: 10 },
  marg1: { marginVertical: 3 },
  marg2: { marginVertical: 12 },
  marg3: { marginVertical: 8 },
  marg4: { marginVertical: 150 },
  imgbg: { width: width, height: 'auto' },
  top2: { top: 30, },
  view20: { width: width * 0.82 },
  txt: {
    fontFamily: FontFamily.PopinsMedium,
    color: '#FFF'
  },

  txt1:
    {
      color: Colors.black,
      fontFamily: FontFamily.Popinsbold,
      fontSize: FontSize.labelText4,
      top: 3
    },
    txt2:
    {
      fontSize: FontSize.labelText2,
      left: 2,
      top: 2,
      fontFamily: FontFamily.PopinsMedium
    },

  CalendarListView: {
    width: width * 0.92,
    alignSelf: 'center',
    height: 'auto',
  },
  clr:
  {
    backgroundColor: '#ebecef'
  },
  clrtheme:
  {
    color: Colors.bluetheme
  },
  views:
    { width: 70, height: 18, padding: 2, borderRadius: 30, backgroundColor: '#ff1717', justifyContent: 'center', },
  views1:
    { fontSize: 9, justifyContent: 'center', alignSelf: 'center', color: '#FFF', fontFamily: FontFamily.Popinssemibold },
  views2:
    { width: 70, height: 18, padding: 2, borderRadius: 30, backgroundColor: '#1ecc91', justifyContent: 'center', },
  views3:
    { fontSize: 9, justifyContent: 'center', alignSelf: 'center', color: '#FFF', fontFamily: FontFamily.Popinssemibold },
  views4:
    { width: 70, height: 18, padding: 2, borderRadius: 30, backgroundColor: '#ff7c17', justifyContent: 'center', },
  views5:
    { fontSize: 9, justifyContent: 'center', alignSelf: 'center', color: '#FFF', fontFamily: FontFamily.Popinssemibold },




});

export default styles;