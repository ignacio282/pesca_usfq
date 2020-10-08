<template>
  <b-navbar id="myNav" fixed="top" type="dark" toggleable="lg">
    <b-row>
      <b-col>
        <b-img src="@/assets//img/PulpoB.png" width="50%" class="pulpo"></b-img>
      </b-col>
      <b-col>
        <b-navbar-brand style="line-height: 18px; text-align: left;">
          <router-link to="/menu/limpio" id="brand" class="colorWhite">
            <div id="regen">
              <span>REGEN</span><span>ERACIÓN</span><br />DE<br /><span
                >ECO</span
              ><span>SISTEMAS</span>
            </div></router-link
          >
        </b-navbar-brand>
      </b-col>
    </b-row>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown
          v-if="!eng"
          class="text-uppercase link colorWhite"
          text="Menú"
          right
        >
          <b-dropdown-item>
            <router-link to="/menu/sucio" class="colorGray">MENÚ</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/educacion"
              >EDUCACIÓN AMBIENTAL</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/redes"
              >REDES FANTASMA</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/plastico"
              >PLÁSTICOS</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/reciclaje"
              >RECICLAJE</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/pesca"
              >PESCA</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/media">MEDIA</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria"
              >VIDEOJUEGO</router-link
            >
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown
          v-if="eng"
          class="text-uppercase link colorWhite"
          text="Menu"
          right
        >
          <b-dropdown-item>
            <router-link to="/menu/sucio" class="colorGray">MENU</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/educacion"
              >ENVIRONMENTAL EDUCATION</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/redes"
              >GHOST NETS</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/plastico"
              >PLASTICS</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/reciclaje"
              >RECYCLING</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria/pesca"
              >FISHING</router-link
            >
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/media">MEDIA</router-link>
          </b-dropdown-item>
          <b-dropdown-item>
            <router-link class="colorGray" to="/secundaria"
              >VIDEOGAME</router-link
            >
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="text-uppercase link" text="About" right>
          <router-link to="/about" class="colorWhite">About</router-link>
        </b-nav-item>
        <b-nav-item class="text-uppercase link" text="Recursos" right>
          <router-link v-if="!eng" to="/recursos" class="colorWhite">Recursos</router-link>
          <router-link v-if="eng" to="/recursos" class="colorWhite">Resources</router-link>
        </b-nav-item>
        <b-nav-item class="text-uppercase link" text="Noticias" right>
          <router-link v-if="!eng" to="/noticias" class="colorWhite">Noticias</router-link>
          <router-link v-if="eng" to="/noticias" class="colorWhite">News</router-link>
        </b-nav-item>
        <b-nav-item-dropdown
          class="text-uppercase link"
          text="Partners"
          right
          
        >
          <b-dropdown-item class="colorGray dropMenu" target="_blank" href="https://dlab.usfq.edu.ec/">
           D-Lab USFQ
          </b-dropdown-item>
          <b-dropdown-item class="colorGray" target="_blank" href="https://www.plasticoproject.com/" >
            PlastiCO Project
          </b-dropdown-item>
          <b-dropdown-item class="colorGray" target="_blank"  href="https://www.facebook.com/USFQCOCOA">
            COCOA USFQ
          </b-dropdown-item>
          <b-dropdown-item class="colorGray" target="_blank" href="https://www.daad.de/en/">
            DAAD
          </b-dropdown-item>
          <b-dropdown-item class="colorGray" target="_blank" href="https://www.facebook.com/proyectocetaceaecuador">
            CETACEA Ecuador
          </b-dropdown-item>
          <b-dropdown-item class="colorGray" target="_blank" href="https://www.delaredalplato.com/">
            De la Red al Plato
          </b-dropdown-item>
          <b-dropdown-item class="colorGray" target="_blank" href="https://www.facebook.com/USFQCOCIBA">
            COCIBA USFQ
          </b-dropdown-item>
          <b-dropdown-item class="colorGray" target="_blank" href="https://www.leibniz-zmt.de/en/">
            ZMT Centre for Tropical Marine Ecology
          </b-dropdown-item>
          <b-dropdown-item class="colorGray" target="_blank" href="https://www.facebook.com/TueriUSFQ">
            Hospital de Fauna Silvestre TUERI USFQ
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item class="text-uppercase language activo" right @click="changeLang(1, emitLang);">ES</b-nav-item>
        <b-nav-text id="separador" right>|</b-nav-text>
        <b-nav-item class="text-uppercase" right @click="changeLang(2, emitLang);">EN</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar",
  data: function(){
    return{
      eng: false
    }
  },
  props: {
    msg: String
  },
  methods: {
    changeLang: function(lang, callback){
      if(lang === 1){
        this.eng = false;
      }
      if(lang === 2){
        this.eng = true;
      }
      callback();
    },
    emitLang: function(){
      this.$root.$emit('lang', this.eng);
      console.log("emit" + this.eng);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pulpo {
  margin-right: -70px;
  padding-top: 5px;
}
#regen {
  margin: 0;
  padding: 0;
}
#regen span {
  display: inline-flex;
}
#regen span:nth-child(even) {
  overflow: hidden;
  transition: ease-in-out 0.5s;

  letter-spacing: -1em;
}
#regen:hover span:nth-child(even) {
  letter-spacing: 0;
}
#regen:hover span:nth-child(6) {
  transition-delay: 0.25s;
}

.navbar {
  height: 12%;
  color: black !important;
  font-weight: 300;
  padding-right: 14%;
  padding-left: 2%;
  transition: visibility 0.5s linear, opacity 0.5s linear;
}
#brand {
  font-weight: 300;
}
::v-deep .dropdown-menu.show{
  border: none;

}
::v-deep .nav-link {
  color: rgba($color: black, $alpha: 1) !important;
}
::v-deep .colorWhite {
  color: black;
}
::v-deep .colorGray {
  color: rgb(83, 81, 81);

  text-decoration: none;
}
.link {
  padding-left: 3%;
  padding-right: 3%;
}

.activo {
}

.language {
  padding-left: 3%;
}

#separador {
  color: black;
  padding-top: 0.45rem;
}

#brand:hover {
  text-decoration: none;
}
</style>
