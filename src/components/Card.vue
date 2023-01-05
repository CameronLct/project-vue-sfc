<template>
    <div class="parking">
        <button class="favoris">★☆</button>
        <p><b>{{title}}</b></p>
        <p>Place disponible</p>
        <p><b>{{ place_dispo }}</b></p>
        <p>Nombre de place</p>
        <p>{{ nb_place }}</p>
        <p>Distance</p>
        <p>{{ distance }} km</p>
    </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: String,
    place_dispo: Number,
    nb_place: Number,
    distance: Number
  }
}
</script>

<style scoped>
    .favoris {
        background: transparent;
        border: transparent;
        cursor: pointer;
        width: 15px;
        font-size: xx-large;
        color: yellow;
    }
    .parking {
        color: black;
        background-color: white;
        margin: 20px;
        display: flex;
        text-align: center;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
        min-width: 230px;
        border-radius: 10px;
        box-shadow: 0 -1px 4px 0 rgb(26 26 26 / 8%), 0 4px 8px 0 rgb(26 26 26 / 12%);
        transition-duration: 300ms;
    }
</style>