<template>
  <div class="file">
    <div class="file-background-mask">
      <FileHeading />
      <div class="file__basic-data">
        <CustomerData />
        <DietSchedule />
        <WeeklyWeight />
      </div>

      <WorkoutSchedule />
      <Observations />
    </div>
  </div>
</template>

<script setup lang="ts">
import FileHeading from '../components/FileHeading.vue';
import WeeklyWeight from '../components/WeeklyWeight.vue';
import DietSchedule from '../components/DietSchedule.vue';
import WorkoutSchedule from '../components/WorkoutSchedule.vue';
import NutritionValues from '../components/NutritionValues.vue';
import CustomerData from '../components/CustomerData.vue';
import Observations from '../components/Observations.vue';
</script>