<template>
  <div>{{value}}</div>
</template>

<script>
    export default {
        name: "AppTest",
        props:{
            name:{type:String,default:'KASI'},
            value:Number,
        }
    }
</script>

<style scoped>

</style>
