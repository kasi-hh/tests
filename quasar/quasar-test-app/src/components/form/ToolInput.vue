<template>
    <div class="row">
        <label class="col-2 left-label">{{label}}</label>
        <q-input class="col-10" filled :value="value"></q-input>
    </div>
</template>

<script>
    export default {
        name: "ToolInput",
        props:{
            labelWidth:{type:String,default:'150px'},
            label:{type:String},
            value:String
        }
    }
</script>

<style scoped>

</style>