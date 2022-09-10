<template>
  <div class="workout-schedule">
    <h2 class="file__subheading">PROGRAMACIÓN</h2>

    <table class="table workout-schedule__table">
      <thead>
        <tr>
          <th colspan="2">LUNES</th>
          <th colspan="2">MARTES</th>
          <th colspan="2">MIÉRCOLES</th>
          <th colspan="2">JUEVES</th>
          <th colspan="2">VIERNES</th>
          <th colspan="2">SÁBADO</th>
          <th colspan="2">DOMINGO</th>
        </tr>

        <tr>
          <template v-for="i in 7">
            <th class="pink">EJERCICIO</th>
            <th class="pink">VOLUMEN</th>
          </template>
        </tr>
      </thead>

      <tbody>
        <tr v-for="workout of workouts">
          <td>{{ workout.mon.exercise }}</td>
          <td>{{ workout.mon.volume }}</td>
          
          <td>{{ workout.tue.exercise }}</td>
          <td>{{ workout.tue.volume }}</td>
          
          <td>{{ workout.wed.exercise }}</td>
          <td>{{ workout.wed.volume }}</td>
          
          <td>{{ workout.thu.exercise }}</td>
          <td>{{ workout.thu.volume }}</td>
          
          <td>{{ workout.fri.exercise }}</td>
          <td>{{ workout.fri.volume }}</td>
          
          <td>{{ workout.sat.exercise }}</td>
          <td>{{ workout.sat.volume }}</td>
          
          <td>{{ workout.sun.exercise }}</td>
          <td>{{ workout.sun.volume }}</td>
        </tr>
      </tbody>
    </table>

    <Observations :observations="observations" />
  </div>
</template>

<script setup lang="ts">
import Observations from './Observations.vue';

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

export interface WorkoutScheduleProps {
  workouts?: Workout[];
  observations?: string; 
}

const props = withDefaults(defineProps<WorkoutScheduleProps>(), {
  workouts: () => [],
})
</script>