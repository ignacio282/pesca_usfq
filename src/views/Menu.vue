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
        <kinesis-container v-if="sucio" class="contenedor">
        <kinesis-element style="margin-left:-800px; margin-top:-100px"  type="translate" :strength="20">
          <img
          style="opacity: 0.6"
            src="@/assets//basura/Bottle1basura.png"
            width="5%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:-300px"  type="depth" :strength="20">
          <img
          style="opacity: 0.6"
            src="@/assets//basura/QFcbasura.png"
            width="5%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:-1000px; margin-top:-70px"  type="depth_inv" :strength="20">
          <img
          style="opacity: 0.6"
            src="@/assets//basura/Dorobasura.png"
            width="4%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:800px; margin-top:-200px "   type="depth" :strength="20">
          <img
          style="opacity: 0.6"
            src="@/assets//basura/Fundabasura.png"
            width="15%"
            alt="basura1"
          />
        </kinesis-element>

        <kinesis-element style="margin-left:300px"  type="depth_inv" :strength="20">
          <img
          style="opacity: 0.6"
            src="@/assets//basura/Cap1basura.png"
            width="2%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-top:-100px" type="depth" :strength="20">

          <img
          style="opacity: 0.7"
            src="@/assets//basura/nacdonalddsbasura.png"
            width="4%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:-500px" type="depth" :strength="15">
          <img
          style="opacity: 0.6"
            src="@/assets//basura/Cig3basura.png"
            width="4%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:200px" type="depth_inv" :strength="20">
          <img
          style="opacity: 0.6"
            src="@/assets//basura/cOFFEEbasura.png"
            width="4%"
            alt="basura1"
          />
        </kinesis-element>
        <kinesis-element style="margin-left:-700px"  type="depth_inv" :strength="20">
          <img
          style="opacity: 0.6"
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
  data: function(){
    return{
      sucio: Boolean
    }
  },
  created: function(){
    if(this.$route.params.sucio === "limpio"){
      this.sucio = false;
    };
    if(this.$route.params.sucio === "sucio"){
      this.sucio = true;
    };
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
div.overlay {
    opacity: .9;
    background-color: black;
    position: absolute;
    left: 0; top: 0; height: 256px; width: 256px;
}
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