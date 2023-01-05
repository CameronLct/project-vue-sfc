<template>
  <div class="home">
    
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'HomeView',
  methods: {
    ...mapActions("commonStore", ["setParkings"]),
  },
  async mounted() {
    let parkings = await this.setParkings()
  }
}
</script>

