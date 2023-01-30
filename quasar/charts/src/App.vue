<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
    import charts from 'charts';
export default {
  name: 'App',
    mounted() {
      charts.load('current', {'packages':['corechart']});
    }
}
</script>

<style>
</style>
