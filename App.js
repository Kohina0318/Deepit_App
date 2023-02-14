import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import MainNavigationStack from './src/Navigation/MainNavigationStack';
import {LogBox} from 'react-native';
import { ToastProvider } from 'react-native-toast-notifications';
// import FlashMessage from 'react-native-flash-message';
import RootReducer from './src/ReduxStorage/RootReducer';
// export const store = createStore(RootReducer);
import NewTheme from './src/Component/Theme/NewTheme';

const styles = StyleSheet.create({
  mainContainer: {
    padding: 0,
    marginBottom: 0,
    backgroundColor: '#FFF',
    flex: 1,
  },
});

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <View style={styles.mainContainer}>
      <Provider store={store}>
        <NewTheme />
        <ToastProvider swipeEnabled={true}>
          <MainNavigationStack />
        </ToastProvider>
        {/* <FlashMessage position="top" /> */}
      </Provider>
      {/* <ProfileNew/> */}
    </View>
  );
}
