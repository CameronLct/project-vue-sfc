<template>
  <div class="parking">
    <button id="favorite" class="favorite" @click="removeFavorite()" v-if="favorite">★</button>
    <button id="no-favorite" class="favorite" @click="addFavorite()" v-else>☆</button>
    <p><b>{{ title }}</b></p>
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
    favorite: Boolean,
    title: String,
    place_dispo: Number,
    nb_place: Number,
    distance: Number
  },
  methods: {
    removeFavorite() {
      // let parkings = JSON.parse(localStorage.getItem('parkings'))
      // let parkingIndex = parkings.findIndex(parking => parking.fields.grp_nom = this.title)
      // parkings = parkings.splice(parkingIndex, 1)
      // localStorage.setItem('parkings', JSON.stringify(parkings))
      this.$emit("removeFavorite")
    },

    addFavorite() {
      // let parkings = JSON.parse(localStorage.getItem('parkings'))
      // parkings.push(this.title)
      // localStorage.setItem('parkings', JSON.stringify(parkings))
      this.$emit("addFavorite")
    }
  },
}

</script>

<style scoped>
.favorite {
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