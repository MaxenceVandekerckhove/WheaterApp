<template>
    <ion-page>
        <Navbar :title="'bookmarks'">
        </Navbar>

        <ion-content v-if="cities.length>0">
            <BookmarkedElement v-for="(city,index) in cities" :key="index" :city="city.name" :tempAfternoon="city.currentWeather.list[0].main.temp">
            </BookmarkedElement>
        </ion-content>

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
    </ion-page>
</template>
 
<script>
import { IonPage, IonContent, } from "@ionic/vue";
import firebase from "firebase/app";
import "firebase/firestore";
import { DATABASE_CONFIGURATION } from "@/config.js";
import Navbar from "./Navbar";
import BookmarkedElement from "../weather-bookmarks/BookmarkedElement";
import { defineComponent } from "vue";
import weatherService from "../weather-recherche/weatherCity";
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, } from '@ionic/vue';

if (firebase.apps.length === 0) {
        firebase.initializeApp(DATABASE_CONFIGURATION);
    }

    export const db = firebase.firestore();

export default defineComponent({
    name: "Bookmarks",
    components: {
    IonPage,
    IonContent,
    Navbar,
    BookmarkedElement,
    IonTabs, 
    IonTabBar, 
    IonTabButton,
    IonIcon, 
    IonLabel,
    },
    data() {
        return {
            cities: [],
        };
    },
 
   async mounted() {
    db.collection("cities")
    .get()
    .then(async (querySnapshot) => {
    const documents = querySnapshot.docs.map((doc) => doc.data());
 
    documents.forEach(async (city) => {
        this.cities.push({
            name: city.name,
            currentWeather: await weatherService.getCityName(city.name),
            });
        });
    });
},
});
</script>
 
<style scoped>
</style>
