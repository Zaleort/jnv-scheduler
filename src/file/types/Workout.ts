export interface Workout {
  mon: WorkoutDay;
  tue: WorkoutDay;
  wed: WorkoutDay;
  thu: WorkoutDay;
  fri: WorkoutDay;
  sat: WorkoutDay;
  sun: WorkoutDay;
}  

export interface WorkoutDay {
  exercise: string;
  volume: string;
}