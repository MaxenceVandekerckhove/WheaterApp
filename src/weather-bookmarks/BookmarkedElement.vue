<template>
    <ion-card>
        <ion-card-content>
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <p>{{ city }}</p>
                    </ion-col>
                    <ion-col>
                        <p>{{ tempMorning }}</p>
                        <p>{{ tempAfternoon }}</p>
                    </ion-col>
                    <ion-col>
                        <ion-button color="danger" @click="deleteBookmark">
                            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                        </ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-card-content>
    </ion-card>
</template>

<script>
    import {
        IonCard,
        IonCardContent,
        IonButton,
        IonCol,
        IonRow,
        IonGrid
    } from '@ionic/vue'

    import { trash } from 'ionicons/icons'
    import { defineComponent } from 'vue';
    import firebase from "firebase/app";
    import "firebase/firestore";
    import { DATABASE_CONFIGURATION } from "@/config.js";

    if (firebase.apps.length === 0) {
            firebase.initializeApp(DATABASE_CONFIGURATION);
        }

        export const db = firebase.firestore();

    export default defineComponent ({
        name: "BookmarkedElement",
        components : {
            IonCard,
            IonCardContent,
            IonButton,
            IonCol,
            IonRow,
            IonGrid
        },
        setup() {
            return { trash }
        },
        methods:{
            deleteBookmark(){
                // const deleteCity = db.collection('cities').where('name','==',this.city);
                // console.log(this.city)
                // deleteCity.get().then(function(querySnapshot) {
                //     querySnapshot.forEach(function(doc) {
                //         doc.ref.delete();
                //     });
                // });
                // location.reload();
            }
        },
        props:{
            city : String,
            tempMorning : String,
            tempAfternoon : String
        }
    })
</script>

<style scoped>

</style>