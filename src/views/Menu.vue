<template>
  <video-background id="main" src="@/assets/video/timelapse.mp4" style="height: 100%;" poster="@/assets/img/logo.png">
    <b-container fluid id="menu">
      <b-row id="botones" align-h="center" align-v="start">
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/secundaria">Educación <br/> Ambiental</router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/secundaria">Redes <br> Fantasma</router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/secundaria">Plásticos</router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/secundaria">Reciclaje</router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/secundaria">Pesca</router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/media">Media</router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">Videojuego</b-col>
      </b-row>
      <Footer></Footer>
    </b-container>
  </video-background>
</template>

<script>
import Foot from "@/components/Footer.vue";
export default {
  name: "Menu",
  components: {
      Foot
  }
};
</script>

<style lang="scss" scoped>
#menu{
  height: 100%;
  padding-top: 100px;
}

#botones {
  min-height: 90%;
  font-size: 125%;
  line-height: 90%;
}

#main .video-wrapper{
    display: flex!important;
}
</style>