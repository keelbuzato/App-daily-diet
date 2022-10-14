import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEALS_COLLECTION } from '@storage/storageConfig';

export async function getByIdMeals(id: string) {
  try {
    const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

    const newMeals: string[] = storage ? JSON.parse(storage) : [];

    return newMeals.find((item) => item.id === id);
  } catch (error) {
    throw error;
  }
}
