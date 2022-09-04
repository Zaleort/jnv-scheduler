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
        <tr>
          <td>{{ mon?.exercise }}</td>
          <td>{{ mon?.volume }}</td>
          
          <td>{{ tue?.exercise }}</td>
          <td>{{ tue?.volume }}</td>
          
          <td>{{ wed?.exercise }}</td>
          <td>{{ wed?.volume }}</td>
          
          <td>{{ thu?.exercise }}</td>
          <td>{{ thu?.volume }}</td>
          
          <td>{{ fri?.exercise }}</td>
          <td>{{ fri?.volume }}</td>
          
          <td>{{ sat?.exercise }}</td>
          <td>{{ sat?.volume }}</td>
          
          <td>{{ sun?.exercise }}</td>
          <td>{{ sun?.volume }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
  interface WorkoutDay {
    exercise: string;
    volume: string;
  }

  interface WorkoutScheduleProps {
    mon: WorkoutDay;
    tue: WorkoutDay;
    wed: WorkoutDay;
    thu: WorkoutDay;
    fri: WorkoutDay;
    sat: WorkoutDay;
    sun: WorkoutDay; 
  }

  const props = defineProps<WorkoutScheduleProps>()
</script>