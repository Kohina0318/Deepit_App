import { StyleSheet, Dimensions, } from "react-native";
import { Colors } from "../config/Colors";
import { FontSize, } from '../config/Fonts';
import { FontFamily, } from '../config/FontFamily';
const { width, } = Dimensions.get('screen');

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  modalView: {
    margin: 25,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  ChangeDoctorButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'center',
  },
  textStyle: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: FontSize.labelText2,
    fontFamily: FontFamily.PopinsMedium,
  },
  modalText: {
    marginBottom: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  smalltext: {
    marginBottom: 30,
    fontSize: 12,
    color: '#000',
  },
  submittext: {
    fontSize: FontSize.h5,
    color: Colors.black,
    textAlign: 'center',
    width: width * 0.82,
    alignSelf: 'center',
    fontFamily: FontFamily.Popinssemibold,
    top: 5,
  },
  SEARCHING:{width:width*0.93,justifyContent:'center',alignSelf:'center',borderColor: Colors.borderColor,
    borderWidth: 1,borderRadius:30},

  CardText: {
    fontSize: FontSize.labelText3,
    fontFamily: FontFamily.PopinsMedium,
    color: Colors.black,
    alignSelf: 'center',
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
  RBText: {
    fontSize: FontSize.labelText2,
    fontFamily: FontFamily.PopinsMedium,
    color: Colors.black,
  },
  view:
  {
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  buttonview:
  {
    backgroundColor: '#ebecef',
    borderRadius: 10,
    width: 90,
    height: 30,
    justifyContent: 'center',
  },
  buttontxt:
    { alignSelf: 'center', fontFamily: FontFamily.PopinsMedium, fontSize: 11 },
  touchview:
  {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  touchtxt:
  {
    top: 10,
    fontFamily: FontFamily.PopinsRegular,
    color: Colors.black,
    // left: 10,
    fontSize: FontSize.labelText,
  },
  v:
  {
    flex: 1,
    padding: 15,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    borderRadius: 7,
    borderColor: Colors.borderColor,
    borderWidth: 1
  },
  v1:
  {
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'row'
  },
  v1a:
  {
    fontSize: FontSize.smallText, color: '#333'
  },
  w:
    { width: width * 0.65 },
  v2:
    { width: width * 0.35, justifyContent: 'flex-end', alignSelf: 'flex-end', left: 20 },
  v3:
    { flexDirection: 'row', right: 70, justifyContent: 'center' },
  vv:
    { fontSize: FontSize.small, top: 5, color: '#333' },
  touch:
  {
    width: 'auto',
    height: 20,
    backgroundColor: Colors.bluetheme1,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 999
  },
  touchtxt1:
  {
    fontSize: 11,
    left: 2,
    top: 2,
    fontFamily: FontFamily.PopinsMedium
  },
  touch1:
  {
    width: 'auto',
    height: 20,
    backgroundColor: Colors.bluetheme1,
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 999,
    left: 5
  },
  marg3:
    { marginVertical: 3 },
  v4:
    { flex: 1, backgroundColor: Colors.mainbg },
  wh:
    { width: width, height: 90 },
  t:
    { top: 25, },
  v5:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
    top: 5,
  },
  wh1:
    { width: 25, height: 30 },
  v6:
  {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  wh2:
    { padding: 1, right: 20 },
  r10:
    { right: 10 },
  p:
    { padding: 1 },
  marg5:
    { marginVertical: 5 },
  v7:
  {
    width: width * 0.92,
    alignSelf: 'center',
    height: 'auto',
  },
  marg70:
    { marginVertical: 70 },
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 0,
  },
  v8:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,

  },
  wh3:
    { width: 11, height: 23 },
  ccf:
    { justifyContent: 'center', alignSelf: 'center', flex: 1 },
  w1:
    { width: width * 0.9 },
  card:
    { alignSelf: 'flex-start', left: 5 },
  view1:
  {
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.9,
  },
  view2:
    { width: width * 0.8, height: 'auto' },
  img:
  {
    width: width * 0.75,
    height: 180,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  marg2:
    { marginVertical: 2 },
  view3:
    { flexDirection: 'row', justifyContent: 'center' },
  view4:
  {
    height: 40,
    width: width * 0.2,
    top: 10,
    backgroundColor: Colors.bluetheme,
    borderRadius: 12
  },
  view5: {
    height: 40,
    width: width * 0.25,
    top: 10,
    backgroundColor: Colors.white,
    borderRadius: 5,
  },
  TaskListView: {
    width: width * 0.92,
    alignSelf: 'center',
    // height: 'auto'
  },


});


export default styles;