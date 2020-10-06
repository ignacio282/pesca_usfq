<template>
  <section id="footer">
    <div class="container">
      <b-row id="social" align-h="center">
        <b-col cols="12" md="4">
          <a href="https://www.facebook.com/oceanrestorationecuador/"><font-awesome-icon class="sociales" :icon="[ 'fab', 'facebook' ]"/></a>
          
          <font-awesome-icon class="sociales" :icon="[ 'fab', 'instagram' ]"/>
          <font-awesome-icon class="sociales" :icon="[ 'fab', 'twitter' ]"/>
        </b-col>
      </b-row>
      <b-row id="logos" align-h="center">
        <b-col cols="12" md="12" class="imagen">
          <img class="imagenes" src="../assets/img/logoPlastico3.png" />
          <img class="imagenes" src="../assets/img/DAAD_Logo.svg" />
          <img class="imagenes" src="../assets/img/ZMT_Logo_SMALL_cmyk_ENG.png" />
          <img class="imagenes" id="community" src="../assets/img/logoCommunityESP.png" />
          <img class="imagenes" src="../assets/img/LogoCocoa.png" />
          <img class="imagenes" src="../assets/img/LogoBio.png" />
          <img class="imagenes" id="salud" src="../assets/img/LogoSalud.png" />
          <img class="imagenes" id="community" src="../assets/img/LogoUSFQPlano.png" />
        </b-col>
      </b-row>

    </div>
  </section>
</template>

<script>
export default {
  name: "Foot"
};
</script>

<style scoped>
#footer {
  background: #03141d;
  color: #ffffff;
}

#footer a {
  color: #ffffff;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

#footer a:hover {
  text-decoration-line: underline !important;
}

#footer p {
  margin-bottom: 0;
}

#social{
  padding-top: 3%;
}

#logos {
  padding: 1%;
}

@media (max-width: 400px) {
  #logos {
    margin-top: 100px;
  }

  #menu {
    padding-top: 25px;
  }
}

.imagenes {
  width: 12%;
  padding-right: 4%;
}

.imagen {
  padding-top: 1.5%;
  padding-bottom: 1.5% !important;
}

#texto {
  font-size: 9px;
  padding-bottom: 0.5%;
}

#salud{
  width: 8.5%;
}

.sociales{
  margin: 3%;
  font-size: 28px;
}

#community{
  width: 15%;
}
</style>
