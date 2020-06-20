<template>
  <b-navbar fixed="top" type="dark" toggleable="lg">
    <b-navbar-brand>
      <router-link to="/" style="color:white">NavBar</router-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Menú" right>
          <b-dropdown-item>
            <router-link to="/menu">Menú</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">Educación Ambiental</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">Redes Fantasma</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">Plásticos</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">Reciclaje</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">Pesca</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/media">Media</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">Videojuego</router-link>
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Recursos" right>
          <b-dropdown-item>
            <router-link to="/menu">Menú</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">Crowdfunding</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link to="/secundaria">Partners</router-link>
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
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&family=Roboto:wght@100&display=swap");
.navbar {
  background: #012b50 !important;
}

::v-deep .nav-link{
  color: rgba($color: white, $alpha: 1.0)!important;
}
</style>
