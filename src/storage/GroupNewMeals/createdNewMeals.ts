import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { getAllNewMeals } from './getAllNewMeals';
import { PercentVariant } from '@utils/getPercentVariant';

type newMealsProps = {
  name: string;
  description: string;
  data: string;
  hours: string;
};

export async function createdNewMeals(newMeals: newMealsProps) {
  try {
    const storedGroupNewMeal = await getAllNewMeals();
    const storage = JSON.stringify([...storedGroupNewMeal, newMeals]);
    console.log(storage);
    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
