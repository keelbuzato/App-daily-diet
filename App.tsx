import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/utils';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { Loading } from '@components/Loading';
import { StatusBar } from 'expo-status-bar';
import { Routes } from '@routes/index';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar style="inverted" backgroundColor="red" />
        {fontsLoaded ? <Routes /> : <Loading />}
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
