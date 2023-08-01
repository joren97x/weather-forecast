<script setup>

    import {onMounted, ref, watch} from 'vue'
    import axios from 'axios'
    import Chart from 'chart.js/auto'

    const myChartRef = ref(null)
    const apiKEY = '996fa9f7cf03c2f6c3a790bc448cc60f'
    const lat = ref('')
    const lon = ref('')
    const loading = ref(false)

    //WEATHER VARIABLES
    const weatherData = ref(null)
    const currentWeather = ref(null)
    const city = ref('Cebu City')
    const humidity = ref('')
    const wind = ref('')
    const currentTemp = ref([])
    const currentTime = ref([])
    const currentDesc = ref('')
    const currentIcon = ref('')
    let myChart
    const currentDate = ref('')
    const weatherDataByDay  = ref([])
    const card = ref(0)

    const cityRules = [
        value => {
            if(value) return true
            return `Must contain at least 1 character`
        }
    ]

        onMounted(() => {

            currentDate.value = formatCurrentDate(new Date())

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
                            text: 'Weather Forecast',
                            fontSize: 25
                        }
                    },
                    scales: {
                        y: {
                            suggestedMin: 0,
                            suggestedMax: 100,
                        },
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
        getWeatherData()

    }, error => {
        console.log(error)
    })

    function getWeatherData() {

        loading.value = true
        
        weatherData.value = null
        currentWeather.value = null
        humidity.value = ''
        wind.value = ''
        currentTemp.value = []
        currentTime.value = []
        weatherDataByDay.value  = []
        
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat.value}&lon=${lon.value}&appid=${apiKEY}`)
        .then(response => {

            loading.value = false
            const forecasts = response.data.list;

            // Group forecasts by date (assuming the list is ordered by time)
            const groupedForecasts = forecasts.reduce((acc, forecast) => {
            // Get the date of the forecast entry (ignore the time part)
            const date = forecast.dt_txt.split(' ')[0];

            // Create an object for each date if it doesn't exist in the accumulator
            if (!acc[date]) {
                acc[date] = [];
            }

            // Add the forecast entry to the corresponding date's array
            acc[date].push(forecast);

            return acc;
            }, {});

            Object.keys(groupedForecasts).forEach((date) => {

                const dateStr = date
                const dateObj = new Date(dateStr)

                const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const weekday = weekdays[dateObj.getDay()]

                weatherDataByDay.value.push({
                    weekday,
                    forecasts: groupedForecasts[date],
                })
            })
            
            const data = response.data
            weatherData.value = data
            humidity.value = data.list[0].main.humidity
            wind.value = Math.floor(data.list[0].wind.speed * 2.23694)
            currentIcon.value = data.list[0].weather[0].icon

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
            console.log('he was here')
            currentWeather.value = response.data
            currentDesc.value = currentWeather.value.weather[0].description
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    function formatTime(dt_txt) {
        const date = new Date(dt_txt);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12; // Convert to 12-hour format
        const formattedMinutes = minutes.toString().padStart(2, '0'); // Add leading zero if necessary

        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }

    function formatCurrentDate(param_date) {
        const date = new Date(param_date);
        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        };

        const formatter = new Intl.DateTimeFormat('en-US', options);
        return formatter.format(date);
    }

    function getWeatherIconMap(iconCode) {
        const weatherIconMap = {
            '01d': 'https://img.icons8.com/fluency/96/sun.png', // Example for clear day
            '01n': 'https://img.icons8.com/fluency/96/full-moon.png', // Example for clear night
            '02d': 'https://img.icons8.com/fluency/96/partly-cloudy-day.png', // Example for few clouds day
            '02n': 'https://img.icons8.com/fluency/96/partly-cloudy-day.png', // Example for few clouds night
            // Add more mappings for different weather conditions as needed
            '03d': 'https://img.icons8.com/external-others-agus-raharjo/64/external-clouds-nature-others-agus-raharjo.png', // Example for scattered clouds day
            '03n': 'https://img.icons8.com/external-others-agus-raharjo/64/external-clouds-nature-others-agus-raharjo.png', // Example for scattered clouds night
            '04d': 'https://img.icons8.com/external-flat-satawat-anukul/64/external-spring-spring-flat-set-flat-satawat-anukul-63.png', // Example for broken clouds day
            '04n': 'https://img.icons8.com/external-flat-satawat-anukul/64/external-spring-spring-flat-set-flat-satawat-anukul-63.png', // Example for broken clouds night
            '10d': 'https://img.icons8.com/fluency/96/partly-cloudy-rain.png',
            '10n': 'https://img.icons8.com/fluency/96/rainy-night.png'
        }
        return weatherIconMap[iconCode] || 'close'
    } 

    function changeChartData(weather) {
        currentTemp.value = []
        currentTime.value = []
            for(let i = 0; i < weather.forecasts.length; i++) {
                currentTemp.value.push(Math.floor((weather.forecasts[i].main.temp - 273.15) * (9 / 5) + 32))
                currentTime.value.push(formatTime(weather.forecasts[i].dt_txt))
            }
            currentDate.value = formatCurrentDate(weather.forecasts[0].dt_txt)
            currentDesc.value = weather.forecasts[0].weather[0].description
            humidity.value = weather.forecasts[0].main.humidity
            currentIcon.value = weather.forecasts[0].weather[0].icon
            wind.value = Math.floor(weather.forecasts[0].wind.speed * 2.23694)
            myChart.data.datasets[0].data = currentTemp.value
            myChart.data.labels = currentTime.value
            myChart.options.scales.y.suggestedMin = (Math.min(...currentTemp.value) - 0.5)
            myChart.options.scales.y.suggestedMax = (Math.max(...currentTemp.value) + 0.5)
            myChart.update()
    }

    function getCoordinates() {
        axios.get(`https://nominatim.openstreetmap.org/search?q=${city.value}&format=json&limit=1`)
        .then(response => {
            lat.value = response.data[0].lat
            lon.value = response.data[0].lon
            city.value = response.data[0].display_name
            getWeatherData()
        })
        .catch(err => {
            console.log(err)
        }) 
    }


</script>

<template>
    <v-container>
        <v-container>
            <v-row>
                    
                <v-col  xs="12" sm="12" cols="12" md="4" lg="4" xl="4" class="text-center">
                    <v-text-field label="Your city" v-model="city" :rules="cityRules" @keydown.enter="getCoordinates()" >
                    
                        <template v-slot:append-inner>
                            <v-fade-transition>
                                <v-btn icon="mdi:mdi-map-search" v-show="city" size="small" @click="getCoordinates()">

                                </v-btn>
                            </v-fade-transition>
                        </template>

                    </v-text-field>
                    <v-container v-if="loading">
                        <v-progress-circular
                        :width="3"
                        color="red"
                        indeterminate
                        ></v-progress-circular>
                    </v-container>
                    <v-container v-else>
                        <h3>{{ currentDate }}</h3>
                        <v-row>
                        <v-img :src="currentWeather ? getWeatherIconMap(currentIcon) : ''" height="100" width="100" class="my-2">  </v-img>

                        </v-row>
                    <!-- <h2 class="my-3 text-h3"> <v-icon :icon="currentWeather ? getWeatherIconMap(currentIcon) : ''" /> <p class="text-h4">{{ currentTemp[0] + '°F' }}</p> </h2> -->
                    <h3 class="text-capitalize">{{ currentDesc }}</h3>
                    <v-row class="mt-3">
                        <v-col>
                            <h5>Wind Speed   </h5>
                            {{wind + ' km/j'}}
                        </v-col>
                        <v-col>
                            <h5>Humidity</h5>
                            {{humidity+ '%'}}
                        </v-col>
                    </v-row>
                    </v-container>
                    
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                    <canvas ref="myChartRef"></canvas>
                    <v-row class="mt-3">
                        
                                <v-col md="2" lg="2" xl="2" sm="2" xs="4" v-for="(weather, i) in weatherDataByDay" :key="i" @click="changeChartData(weather)" >
                                    <v-hover>
                                            <v-card class="justify-center text-center" id="card" :color="card == i ? 'blue' : ''" @click="card = i">
                                                <h4 class="mt-3">{{ weather.weekday }}</h4>
                                                <!-- <h2> <v-icon :icon="getWeatherIconMap(weather.forecasts[0].weather[0].icon)"/> </h2> -->
                                                <v-row>
                                                    <v-img :src="currentWeather ? getWeatherIconMap(weather.forecasts[0].weather[0].icon) : ''" height="50" width="50" class="my-2" >  </v-img>
                                                </v-row>
                                                <p class="my-3">{{ Math.floor((weather.forecasts[0].main.temp - 273.15) * (9 / 5) + 32) + '°F' }}</p>
                                            </v-card>
                                    </v-hover>
                                </v-col>
                          
                    </v-row>
                </v-col>
            </v-row>
        </v-container>

    </v-container>
</template>

<style scoped>

    #card:hover {
        cursor: pointer;
    }

</style>