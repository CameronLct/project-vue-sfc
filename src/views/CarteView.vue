<template>
    <div style="height:600px; width:800px">
      <l-map ref="map" v-model:zoom="zoom" :center="[47.218371, -1.553621]" :minZoom="3" :maxZoom="18" :zoomAnimation="true">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            name="OpenStreetMap"
        ></l-tile-layer>
        <l-marker v-for="marker in markers" :lat-lng="marker.latLng" :name="marker.name" draggable> </l-marker>
        <l-marker :lat-lng="userLocation" > </l-marker>
      </l-map>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import {mapGetters} from "vuex";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  methods: {
    ...mapGetters("commonStore", ["getParkings"]),
    getCoordinate(){
      this.markers = this.parkings.map(parking => {
        return {
          nom: parking.fields.grp_nom,
          latLng: parking.fields.location[0] + parking.fields.location[1]
        }
      })
    },
    async getUserPosition() {
      // check if API is supported
      if (navigator.geolocation) {
        // get  geolocation
        navigator.geolocation.getCurrentPosition(pos => {
          // set user location
          this.userLocation = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude
          };
        });
      }
    }
  },
  data() {
    return {
      userLocation: {},
      zoom: 12,
      markers: [],
      parkings: []
    };
  },
  mounted() {
    this.getUserPosition();
    this.parkings = this.getParkings()
    console.log(this.parkings)
    this.markers = this.getCoordinate()
  }
};
</script>
