import { StyleSheet, Dimensions } from 'react-native'
import { FontSize } from '../Fonts'
import { Colors } from '../Colors'
import { FontFamily } from '../FontFamily'
const { width, height } = Dimensions.get('window')

const LoginStyle = StyleSheet.create({
    imagebackgrount: {
        flex: 1,
        zIndex: 9999,
        width: width,
        height: height,
    },
    iconImage: {
        resizeMode: 'contain',
        alignSelf: 'center',
        width: width * 0.4,
        height: height * 0.25,
    },
    uppertext: {
        fontSize: FontSize.labelText2,
        fontFamily: FontFamily.PopinsMedium,
    },
    container: {
        width: width * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 11,
        alignSelf: 'center',
    },
    textInputView:{
        width: width * 0.9,
        flexDirection: 'row',
        borderRadius: 12,
        alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 0.8,
    },
    textInput:{
        fontSize: 14,
        height: 45,
        fontFamily: FontFamily.PopinsRegular,
        left: 15
    },
    textInputpswd:{
        fontSize: 14,
        height: 45,
        fontFamily: FontFamily.PopinsRegular,
        left: 15,
        width: width * 0.81,
    },
    MGv5:{
        marginVertical: 5 
    },
    MGv15:{
        marginVertical: 15
    },
    eyeButton:{
        width: width * 0.07,
    },
    contactText:{
        
    }

})
export { LoginStyle }