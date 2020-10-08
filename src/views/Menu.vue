<template>
  <div class="menu">
    <video-background
      v-show="!loop"
      :key="videoKey"
      id="main"
      :src="sourceVideo"
      style="height: 100%;"
      :poster="
        require('@/assets/img/Screen Shot 2020-07-01 at 10.09.09 AM.png')
      "
      :loop="false"
      ref="videobackground"
    >
      <b-button id="skip" squared @click="stopVideo"> SKIP </b-button>
      <b-container fluid id="menu">
        <NavBar></NavBar>
      </b-container>
    </video-background>
    <video-background
      v-show="loop"
      :key="loopKey"
      id="mainL"
      :src="sourceLoop"
      style="height: 100%;"
      :poster="
        require('@/assets/img/Screen Shot 2020-07-01 at 10.09.09 AM.png')
      "
      :loop="true"
      ref="videobackground"
    >
      <b-container fluid id="menuL">
        <NavBar></NavBar>
      </b-container>
    </video-background>
    <Foot></Foot>
  </div>
</template>

<script>
import Foot from "@/components/Footer.vue";
import videoLimpio from "@/assets/video/Principal09_limpia.mp4";
import videoSucio from "@/assets/video/Principal09_sucia.mp4";
import loopLimpio from "@/assets/video/LoopLimpio.mp4";
import loopSucio from "@/assets/video/Loop_Sucio.mp4";
export default {
  name: "Menu",
  components: {
    Foot
  },
  data: function() {
    return {
      sucio: Boolean,
      loop: false,
      sourceVideo: String,
      sourceLoop: String,
      videoKey: 0,
      loopKey: 1
    };
  },
  created: function() {
    if (this.$route.params.sucio === "limpio") {
      this.sucio = false;
      this.sourceVideo = videoLimpio;
      this.sourceLoop = loopLimpio;
    }
    if (this.$route.params.sucio === "sucio") {
      this.sucio = true;
      this.sourceVideo = videoSucio;
      this.sourceLoop = loopSucio;
    }
  },
  mounted: function() {
    this.menuAppear(18000);
  },
  methods: {
    menuAppear: function(time) {
      setTimeout(() => {
        document.getElementById("menu").style.visibility = "visible";
        document.getElementById("menu").style.opacity = 1;
        document.getElementById("skip").style.display = "none";
        this.toggleLoop(7800);
      }, time);
    },
    stopVideo: function() {
      document.getElementById("main").children[1].children[0].currentTime = 17;
      this.menuAppear(1000);
    },
    toggleLoop: function(time){
      setTimeout(()=>{
        document.getElementById("menuL").style.visibility = "visible";
        document.getElementById("menuL").style.opacity = 1;
        document.getElementById("mainL").children[1].children[0].currentTime = 0;
        this.loop = true;
      }, time);
    }
  }
};
</script>

<style lang="scss" scoped>
div.overlay {
  opacity: 0.9;
  background-color: black;
  position: absolute;
  left: 0;
  top: 0;
  height: 256px;
  width: 256px;
}
.menu {
  height: 100%;
}

::-webkit-scrollbar {
  display: none;
}

#skip {
  background-color: white;
  color: #496f96;
  float: right;
  margin-top: 2%;
  margin-right: 2%;
}

#menu {
  height: 100%;
  padding-top: 100px;
  padding-left: 0;
  padding-right: 0;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 1s ease;
}
.contenedor {
  height: 100vh;
  padding-top: 6%;
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

::v-deep .navbar {
  font-weight: 300;
}
::v-deep .colorWhite {
  color: white;
}
::v-deep .nav-link {
  color: rgba($color: white, $alpha: 1) !important;
}
</style>