<template>
  <div class="home">
    <div class="card-parkings">
      <h2>Liste des parkings</h2>
      <div class="filter">
        <input class="search" type="text" placeholder="Nom du parking" v-model="searchString">
        <div class="available">
          <p>Filtré par parking disponible</p>
          <input type="checkbox" v-model="available">
        </div>
        <div class="available">
          <p>Filtré par distance du parking (km)</p>
          <input max="30" min="1" class="distance-input" type="number" v-model="distance">
        </div>
      </div>
      <div class="list-parkings">
        <Card v-for="parking in filteredParkings" :title="parking.fields.grp_nom"
          :place_dispo="parking.fields.disponibilite" :nb_place="parking.fields.grp_exploitation" :distance="parking.distance" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Card from "../components/Card.vue";

export default {
  name: 'HomeView',
  data() {
    return {
      parkings: [],
      searchString: "",
      available: false,
      position: {
        "longitude": -1.5291629,
        "latitude": 47.213649
      },
      distance: 20
    }
  },
  components: {
    Card,
  },
  computed: {
    filteredParkings: function () {
      let parkings_array = this.parkings;
      let searchString = this.searchString;
      let distance = this.distance;
      const available = this.available;

      if (!parkings_array) return [];

      searchString = searchString.trim().toLowerCase();

      if (available) parkings_array = parkings_array.filter(item => item.fields.grp_disponible !== 0);
      if (searchString) parkings_array = parkings_array.filter(item => item.fields.grp_nom.toLowerCase().indexOf(searchString) !== -1);
      if (distance) parkings_array = parkings_array.filter(item => item.distance < distance);
      return parkings_array;
    }
  },
  methods: {
    ...mapActions("commonStore", ["setParkings"]),
  },
  async mounted() {
    this.parkings = await this.setParkings();
  }
}
</script>
<style>
.list-parkings {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
}

.card-parkings {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0 -1px 4px 0 rgb(26 26 26 / 20%), 0 4px 8px 0 rgb(26 26 26 / 12%);
  background-color: #dbfee3;
  max-width: 80vw;
  margin: 40px auto;
  width: 80vw;
  padding-bottom: 50px;
}

.filter {
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-around;
}

.available {
  margin: 0 20px;
  display: flex;
  align-items: center
}

.search {
  font-size: 18px;
  font-family: 'Red Hat Display', sans-serif;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
}

.distance-input {
  font-size: 16px;
  font-family: 'Red Hat Display', sans-serif;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  width: 35px;
  margin-left: 10px;
}
</style>
