<template>
  <div class="menu">
    <video-background
      id="main"
      :src="require('@/assets/video/Principal09_limpia.mp4')"
      style="height: 100%;"
      :poster="require('@/assets/img/Screen Shot 2020-07-01 at 10.09.09 AM.png')"
      :loop="false"
    >
      <b-container fluid id="menu">
        <NavBar></NavBar>
        <kinesis-container class="contenedor">
        <kinesis-element style="margin-left:-800px; margin-top:-100px"  type="translate" :strength="20">
          <img
            src="@/assets//basura/Bottle1basura.png"
            width="5%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:-400px"  type="depth" :strength="20">
          <img
            src="@/assets//basura/QFcbasura.png"
            width="4%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:-1000px; margin-top:-70px"  type="depth_inv" :strength="20">
          <img
            src="@/assets//basura/Dorobasura.png"
            width="4%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:800px; margin-top:-200px "   type="depth" :strength="20">
          <img
            src="@/assets//basura/Fundabasura.png"
            width="15%"
            alt="basura1"
          />
        </kinesis-element>

        <kinesis-element style="margin-left:300px"  type="depth_inv" :strength="20">
          <img
            src="@/assets//basura/Cap1basura.png"
            width="2%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-top:-100px" type="depth" :strength="20">
          <img
            src="@/assets//basura/nacdonalddsbasura.png"
            width="10%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:-500px" type="depth" :strength="15">
          <img
            src="@/assets//basura/Cig3basura.png"
            width="3%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:200px" type="depth_inv" :strength="20">
          <img
            src="@/assets//basura/cOFFEEbasura.png"
            width="4%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:-700px"  type="depth_inv" :strength="20">
          <img
            src="@/assets//basura/Mask1basura.png"
            width="10%"
            alt="basura1"
          />
        </kinesis-element>
       
      </kinesis-container>
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
      }, 18000);
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