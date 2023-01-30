<template>
    <q-page class="flex row">
        <q-card :dark="dark" :bordered="bordered" :square="square" :flat="flat" class="column col-6">
            <q-card-section>
                <h3>Title</h3>
            </q-card-section>
            <q-card-section>
                <p>sd askjdfkasjdhf akjsdhf kasjdhf ksajdhf ksajdhf ksajdhfksajfh</p>
            </q-card-section>
            <q-card-actions>
                <q-toggle v-model="flat">Flat</q-toggle>
                <q-toggle v-model="bordered">Bordered</q-toggle>
                <q-toggle v-model="dark">Dark</q-toggle>
                <q-toggle v-model="square">Square</q-toggle>
            </q-card-actions>
        </q-card>
        <q-card :dark="dark" :bordered="bordered" :square="square" :flat="flat" class="col-6">
            <q-card-actions>
                <q-toggle v-model="flat"><q-chip><q-avatar color="red" text-color="white" icon="directions"></q-avatar>Flat</q-chip></q-toggle>
                <q-toggle v-model="bordered">Bordered</q-toggle>
                <q-toggle v-model="dark">Dark</q-toggle>
                <q-toggle v-model="square">Square</q-toggle>
            </q-card-actions>
            <q-card-section><h4>Title</h4></q-card-section>
            <q-card-section> askdfj hsakdjfh askdjfh sakdjfh sakdfjh</q-card-section>
        </q-card>
        <q-card :dark="dark" :bordered="bordered" :square="square" :flat="flat" class="col-6">
            <q-card-actions>
                <q-toolbar style="background-color: #000;">
                    <q-toggle v-model="flat">Flat</q-toggle>
                    <q-toggle v-model="bordered">Bordered</q-toggle>
                    <q-toggle v-model="dark">Dark</q-toggle>
                    <q-toggle v-model="square">Square</q-toggle>
                </q-toolbar>
            </q-card-actions>
            <q-card-section><h4>Title</h4></q-card-section>
            <q-card-section> askdfj hsakdjfh askdjfh sakdjfh sakdfjh</q-card-section>
        </q-card>
    </q-page>
</template>

<script>
    export default {
        name: "TestCards",
        data() {
            return {
                dark: false,
                square: false,
                flat: false,
                bordered: false,
            }
        }
    }
</script>

<style scoped>

</style>