<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
    import Vue from 'vue';
    import { AccordionComponent, AccordionPlugin, AccordionItemsDirective,AccordionItemDirective } from '@syncfusion/ej2-vue-navigations';

    Vue.component('ejs-accordion', AccordionComponent);
    Vue.component('e-accordionitem', AccordionItemDirective);
    Vue.component('e-accordionitems', AccordionItemsDirective);

    export default {
  name: 'App'
}
</script>

<style>
    body {
    }
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
</style>
