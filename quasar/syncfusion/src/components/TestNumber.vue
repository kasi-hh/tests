<template>
  <ejs-numerictextbox :value="value" :min="min" :max="max" :placeholder="placeholder" :format="format"></ejs-numerictextbox>
</template>

<script>
    import Vue from "vue";
    import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

    Vue.use(NumericTextBoxPlugin);
    export default {
        name: "TestNumber",
        props:{
            value:Number,
            min:Number,
            max:Number,
            placeholder:String,
            format:{type:String,default:'0.00'}
        }

    }
</script>

<style scoped>

</style>
