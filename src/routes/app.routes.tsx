import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsMeal } from '@screens/DetailsMeal';
import { EditRegister } from '@screens/EditRegister';
import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/home';
import { RegisterNewMeals } from '@screens/RegisterNewMeals';
import { Statistic } from '@screens/Statistic';
import React from 'react';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="newMeals" component={RegisterNewMeals} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="detailsMeals" component={DetailsMeal} />
      <Screen name="editRegister" component={EditRegister} />
    </Navigator>
  );
}
