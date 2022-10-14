import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';
import { getAllNewMeals } from './getAllNewMeals';

export async function removeRegisterMeals(melDeleted: string) {
  try {
    const storage = await getAllNewMeals();
    const filtered = storage.filter((meals) => meals.id !== melDeleted);
    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(filtered));
    await AsyncStorage.removeItem(`${MEALS_COLLECTION}-${melDeleted}`);
  } catch (error) {
    throw error;
  }
}
