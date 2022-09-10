import { Workout } from './Workout';
export interface FileFormData {
  name: string,
  phone: string,
  email: string,
  proteins: number,
  carbohydrates: number,
  fat: number,
  dietObservations: string,
  weights: number[],
  workouts: Workout[],
  workoutObservations: string;
}