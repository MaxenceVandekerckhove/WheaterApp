<template>
  <ion-page>
    <ion-header :translucent="true">
    </ion-header>
    
    <ion-content :fullscreen="true">

        <ion-title id="TitleFavorite">Liste des favoris</ion-title>

        <div id='BarreUnderTitle'></div>
        
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

        <ion-list>
          <ion-item>
            <ion-label>Paris</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Londres</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Berlin</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Bruxelle</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Luxembourg</ion-label>
          </ion-item>
          <ion-item>
            <ion-label>Barcelone</ion-label>
          </ion-item>
        </ion-list>

        
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonTitle, } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'favoris',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTabs, 
    IonTabBar, 
    IonTabButton,
    IonIcon, 
    IonLabel,
    IonTitle,
  }
});
</script>

<style scoped>

#TitleFavorite {
    font-size: 6vw;
    height: 14vw;
    width: 80vw;
    padding-left: 5%;
    padding-top: 10%;
    color : #1b1b1b;
}

#BarreUnderTitle {
  height: 0.2vw;
  width: 80vw;
  background-color: #B7B7B7;
  margin-top: 5vw;
  margin-left: 5vw;
  margin-bottom: 8vw;
}


</style>