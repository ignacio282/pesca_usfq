<template>
  <video-background
    id="main"
    :src="require('@/assets/video/VideoPrueba.mp4')"
    style="height: 100%;"
    :poster="require('@/assets/img/Screen Shot 2020-07-01 at 10.09.09 AM.png')"
  >
    <b-container fluid id="menu">
      <b-row id="botones" align-h="center" align-v="start">
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/secundaria">
            EDUCACIÓN
            <br />AMBIENTAL
          </router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/secundaria">
            REDES
            <br />FANTASMA
          </router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/secundaria">PLÁSTICOS</router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/secundaria">RECICLAJE</router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/secundaria">PESCA</router-link>
        </b-col>
        <b-col cols="12" sm="6" md="4" lg="2">
          <router-link to="/media">MEDIA</router-link>
        </b-col>
        <b-col id="videojuego" cols="12" sm="6" md="4" lg="2">
          <router-link to="/menu">
            <svg viewBox="0 0 100 20">
              <defs>
                <linearGradient id="gradient">
                  <stop stop-color="white" />
                </linearGradient>
                <pattern
                  id="wave"
                  x="0"
                  y="0.5"
                  width="100%"
                  height="100%"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    id="wavePath"
                    d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
                    mask="url(#mask)"
                    fill="url(#gradient)"
                  >
                    <animateTransform
                      attributeName="transform"
                      begin="0s"
                      dur="1.5s"
                      type="translate"
                      from="0,0"
                      to="40,0"
                      repeatCount="indefinite"
                    />
                  </path>
                </pattern>
              </defs>
              <text
                text-anchor="middle"
                x="50"
                y="15"
                font-size="10"
                fill="#133041"
                fill-opacity="0.1"
              >VIDEOJUEGO</text>
              <text
                text-anchor="middle"
                x="50"
                y="15"
                font-size="10"
                fill="url(#wave)"
                fill-opacity="1"
              >VIDEOJUEGO</text>
            </svg>
          </router-link>
        </b-col>
      </b-row>
      <Foot />
    </b-container>
  </video-background>
</template>

<script>
import Foot from "@/components/Footer.vue";
export default {
  name: "Menu",
  components: {
    Foot
  },
  mounted: function() {
    this.menuAppear();
  },
  methods: {
    menuAppear: function() {
      setTimeout(function() {
        document.getElementById("menu").style.visibility = "visible";
        document.getElementById("menu").style.opacity = 1;
      }, 3500);
    }
  }
};
</script>

<style lang="scss" scoped>
#menu {
  height: 100%;
  padding-top: 100px;
  padding-left: 0;
  padding-right: 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 1s ease;
}

#botones {
  min-height: 86%;
  font-size: 125%;
  line-height: 90%;
}

#botones a {
  color: white;
}

#botones a:hover {
  color: #496f96;
  text-decoration-line: underline;
}

#videojuego {
  padding-bottom: 250px;
}

#footer {
  background: transparent;
  color: #020d14;
}

::v-deep #footer a {
  color: #020d14 !important;
}
</style>