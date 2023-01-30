<template>
    <q-page class="flex" style="border:1px solid yellow">
        <div class="q-pa-md full-width">

            <div class="row">
                <div class="col">
                    .col
                </div>
                <div class="col">
                    <q-timeline color="secondary">
                        <q-timeline-entry heading>
                            Timeline heading
                        </q-timeline-entry>

                        <q-timeline-entry
                                title="Event Title"
                                subtitle="February 22, 1986"
                                color="red"
                        >
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </q-timeline-entry>

                        <q-timeline-entry
                                title="Event Title"
                                subtitle="February 21, 1986"
                                icon="delete"
                        >
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </q-timeline-entry>

                        <q-timeline-entry heading>
                            November, 2017
                        </q-timeline-entry>

                        <q-timeline-entry
                                title="Event Title A"
                                subtitle="February 22, 1986"
                                color="red"
                                icon="group"
                        >
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </q-timeline-entry>

                        <q-timeline-entry
                                title="Event Title B"
                                subtitle="February 22, 1986"
                                color="red"
                                icon="group"
                        >
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </q-timeline-entry>
                        <q-timeline-entry
                                title="Event Title"
                                subtitle="February 22, 1986"
                                color="teal-10"
                                icon="person"
                        >
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </q-timeline-entry>

                        <q-timeline-entry
                                title="Event Title"
                                subtitle="February 22, 1986"
                                color="red"
                                icon="group"
                        >
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </q-timeline-entry>

                        <q-timeline-entry
                                title="Event Title"
                                subtitle="February 22, 1986"
                        >
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </q-timeline-entry>

                        <q-timeline-entry
                                title="Event Title"
                                subtitle="February 22, 1986"
                        >
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </q-timeline-entry>
                    </q-timeline>
                </div>
            </div>

            <div class="row">
                <div class="col text-uppercase">
                    <span class="text-uppercase shadow-3">dfsdfsakdfjh</span>
                </div>
                <div class="col col-6 text-uppercase shadow-2">
                    .col
                    <div class="q-gutter-xs">
                        <q-btn style="color:red" icon="fas fa-ambulance" :label="'Btn'+n" :shadow="false" v-for="n in 3" :key="n"></q-btn>
                    </div>
                </div>
                <div class="col q-ma-sm q-pl-sm">
                    <h3>Some Test</h3>
                </div>
            </div>
            <div class="row" style="height:300px">
                <test-markup-table class="col"></test-markup-table>
                <test-markup-table class="col-8"></test-markup-table>
            </div>
            <div class="row">
                <q-splitter
                        v-model="splitterModel"
                        style="height: 400px"
                >

                    <template v-slot:before>
                        <div class="q-pa-md">
                            <div class="text-h4 q-mb-md">Before</div>
                            <div v-for="n in 20" :key="n" class="q-my-md">{{ n }}. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum
                                numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
                            </div>
                        </div>
                    </template>

                    <template v-slot:after>
                        <div class="q-pa-md">
                            <div class="text-h4 q-mb-md">After</div>
                            <div v-for="n in 20" :key="n" class="q-my-md">{{ n }}. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum
                                numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.
                            </div>
                        </div>
                    </template>

                </q-splitter>
            </div>
            <div class="row">
                <div class="col-1">
                    <q-btn label="mails" @click="onTabButton('mails')"></q-btn>
                    <q-btn label="alarms" @click="onTabButton('alarms')"></q-btn>
                    <q-btn label="movies" @click="onTabButton('movies')"></q-btn>
                </div>
                <q-card style="min-height:200px" class="col full-width">
                    <q-tabs
                            v-model="tab"
                            dense
                            class="text-grey"
                            active-color="primary"
                            indicator-color="primary"
                            align="justify"
                            narrow-indicator
                    >
                        <q-tab name="mails" label="Mails"/>
                        <q-tab name="alarms" label="Alarms"/>
                        <q-tab name="movies" label="Movies"/>
                    </q-tabs>
                    <q-tab-panels ref="tabpanels" v-model="tab" animated swipeable transition-next="fade" transition-prev="fade">
                        <q-tab-panel name="mails" dark class="dark-panel">
                            <div class="text-h6">Mails</div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </q-tab-panel>

                        <q-tab-panel name="alarms" class="dark-panel">
                            <div class="text-h6">Alarms</div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </q-tab-panel>

                        <q-tab-panel name="movies" class="dark-panel">
                            <div class="text-h6">Movies</div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </q-tab-panel>
                    </q-tab-panels>
                </q-card>
            </div>
            <div v-for="n in 50" class="row">
                <q-card
                        class="my-card text-white col"
                        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
                >
                    <q-card-section>
                        <div class="text-h6">Our Changing Planet</div>
                        <div class="text-subtitle2">by John Doe</div>
                    </q-card-section>

                    <q-card-section>
                        {{ lorem }}
                    </q-card-section>
                    <q-card-actions>
                        <q-btn icon="fas fa-user"></q-btn>
                        <q-btn icon="save"></q-btn>
                    </q-card-actions>
                </q-card>
                <q-card dark bordered class="bg-grey-9 my-card col">
                    <q-card-section>
                        <div class="text-h6">Our Changing Planet</div>
                        <div class="text-subtitle2">by John Doe</div>
                    </q-card-section>

                    <q-separator dark inset/>

                    <q-card-section>
                        {{ lorem }}
                    </q-card-section>
                </q-card>
            </div>

        </div>
    </q-page>
</template>

<script>
    import TestMarkupTable from '../components/TestMarkupTable'

    export default {
        name: 'PageIndex',
        components: {
            TestMarkupTable
        },
        data() {
            return {
                tab: 'mails',
                splitterModel: 50,
                lorem: 'kadfk adhfkasjd fhkasjdfh sakdjfh sakdjf sakdjf sakdjfhs akdfjs kadfh '
            }
        },
        methods: {
            onTabButton(name) {
                this.$refs.tabpanels.goTo(name)
            }
        }
    }
</script>

<style scoped>
    .col {
        border: 1px solid green;
    }

    .dark-panel {
        background-color: #ccc;
    }
</style>

