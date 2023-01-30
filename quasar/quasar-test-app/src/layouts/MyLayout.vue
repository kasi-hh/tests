<template>
    <div>
    <q-toolbar dark style="height:50px;">
        <q-btn label="test" icon="person"></q-btn>
        <q-separator vertical spaced class="q-mx-sm"></q-separator>
        <q-btn label="test" icon="group"></q-btn>
        <q-btn label="add" icon="person_add"></q-btn>
        <q-space></q-space>
        <q-btn label="right"></q-btn>
    </q-toolbar>
    <q-layout view="hHh Lpr fff" container style="height: calc(100vh - 50px)">
        <q-header elevated class="glossy">
            <q-toolbar>
                <q-btn
                        flat
                        dense
                        round
                        @click="leftDrawerOpen = !leftDrawerOpen"
                        aria-label="Menu"
                >
                    <q-icon name="menu"/>
                </q-btn>

                <q-toolbar-title>
                    Quasar App
                </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-header>

        <q-drawer
                v-model="leftDrawerOpen"
                bordered
                content-class="bg-grey-2"
        >
            <main-navigation></main-navigation>
            <q-tree style="background-color: #000"
                    :nodes="simple"
                    node-key="label"
                    :expanded.sync="expanded"
                    dark
            />
        </q-drawer>
        <q-page-container>
            <router-view></router-view>
        </q-page-container>


        <q-footer :bordered="true">
            <q-toolbar>
                <q-btn>
                    <q-icon flat dense round name="fas fa-ambulance"></q-icon>
                </q-btn>

                <q-toolbar-title>
                    Quasar App
                </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-footer>
    </q-layout>
    </div>
</template>

<script>
    import {openURL} from 'quasar'
    import MainNavigation from '../components/MainNavigation'

    export default {
        name: 'MyLayout',
        components: {
            MainNavigation
        },
        data() {
            return {
                leftDrawerOpen: this.$q.platform.is.desktop,
                expanded: ['Satisfied customers (with avatar)', 'Good food (with icon)'],
                simple: [
                    {
                        label: 'Satisfied customers (with avatar)',
                        avatar: 'https://cdn.quasar-framework.org/img/boy-avatar.png',
                        children: [
                            {
                                label:'Home',
                                icon:'home',
                                handler:this.handleTreeClick,
                                to:'/'
                            },
                            {
                                label: 'Good food (with icon)',
                                icon: 'restaurant_menu',
                                children: [
                                    { label: 'Quality ingredients' },
                                    { label: 'Good recipe' }
                                ]
                            },
                            {
                                label: 'Good service (disabled node with icon)',
                                icon: 'room_service',
                                disabled: true,
                                children: [
                                    { label: 'Prompt attention' },
                                    { label: 'Professional waiter' }
                                ]
                            },
                            {
                                label: 'Pleasant surroundings (with icon)',
                                icon: 'photo',
                                children: [
                                    {
                                        label: 'Happy atmosphere (with image)',
                                        img: 'https://cdn.quasar-framework.org/img/logo_calendar_128px.png'
                                    },
                                    { label: 'Good table presentation' },
                                    { label: 'Pleasing decor' }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            openURL,
            handleTreeClick(node){
                console.log('node', node);
                this.$router.push(node.to);
            }
        }
    }
</script>

<style>
</style>
