<template>
    <q-dialog v-model="alert" style="width:500px">
        <div style="width:500px">
            <q-card>
                <q-card-section>
                    <q-bar>
                        <q-icon name="add"></q-icon>
                        <div class="text-h6">Alert</div>
                        <q-space/>
                        <q-btn dense flat icon="close" v-close-popup>
                            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
                        </q-btn>
                    </q-bar>
                </q-card-section>

                <q-card-section>
                    <q-input v-model="url" filled></q-input>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat label="OK" color="primary" @click="ok"  v-close-popup/>
                    <q-btn flat label="Abbrechen" color="secondary" v-close-popup></q-btn>
                </q-card-actions>
            </q-card>
        </div>
    </q-dialog>
</template>

<script>
    export default {
        name: "ImageDialog",
        props: {
            value: {
                default: false,
                type: Boolean
            },
            current:String
        },
        computed: {
        },
        methods: {
            ok(){
                this.$emit('change',this.url)
            },
            show(url=''){
                this.url = url;
                this.alert = true;
            }
        },
        data() {
            return {
                alert:false,
                url:'',
            }
        },
    }
</script>

<style scoped>

</style>