<template>
  <div>
      <current-weather></current-weather>
      <forecast></forecast>
  </div>
  <div>
        <IonTabs>
          <IonTabBar>
            <IonTabButton tab="schedule" href="/search">
              <IonIcon icon='../../assets/search-outline.svg' />
              <IonLabel>Recherche</IonLabel>
            </IonTabButton>

            <IonTabButton tab="speakers" href="/weather">
              <IonIcon icon='../../assets/map-outline.svg' />
              <IonLabel>Ma Position</IonLabel>
            </IonTabButton>

            <IonTabButton tab="map" href="/bookmarks">
              <IonIcon icon='../../assets/star-outline.svg' />
              <IonLabel>Favoris</IonLabel>
            </IonTabButton>

          </IonTabBar>
        </IonTabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, } from '@ionic/vue';
import CurrentWeather from './current-weather.vue';
import Forecast from './forecast.vue';

export default defineComponent({
    name:'weather',
    components: {
        CurrentWeather,
        Forecast,
        IonTabs, 
        IonTabBar, 
        IonTabButton,
        IonIcon, 
        IonLabel,
    },
    setup () {
    
        return {}
    }
})
</script>

<style scoped>

</style>