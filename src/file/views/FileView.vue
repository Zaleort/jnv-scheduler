<template>
  <div class="file">
    <div class="file-background-mask">
      <FileHeading />
      <div class="file__basic-data">
        <CustomerData
          :name="name"
          :phone="phone"
          :email="email"
        />
        <DietSchedule
          :proteins="proteins" 
          :carbohydrates="carbohydrates" 
          :fat="fat"
          :observations="dietObservations" 
        />
        <WeeklyWeight :weights="weights" />
      </div>

      <WorkoutSchedule :workouts="workouts" :observations="workoutObservations" />
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomerData from '../components/CustomerData.vue';
import FileHeading from '../components/FileHeading.vue';
import WeeklyWeight from '../components/WeeklyWeight.vue';
import DietSchedule from '../components/DietSchedule.vue';
import WorkoutSchedule, { Workout } from '../components/WorkoutSchedule.vue';

export interface FileViewProps {
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

defineProps<FileViewProps>();
</script>