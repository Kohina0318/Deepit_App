import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './NavigationService';
import { isDarkMode } from '../Component/Theme/ThemeDarkLightColor';
import Login from '../ScreenFile/Login';
import Report from '../ScreenFile/Report';
import Splash from '../ScreenFile/Splash';
import BottomNavigationStack from './BottomNavigationStack';

function MainNavigationStack(props) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer
      theme={isDarkMode ? DarkTheme : DefaultTheme}
      ref={navigationRef}>

      <Stack.Navigator headerShown={false}>

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={BottomNavigationStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Report"
          component={Report}
          options={{ headerShown: false }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigationStack;
