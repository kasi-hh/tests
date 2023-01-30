<template>
    <q-page>
    </q-page>
</template>

<script>
    export default {
        name: "Mite",
        mounted() {
            this.$axios.get('/api/customers.json',{
                headers:{
                    'X-MiteApiKey':'3ebd9534be8fb77'
                }
            }).then((response)=> {
                console.log(response)
            })
        }
    }
</script>

<style scoped>

</style>