<template>
      <ion-list v-if="weather?.daily">
          <ion-list-header>
              Prévisions :
          </ion-list-header>

          <ion-item v-for="daily in weather.daily" :key="daily.dt">
              <ion-avatar>
                  <div class="weather-background">
                      <img :src="getWeatherImageUrl(daily.weather[0].icon, '2x')"/>
                  </div>
              </ion-avatar>

              <ion-label>
                  <h1>{{ formatTemperature(daily.temp.day, 'C') }}</h1>
                  <h2> {{ daily.weather[0].description }}</h2>
                  <p>{{ new Date(daily.dt * 1000).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) }}</p>
              </ion-label>
          </ion-item>
      </ion-list>     
</template>

<script>
import { IonList, IonListHeader, IonItem, IonAvatar, IonLabel } from '@ionic/vue';
import commonIonicComponent from '@/shared/common-ionic-component';
import { defineComponent, onMounted } from 'vue'
import { useWeather } from './weather.service'

export default defineComponent ({
    components: {
        IonList,
        IonListHeader,
        IonItem,
        IonAvatar,
        IonLabel,
        ...commonIonicComponent,
    },
    setup () {
        const { weather, getWeatherImageUrl, formatTemperature } = useWeather();


        return {
            weather,
            getWeatherImageUrl,
            formatTemperature,
        }
    }
})
</script>

<style scoped>

.weather-background{
    background-color: skyblue;
    border-radius: 100%;
    border: 2px solid white;
}

ion-avatar {
    margin-right: 14px;
}

</style>