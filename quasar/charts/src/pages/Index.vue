<template>
    <q-page class="flex row">
        <q-card class="my-card bg-secondary text-white col-lg-6">
            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section>
                <div id="testing" style="width:700px; height:500px"></div>
            </q-card-section>
        </q-card>
        <q-card class="my-card col-6">
            <q-card-section>
                <div class="text-h6">Data</div>
            </q-card-section>
            <q-card-section>
                <q-form>
                    <q-input type="number" label="work" v-model="work"></q-input>
                    <q-input type="number" label="eat" v-model="eat"></q-input>
                    <q-input type="number" label="commute" v-model="commute"></q-input>
                    <q-input type="number" label="tv" v-model="tv"></q-input>
                    <q-input type="number" label="sleep" v-model="sleep"></q-input>
                    <q-input type="text" label="title" v-model="options.title"></q-input>
                    <q-btn-toggle
                            v-model="type"
                            toggle-color="primary"
                            flat
                            :options="[
          {label: 'One', value: 'one'},
          {label: 'Two', value: 'two'},
          {label: 'Three', value: 'three'}
        ]"
                    />
                </q-form>
            </q-card-section>
        </q-card>
        <q-card class="full-width">
            <q-card-section>
                <div class="text-h6">Result</div>
            </q-card-section>
            <q-card-section>
                <q-input type="textarea" v-model="result"></q-input>
            </q-card-section>
        </q-card>
        <q-card class="full-width">
            <div style="width:200px" id="result"></div>
        </q-card>
        <q-card class="full-width">
            <div style="width:200px" id="donutchart"></div>
        </q-card>
    </q-page>
</template>

<style>
</style>

<script>
    import charts from 'charts'

    export default {
        name: 'PageIndex',
        data() {
            return {
                result:'',
                options:{
                    title:'Test Chart',
                    isStacked:false,
                    width:'600',
                    height:'600',
                    pieHole:0.4,
                    is3D:false,
                },
                work:11,
                eat:3,
                commute:2,
                tv:1,
                sleep:7,
                type:'one',
                data:[
                    ['Task', 'Hours per Day'],
                    ['Work', 11],
                    ['Eat', 2],
                    ['Commute', 2],
                    ['Watch TV', 2],
                    ['Sleep', 7]
                ]
            }
        },
        watch:{
            work(value, old){
                console.log('work',value, old, this.data)
                this.chartData.setCell(0,1,value)
                this.createChart();
            },
            eat(value, old){
                console.log('work',value, old, this.data)
                this.chartData.setCell(1,1,value)
                this.createChart();
            },
            commute(value, old){
                console.log('work',value, old, this.data)
                this.chartData.setCell(2,1,value)
                this.createChart();
            },
            tv(value, old){
                console.log('work',value, old, this.data)
                this.chartData.setCell(3,1,value)
                this.createChart();
            },
            sleep(value, old){
                console.log('work',value, old, this.data)
                this.chartData.setCell(4,1,value)
                this.createChart();
            },
            type(value){
                switch(value){
                    case 'two':
                        this.options.isStacked = true;
                }
                this.createChart()
            },
            'options.title'(){
                this.createChart();
            }
        },
        methods:{
            createChart() {
                console.log('options',this.options)
                switch(this.type) {
                    case 'one':
                    case 'two':
                        (new google.visualization.BarChart(document.getElementById('testing'))).draw(this.chartData, this.options)
                        break;
                    case 'three':
                        (new google.visualization.PieChart(document.getElementById('testing'))).draw(this.chartData, this.options)
                        break;
                }
                const svg = document.getElementById('testing').getElementsByTagName('svg')[0];
                const width = svg.getAttribute('width'), height = svg.getAttribute('height');
                svg.setAttribute('viewBox','0 0 '+width+' '+height);
                svg.setAttribute('preserveAspectRation','xMidYMid meet');
                svg.setAttribute('width','100%');
                svg.setAttribute('height','100%');
                const html = svg.parentNode.innerHTML;
                this.result ='<div style="position:relative;padding-bottom:'+((height/width)*100)+'%"><div <div style="position:absolute;top:0;left:0;height:100%; width:100%;">'+html+'</div></div>';;
                document.getElementById('result').innerHTML = '<div style="position:relative;padding-bottom:'+((height/width)*100)+'%"><div <div style="position:absolute;top:0;left:0;height:100%; width:100%;">'+html+'</div></div>';
            }
        },
        mounted() {
            google.charts.setOnLoadCallback(() => {

                this.chartData = new google.visualization.DataTable();
                this.chartData.addColumn({'type':'string'})
                this.chartData.addColumn({'type':'number'})
                this.chartData.addColumn({'type':'number'})
                this.chartData.addColumn({'type':'string',role:'style'})
                this.chartData.addRow(['name',1,3,'red'])
                this.chartData.addRow(['test',2,4,'blue'])
                this.chartData.addRow(['ing',2,2,'green'])
                this.chartData.addRow(['kasi',3,1,'yellow'])
                this.chartData.addRow(['silko',5,9,'#abc'])
                this.createChart();
            });
            google.charts.setOnLoadCallback(drawChart2);
            function drawChart2() {
                var data = google.visualization.arrayToDataTable([
                    ['Task', 'Hours per Day',{role:'style'}],
                    ['Work',     11, 'red'],
                    ['Eat',      2,'green'],
                    ['Commute',  2,'blue'],
                    ['Watch TV', 2,'yellow'],
                    ['Sleep',    7,'black']
                ]);

                var options = {
                    title: 'My Daily Activities',
                    pieHole: 0.4,
                };

                var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
                chart.draw(data, options);
            }
        }
    }
</script>
