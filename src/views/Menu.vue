<template>
  <video-background id="main" :src="require('@/assets/video/water_1.mp4')" style="height: 100%;" :poster="require('@/assets/img/logo_usfq.png')">
    <b-container fluid id="menu">
      <b-row id="botones" align-h="center" align-v="start">
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/secundaria">Educación <br> Ambiental</router-link>
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
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/menu">Videojuego</router-link>
        </b-col>
      </b-row>
      <Foot/>
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
  padding-top: 200px;
  padding-left: 0;
  padding-right: 0;
  
}

#botones {
  min-height: 86%;
  font-size: 125%;
  line-height: 90%;
}

#botones a{
  color: black;
}

#botones a:hover{
  color: #496f96;
  text-decoration-line: underline;
}

#footer{
 background: transparent;
}
</style>