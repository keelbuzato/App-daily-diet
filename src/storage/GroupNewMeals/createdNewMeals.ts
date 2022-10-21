import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { getAllNewMeals } from './getAllNewMeals';

type newMealsProps = {
  name: string;
  description: string;
  data: string;
  hours: string;
  variant: 'UP' | 'DOWN';
};

export async function createdNewMeals(newMeals: newMealsProps) {
  try {
    const storedGroupNewMeal = await getAllNewMeals();
    const storage = JSON.stringify([...storedGroupNewMeal, newMeals]);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
