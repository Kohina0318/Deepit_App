import {Appearance} from "react-native";
import { Colors } from "../../config/Colors";

const isDarkMode = (Appearance.getColorScheme() === 'dark')
// const isDarkMode = true ? true : false;

const Color = {
    WHITE: '#FFFFFF',
    TRANSPARENT: 'transparent',
    THEMECOLOR: isDarkMode ? '#181818' : '#f5f5f5',
    BOXTHEMECOLOR: isDarkMode ? '#3c3e44' : '#FFF',
    BOXBORDERCOLOR: isDarkMode ? 'rgba(60, 62, 68, .5)' : '#f5f6f7',
    THEMEBLACK: isDarkMode ? '#121B24' : '#252525',
    THEMEDARKGREEN: isDarkMode ? '#2F3F4D' : '#407F2C',
    THEMEWHITE: isDarkMode ? '#121B24' : '#FFFFFF',
    TXTGREETING: isDarkMode ? '#898989' : 'rgba(0, 0, 0, .5)',
    TXTWHITE: isDarkMode ? '#FFF' : '#000',
    TXTTHEME: isDarkMode ? '#676C69' : '#25A31D',
    TXTGREY: isDarkMode ? '#676C69' : '#9E9E9E',
    TXTDARKGREY: isDarkMode ? '#505050' : '#9E9E9E',
    TXTBLACK: isDarkMode ? '#676c69' : '#252525',
    TXTBlue: isDarkMode ? '#6495ED' : '#000',
    BLUEWHITE: isDarkMode ? '#6495ED' : Colors.bluetheme,
    BLUEWHITETEXT: isDarkMode ? '#6495ED' : Colors.bluetheme,
    LOGINTHEMECOLOR: isDarkMode ? '#181818' : '#FFF',
    HEADERTHEMECOLOR: isDarkMode ? '#0f3479' : Colors.bluetheme,
    LOADERTHEMECOLOR: isDarkMode ? '#181818' : 'rgba(245, 245, 245, 0.9)',
    TXTPLACEHOLDER: isDarkMode ? '#333' : '#000',
    TXTEXPENSECIRCLE: isDarkMode ? '#FFF' : '#252525',
    FULLBLACK: isDarkMode ? '#000' : '#000',
}

export default { Color };