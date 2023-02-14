import * as React from 'react';
import {View, Dimensions, TouchableOpacity, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image as ImageR, Modal} from 'react-native';
import {
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {Colors} from '../config/Colors';
import {FontFamily} from '../config/FontFamily';
import {MyThemeClass} from '../Component/Theme/ThemeDarkLightColor';
import {MainNavigatorstyle} from '../config/css/MainNavigatorstyle';
import Report from '../ScreenFile/Report';
import Dashboard from '../ScreenFile/Dashboard';

const Tab = createBottomTabNavigator();
const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};

export default function BottomNavigationStack() {
  const mode = useSelector(state => state.mode);
  const themecolor = new MyThemeClass(mode).getThemeColor();

  const showConfirmDialog = () => {
    // React.useEffect(()=>{
    //   setShow(true);
    // },[])

    return Alert.alert('Are your sure?', 'Are you sure you want to logout ?', [
      // The "Yes" button
      {
        text: 'Yes',
        onPress: () => {
          // setShowBox(false);
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: 'No',
      },
    ]);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 52,
          backgroundColor: themecolor.THEMECOLOR1,
          borderColor: themecolor.BOXBORDERCOLOR,
          keyboardHidesTabBar: true,
          labelStyle: MainNavigatorstyle.tab1,
          style: MainNavigatorstyle.tab2,
          animationEnabled: true,
          inactiveTintColor: Colors.gray,
          activeTintColor: themecolor.HEADERTHEMECOLOR,
          showLabel: true,
          fontFamily: FontFamily.PopinsMedium,
          headerShown: false,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          MyTransition,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {top: -4},
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <>
                <ImageR
                  source={require('../config/images/footermenu/home_selected.png')}
                  style={MainNavigatorstyle.bottomicon}
                />
                <View style={MainNavigatorstyle.tabbarbottomborder} />
              </>
            ) : (
              <>
                <ImageR
                  source={require('../config/images/footermenu/home_notselected.png')}
                  style={MainNavigatorstyle.bottomicon}
                />
              </>
            ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarLabel: 'Report',
          tabBarLabelStyle: {top: -4},
          tabBarIcon: ({color, size, focused}) =>
            focused ? (
              <>
                <ImageR
                  source={require('../config/images/footermenu/report_selected.png')}
                  style={MainNavigatorstyle.bottomicon}
                />
                <View style={MainNavigatorstyle.tabbarbottomborder} />
              </>
            ) : (
              <ImageR
                source={require('../config/images/footermenu/report_notselected.png')}
                style={MainNavigatorstyle.bottomicon}
              />
            ),
          headerShown: false,
        }}
      />

    </Tab.Navigator>
  );
}
