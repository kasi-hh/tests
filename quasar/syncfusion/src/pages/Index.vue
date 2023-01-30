<template>
  <q-page class="flex flex-center">
    <q-bar>testing</q-bar>
    <test-number placeholder="Zahl eingeben" ></test-number>
    <q-badge color="#abc" text-color="#cba" >TEST</q-badge>
    <ejs-accordion expand-mode="" items=""></ejs-accordion>
      <ejs-accordion expandMode="single" items="items" >
          <e-accordionitems>
              <e-accordionitem expanded='true' header='ASP.NET' content='Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.'></e-accordionitem>
              <e-accordionitem header='ASP.NET MVC' content='The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.'></e-accordionitem>
              <e-accordionitem header='JavaScript'>tesing</e-accordionitem>
          </e-accordionitems>
      </ejs-accordion>
  </q-page>
</template>

<style>
</style>

<script>
  import TestNumber from '../components/TestNumber'
export default {
    components:{TestNumber},
  name: 'PageIndex',
    data(){
      return {
          items:[
              { header: 'Accordion Header', content: 'Accordion Content' },
              { header: 'Accordion Header', content: 'Accordion Content' },
              { header: 'Accordion Header', content: 'Accordion Content' },
          ]
      }
    },
    mounted() {
    }
}
</script>
