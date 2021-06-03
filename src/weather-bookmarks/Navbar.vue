<template>
    <!-- Navbar -->
    <ion-header>
        <ion-toolbar>
            <ion-buttons slot="secondary">
                <ion-button href="/Bookmarks">
                    <ion-icon slot="icon-only" :icon="starOutline"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-buttons slot="primary">
                <ion-button color="secondary" href="/Search">
                    <ion-icon slot="icon-only" :icon="add">
                    </ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script lang="ts">
    import {
        IonHeader,
        IonToolbar,
        IonButtons,
        IonButton,
        IonIcon,
        IonTitle
    } from '@ionic/vue'

    import {
        starOutline,
        add
    } from 'ionicons/icons'

    import { defineComponent } from 'vue';

    export default defineComponent({
        name: "Navbar",
        components :{
            IonHeader,
            IonToolbar,
            IonButtons,
            IonButton,
            IonIcon,
            IonTitle
        },
        props:{
            title : String
        },
        setup(){
            return {
                starOutline,
                add
            }
        }
    })

</script>

<style scoped>

</style>