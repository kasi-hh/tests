<template>
    <div ref="gantt" style="width:800px; height:500px"></div>
</template>

<script>
    import 'dhtmlx-gantt';
    import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'
    export default {
        name: "Gantt",
        mounted() {
            this.gantt = gantt.init(this.$refs.gantt)
        }
    }
</script>

<style scoped>

</style>