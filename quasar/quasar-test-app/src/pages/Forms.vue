<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="q-pa-md">
        <q-tabs
                v-model="panel"
                dense
                class="text-grey"
                active-color="primary"
                indicator-color="primary"
                align="justify"
                narrow-indicator
        >
            <q-tab name="login" label="Login"/>
            <q-tab name="contact" label="Contact"/>
            <q-tab name="tool" label="Tool"/>
            <q-tab name="tool2" label="Tool2"></q-tab>
        </q-tabs>
        <q-separator/>
        <q-tab-panels v-model="panel" animated class="shadow-2 rounded-borders">
            <q-tab-panel name="tool2">

            </q-tab-panel>
            <q-tab-panel name="login" style="height:500px" class="flex flex-center">

                <div class="q-pa-lg">
                    <q-form class="q-pa-lg rounded-borders" style="width:50vh;border:1px solid #000">
                        <div class="text-h6">Login</div>
                        <div class="flex q-pa-lg">
                            <div class="col2 flex flex-center q-pa-lg">Username</div>
                            <q-input filled v-model="username" class="col6"></q-input>
                        </div>
                        <div class="flex q-pa-lg">
                            <div class="col2 flex flex-center q-pa-lg">Password</div>
                            <q-input
                                    filled
                                    v-model="password"
                                    class="col6"
                                    :rules="[val => val !== null && val !== '' && val.length > 8 || 'Password min 8 chars']"
                            ></q-input>
                        </div>
                        <q-btn>Submit</q-btn>
                    </q-form>
                </div>
            </q-tab-panel>

            <q-tab-panel name="contact" class="">
                <q-form bg-color="black" style="max-width:500px">
                    <q-input style=""
                             :clearable="input.clearable"
                             :filled="input.filled"
                             :loading="input.loading"
                             :outlined="input.outlined"
                             :borderless="input.borderless"
                             :standout="input.standout"
                             :counter="input.counter"
                             :rounded="input.rounded"
                             :square="input.square"
                             :dense="input.dense"
                             :items-aligned="input.itemsAligned"
                             :disable="input.disable"
                             :readonly="input.readonly"
                             v-model="contact.email" type="email">
                        <template v-slot:before>
                            <label class="left-label">Test</label>
                        </template>
                    </q-input>
                    <q-input standout rounded outlined clearable v-model="contact.ort">
                        <template v-slot:before>
                            <label class="left-label">Ort</label>
                        </template>
                    </q-input>
                    <q-input standout rounded outlined v-model="contact.zip" mask="#####" style="width:50%">
                        <template v-slot:before>
                            <label class="left-label">Plz</label>
                        </template>
                    </q-input>
                    <q-input standout rounded outlined v-model="contact.phone" label="Telefon" clearable :rules="rules.phone"></q-input>
                    <q-select :options="options.gender" label="select" v-model="contact.gender" emit-value map-options :display-value="`Company: ${contact.gender}`"></q-select>
                    <div class="q-pa-lg">
                        <label>Geschlecht</label>
                        <q-radio v-model="contact.gender" val="male" label="Mann" color="teal" icon="mail"></q-radio>
                        <q-radio v-model="contact.gender" val="female" label="Frau" color="orange"></q-radio>
                    </div>
                </q-form>
                <div class="row">
                    <q-card class="full-width">
                        <q-card-section>
                            <q-toggle v-model="input.clearable" label="clearable"></q-toggle>
                            <q-toggle v-model="input.filled" label="filled"></q-toggle>
                            <q-toggle v-model="input.loading" label="loading"></q-toggle>
                            <q-toggle v-model="input.outlined" label="outlined"></q-toggle>
                            <q-toggle v-model="input.borderless" label="borderless"></q-toggle>
                            <q-toggle v-model="input.standout" label="standout"></q-toggle>
                            <q-toggle v-model="input.counter" label="counter"></q-toggle>
                            <q-toggle v-model="input.rounded" label="rounded"></q-toggle>
                            <q-toggle v-model="input.square" label="square"></q-toggle>
                            <q-toggle v-model="input.dense" label="dense"></q-toggle>
                            <q-toggle v-model="input.itemsAligned" label="items-aligned"></q-toggle>
                            <q-toggle v-model="input.disable" label="disable"></q-toggle>
                            <q-toggle v-model="input.readonly" label="readonly"></q-toggle>
                        </q-card-section>
                    </q-card>
                </div>
            </q-tab-panel>

            <q-tab-panel name="tool">
                <div class="text-h6">Tool</div>
                <q-form>
                    <q-input filled label="Email" v-model="contact.email">
                        <template v-slot:after>
                            <q-btn @click="showDialog">...</q-btn>
                        </template>
                    </q-input>
                    <q-input filled label="Bild" v-model="imgurl">
                        <template v-slot:after>
                            <q-btn @click="showImageDialog">...</q-btn>
                            <q-btn @click="doAlert">Alert</q-btn>
                            <q-btn @click="imgDialog">image</q-btn>
                        </template>
                    </q-input>
                </q-form>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </q-tab-panel>
        </q-tab-panels>
        <q-dialog v-model="dlg.show">
            <q-card>
                <q-card-section class="row items-center">
                    <div class="text-h6">Close icon</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section>
                    <q-form>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
                        </p>
                        <q-input v-model="contact.name" filled label="Name"></q-input>
                        <q-input v-model="dlg.url" filled label="URL"></q-input>
                    </q-form>
                </q-card-section>
                <q-card-actions class="justify-end q-px-md">
                    <q-btn @click="dlg.show = false" color="">Add</q-btn>
                </q-card-actions>
            </q-card>
        </q-dialog>
        <image-dialog ref="dialog" :url="imgurl" @change="onUrlChanged"></image-dialog>
    </div>
</template>

<script>
    import ImageDialog from '../components/dialogs/ImageDialog';
    import Vue from 'vue';
    const required = (val)=>{return !!val || 'Zu wenig'};
    const minLength = (val)=> {return val.length > 5 || 'Zu kurz min 5'};
    export default {
        components: {ImageDialog},
        name: "Forms",
        data() {
            return {
                panel: 'tool',
                username: '',
                password: '',
                name: '',
                imgurl:'/sdfasdf',
                dlg:{
                    url:'',
                    show:false
                },
                contact: {
                    email: 'kasi@arielgrafik.de',
                    ort:'Hamburg',
                    phone:'122345',
                    gender:'female',
                },
                rules:{
                    phone:[required, minLength]
                },
                input: {
                    clearable: true,
                    filled: true,
                    loading: false,
                    outlined: false,
                    borderless: false,
                    standout: false,
                    counter: false,
                    rounded: false,
                    square: false,
                    dense: false,
                    itemsAligned: false,
                    disable: false,
                    readonly: false,
                },
                options:{
                    gender:[
                        {label:'Mann', value:'male',description:'dk asdkjf akdfj ',icon:'menu'},
                        {label:'Frau', value:'female',description:'dk asdkjf akdfj ',icon:'alarm'},
                    ]
                }
            }
        },
        computed: {
            hasLength() {
                return this.contact.ort.length > 0
            }
        },
        methods: {
            doAlert(){
                this.$q.dialog({
                    style:'border:2px solid #000',
                    title:'Dialog',
                    message:'dkf jaskdjf haskdfjh kasdf',
                    color:'red',
                    transitionShow:'rotate'
                }).onOk(()=>{
                    console.log('ok', arguments)
                })
            },
            showDialog(){
                this.dlg.url = 'http://www.arielgrafik.de';
                this.dlg.show = true;
            },
            showImageDialog(){
                console.log('ref', this.$refs.dialog)
                this.$refs.dialog.show(this.imgurl);
            },
            onUrlChanged(data){
                console.log('data', data);
                this.imgurl = data;
            },
            imgDialog(){
                const def = Vue.extend(ImageDialog);
                const inst = new def({
                    propsData: {
                        value:true,
                        currentUrl:''
                    }
                });
                console.log('doc', inst)
                let el = document.getElementById('image-dialog-container');
                if (!el){
                    el = document.createElement('div');
                    document.body.append(el);

                }
                inst.$mount(el);
                inst.show('http://arielghrafik.de')

            }
        }
    }
</script>

<style scoped>
    .label {
        width: 200px;
    }
    .left-label {
        width:100px;
    }

</style>