<template>
  <b-navbar id="myNav" fixed="top" type="dark" toggleable="lg">
    <b-navbar-brand>
      <router-link to="/menu" style="color:Black">NavBar</router-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Menú" right>
          <b-dropdown-item>
            <router-link to="/menu">Menú</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">EDUCACIÓN AMBIENTAL</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">REDES FANTASMA</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">PLÁSTICOS</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">RECICLAJE</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">PESCA</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/media">MEDIA</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">VIDEOJUEGO</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item text="About" right>
          <router-link to="/about" class="colorWhite">About</router-link>
        </b-nav-item>
        <b-nav-item text="Recursos" right>
          <router-link to="/Recursos" class="colorWhite">Recursos</router-link>
        </b-nav-item>
        <b-nav-item text="Noticias" right>
          <router-link to="/noticias" class="colorWhite">Noticias</router-link>
        </b-nav-item>
        <b-nav-item text="Partners" right>
          <router-link to="/Partners" class="colorWhite">Partners</router-link>
        </b-nav-item>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
  background-color: #020d1400 !important;
  height: 10%;
  color: black !important;
}

::v-deep .nav-link{
  color: rgba($color: black, $alpha: 1.0)!important;
}
.colorWhite {
  color: black ;
}
.stripe {
  height: 200px;
  background: rgb(180, 58, 58);
  background: linear-gradient(
    90deg,
    rgba(180, 58, 58, 1) 0%,
    rgba(145, 44, 192, 1) 25%,
    rgba(81, 70, 169, 1) 40%,
    rgba(29, 252, 253, 1) 57%,
    rgba(49, 253, 144, 1) 75%,
    rgba(184, 253, 49, 1) 89%
  );
}
</style>
