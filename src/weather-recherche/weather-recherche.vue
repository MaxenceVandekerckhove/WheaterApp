<template>
    <ion-header>
        <ion-searchbar @ionChange=onChange></ion-searchbar>
        <ion-button @click="addCity">Ajouter</ion-button>
    </ion-header>
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
</template>

<script>
import {defineComponent} from "vue";
import {IonSearchbar, IonButton, toastController } from '@ionic/vue';
import { IonHeader, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, } from '@ionic/vue';
import weatherService from './weatherCity';

import firebase from 'firebase/app'
import 'firebase/firestore'
import { DATABASE_CONFIGURATION } from '../config.js';

export const db = firebase.initializeApp(DATABASE_CONFIGURATION).firestore()

export default defineComponent ({
    name: "Search",
    data() {
        return {
            city: '',
            currentWeather: { cod : null }
        }
    },
    components:{
        IonSearchbar,
        IonButton,
        IonHeader,
        IonTabs, 
        IonTabBar, 
        IonTabButton,
        IonIcon, 
        IonLabel,
    },

    methods: {
        onChange(e){
            this.city = e.detail.value;
        },
        async addCity() {
            this.currentWeather = await weatherService.getCityName(this.city);
            const msg = await this.currentWeather.cod === '200' ? 'Votre saisie a bien été enregistrée' : 'erreur rencontrée';
            db.collection('cities').add({
                name: this.city
            })
            .then(() => {
                console.log("Ville envoyée !");
                console.log(this.city);
                });
            this.PrintToast(msg);
        },
        async PrintToast(msg) {
            const toast = await toastController
                .create({
                    message: msg,
                    duration: 2000
                })
                return toast.present();
        }
    }
})

</script>