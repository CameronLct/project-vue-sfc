<template>
    <div style="height:600px; width:800px; margin: auto">
      <l-map ref="map" v-model:zoom="zoom" :center="[47.218371,-1.553621]" :minZoom="3" :maxZoom="18" :zoomAnimation="true">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            name="OpenStreetMap"
        ></l-tile-layer>
<!--        <l-marker v-for="marker in markers" :lat-lng="marker.latLng" :name="marker.name" > </l-marker>-->
        <l-marker v-if="markers[0]" :lat-lng="markers[0].latLng" :name="markers[0].name" > </l-marker>
        <l-marker v-if="markers[1]" :lat-lng="markers[1].latLng" :name="markers[1].name" > </l-marker>
        <l-marker v-if="markers[2]" :lat-lng="markers[2].latLng" :name="markers[2].name" > </l-marker>
        <l-marker v-if="markers[3]" :lat-lng="markers[3].latLng" :name="markers[3].name" > </l-marker>
        <l-marker v-if="markers[4]" :lat-lng="markers[4].latLng" :name="markers[4].name" > </l-marker>
        <l-marker v-if="markers[5]" :lat-lng="markers[5].latLng" :name="markers[5].name" > </l-marker>
        <l-marker v-if="markers[6]" :lat-lng="markers[6].latLng" :name="markers[6].name" > </l-marker>
        <l-marker v-if="markers[7]" :lat-lng="markers[7].latLng" :name="markers[7].name" > </l-marker>
        <l-marker v-if="markers[8]" :lat-lng="markers[8].latLng" :name="markers[8].name" > </l-marker>
        <l-marker v-if="markers[9]" :lat-lng="markers[9].latLng" :name="markers[9].name" > </l-marker>
        <l-marker v-if="markers[10]" :lat-lng="markers[10].latLng" :name="markers[10].name" > </l-marker>
        <l-marker v-if="markers[11]" :lat-lng="markers[11].latLng" :name="markers[11].name" > </l-marker>
        <l-marker v-if="markers[12]" :lat-lng="markers[12].latLng" :name="markers[12].name" > </l-marker>
        <l-marker v-if="markers[13]" :lat-lng="markers[13].latLng" :name="markers[13].name" > </l-marker>
        <l-marker v-if="markers[14]" :lat-lng="markers[14].latLng" :name="markers[14].name" > </l-marker>
        <l-marker v-if="markers[15]" :lat-lng="markers[15].latLng" :name="markers[15].name" > </l-marker>
        <l-marker v-if="markers[16]" :lat-lng="markers[16].latLng" :name="markers[16].name" > </l-marker>
        <l-marker v-if="markers[17]" :lat-lng="markers[17].latLng" :name="markers[17].name" > </l-marker>
        <l-marker v-if="markers[18]" :lat-lng="markers[18].latLng" :name="markers[18].name" > </l-marker>
        <l-marker v-if="markers[19]" :lat-lng="markers[19].latLng" :name="markers[19].name" > </l-marker>
        <l-marker v-if="markers[20]" :lat-lng="markers[20].latLng" :name="markers[20].name" > </l-marker>
      </l-map>
    </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import {mapActions} from "vuex";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  methods: {
    ...mapActions("commonStore", ["setParkings"]),
    async getCoordinate(){
      this.markers = this.parkings.map(parking => {
        return {
          nom: parking["fields"]["grp_nom"],
          latLng: [parking["fields"]["location"][0],  parking["fields"]["location"][1]]
        }
      })
    },
  },
  data() {
    return {
      userLocation: {},
      zoom: 12,
      markers: [],
      parkings: []
    };
  },
  async mounted() {
    this.parkings = await this.setParkings()
    this.markers = await this.getCoordinate()
  }
};
</script>
