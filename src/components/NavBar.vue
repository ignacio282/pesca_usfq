<template>
  <b-navbar id="myNav" fixed="top" type="dark" toggleable="lg">
    <b-navbar-brand style="line-height: 18px; text-align: left;">
      <router-link to="/menu" id="brand" @mouseover.native="expandBrand(true);" @mouseleave.native="expandBrand(false);" class="colorWhite">REGEN<br>DE<br>ECO</router-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown   class="text-uppercase link colorWhite" text="Menú" right >
          <b-dropdown-item>
            <router-link to="/menu" class="colorGray">MENÚ</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/educacion">EDUCACIÓN AMBIENTAL</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/redes">REDES FANTASMA</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/plastico">PLÁSTICOS</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/reciclaje">RECICLAJE</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/pesca">PESCA</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/media">MEDIA</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria">VIDEOJUEGO</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="text-uppercase link" text="About" right>
          <router-link to="/about" class="colorWhite">About</router-link>
        </b-nav-item>
        <b-nav-item class="text-uppercase link" text="Recursos" right>
          <router-link  to="/recursos" class="colorWhite">Recursos</router-link>
        </b-nav-item>
        <b-nav-item class="text-uppercase link" text="Noticias" right>
          <router-link to="/noticias" class="colorWhite">Noticias</router-link>
        </b-nav-item>
        <b-nav-item-dropdown   class="text-uppercase link colorWhite" text="Partners" right >

          <b-dropdown-item>
            <router-link class="colorGray" to="/">Partner 1</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/">Partner 2</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/">Partner 3</router-link>
          </b-dropdown-item>

        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String,
  },
  methods: {
    expandBrand: function(expand){
      if(expand){
        document.getElementById("brand").innerHTML = "REGENERACIÓN<br>DE<br>ECOSISTEMAS";
      }else{
        document.getElementById("brand").innerHTML = "REGEN<br>DE<br>ECO";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  height: 15%;
  color: black !important;
  font-weight: 300;
  padding-right: 12%;
  padding-left: 5%;
  transition: visibility 0.5s linear, opacity 0.5s linear;
}

::v-deep .nav-link{
  color: rgba($color: black, $alpha: 1.0)!important;
}
::v-deep .colorWhite {
  color: black ;
}
::v-deep .colorGray {
  color: rgb(83, 81, 81) ;
}
.link{
padding-left: 3%;
padding-right: 3%;
}

#brand:hover{
  text-decoration: none;
}

</style>
