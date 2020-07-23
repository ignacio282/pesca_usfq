<template>
  <div class="menu">
    <video-background
      id="main"
      :src="require('@/assets/video/VideoPrueba.mp4')"
      style="height: 100%;"
      :poster="require('@/assets/img/Screen Shot 2020-07-01 at 10.09.09 AM.png')"
      :loop="false"
    >
      <b-container fluid id="menu">
        <NavBar></NavBar>
      </b-container>
    </video-background>
    <Foot></Foot>
  </div>
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
.menu {
  height: 100%;
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