import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { Loading } from '@components/Loading';
import { SafeAreaView, StatusBar } from 'react-native';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </SafeAreaView>
  );
}
