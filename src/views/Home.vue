<template>
  <ion-page>
    <ion-header :translucent="true">
    </ion-header>
    
    <ion-content :fullscreen="true">
        
        <ion-searchbar></ion-searchbar>

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

        
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonSearchbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonSearchbar,
    IonTabs, 
    IonTabBar, 
    IonTabButton,
    IonIcon, 
    IonLabel,
  }
});
</script>

<style scoped>

</style>