<script setup>

    import {onMounted, ref, watch} from 'vue'
    import axios from 'axios'
    import Chart from 'chart.js/auto'

    const myChartRef = ref(null)
    const lat = ref('')
    const lon = ref('')
    const apiKEY = '996fa9f7cf03c2f6c3a790bc448cc60f'

    //WEATHER VARIABLES
    const weatherData = ref(null)
    const currentWeather = ref(null)
    const city = ref('')
    const humidity = ref('')
    const temperature = ref('')
    const wind = ref('')

    const currentTemp = ref([])
    const currentTime = ref([])
    let myChart
    


        onMounted(() => {
            const ctx = myChartRef.value.getContext('2d')
            myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: null,
                    datasets: [{
                        label: 'Weather Dataset',
                        data: null,
                        borderWidth: 1,
                        tension: 0.4,
                        fill: true,
                        
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Temperature',
                            align: 'start'
                        }
                    },
                    scales: {
                        y: {
                            suggestedMin: 0,
                            suggestedMax: 100
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index'
                    },
                }
            })
        })

    navigator.geolocation.getCurrentPosition((pos) => {
        const crd = pos.coords;

        lat.value = crd.latitude
        lon.value = crd.longitude

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat.value}&lon=${lon.value}&appid=${apiKEY}`)
        .then(response => {
            
            const data = response.data
            console.log(data)
            weatherData.value = data
            city.value = data.city.name
            humidity.value = data.list[0].main.humidity
            temperature.value = (data.list[0].main.temp - 273.15) * (9 / 5) + 32
            wind.value = data.list[0].wind.speed * 2.23694
            for(let i = 1; i < 9; i++) {
                currentTemp.value.push(Math.floor((weatherData.value.list[i].main.temp - 273.15) * (9 / 5) + 32))
                currentTime.value.push(formatTime(weatherData.value.list[i].dt_txt))
            }
            myChart.data.datasets[0].data = currentTemp.value
            myChart.data.labels = currentTime.value
            myChart.options.scales.y.suggestedMin = (Math.min(...currentTemp.value) - 0.5)
            myChart.options.scales.y.suggestedMax = (Math.max(...currentTemp.value) + 0.5)
            myChart.update()
        })
        .catch(err => {
            console.log(err)
        })
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat.value}&lon=${lon.value}&appid=${apiKEY}`)
        .then(response => {
            currentWeather.value = response.data
        })
        .catch(err => {
            console.log(err)
        }) 


    }, error => {
        console.log(error)
    })

    function formatTime(dt_txt) {
        const date = new Date(dt_txt);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
        const formattedMinutes = minutes.toString().padStart(2, '0'); // Add leading zero if necessary

        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }

</script>

<template>
    <v-container>
        
        <v-container>
            <v-row>
                <v-col cols="6">
                    <h5>CITY : {{city}}</h5>
        <h5>HUMIDITY : {{humidity}}</h5>
        <h5>WIND : {{wind}}</h5>
        <h5>temperature : {{temperature}}</h5>
        <h5>{{ currentWeather }}</h5>
        <h3>TEMP FOR TODAY: {{ currentTemp }}</h3>
        <h3>TEMP FOR TODAY: {{ currentTime }}</h3>
        <v-btn color="green" @click="weather()">
            Go
        </v-btn>
                </v-col>
                <v-col cols="6">
                    <canvas ref="myChartRef"></canvas>
                </v-col>
            </v-row>
        </v-container>

        


    </v-container>
</template>