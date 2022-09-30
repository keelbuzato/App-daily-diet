import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

import { Home } from '@screens/home';
import { Loading } from '@components/Loading';
import { SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle={'dark-content'} backgroundColor="transparent" />
        {fontsLoaded ? <Home /> : <Loading />}
      </ThemeProvider>
    </SafeAreaView>
  );
}
