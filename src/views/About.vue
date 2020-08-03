<template>
  <div class="about">
    <NavBar />
    <b-container fluid class="contenedorAbout">
      <b-row>
        <b-col lg="6" sm="12"  id="colText">
          <h1 class="font-weight-light mb-3">Quienes somos?</h1>
          <b-row>
            <b-col cols="3">
              <b-avatar class="mx-3 my-4" size="6rem"></b-avatar>
            </b-col>
            <b-col cols="3" class="py-3 font-weight-light" >
              <h5>Nombre</h5>
              <p>Este seria un lugar para poner una pequena info</p>
            </b-col>
            <b-col cols="3">
              <b-avatar class="mx-3 my-4" size="6rem"></b-avatar>
            </b-col>
            <b-col cols="3" class="py-3">
              <h4>Nombre</h4>
              <p>Este seria un lugar para poner una pequena info</p>
            </b-col>
            <b-col cols="3">
              <b-avatar class="mx-3 my-4" size="6rem"></b-avatar>
            </b-col>
            <b-col cols="3" class="py-3">
              <h4>Nombre</h4>
              <p>Este seria un lugar para poner una pequena info</p>
            </b-col>
            <b-col cols="3">
              <b-avatar class="mx-3 my-4" size="6rem"></b-avatar>
            </b-col>
            <b-col cols="3" class="py-3">
              <h4>Nombre</h4>
              <p>Este seria un lugar para poner una pequena info</p>
            </b-col>
            <b-col cols="3">
              <b-avatar class="mx-3 my-4" size="6rem"></b-avatar>
            </b-col>
            <b-col cols="3" class="py-3">
              <h4>Nombre</h4>
              <p>Este seria un lugar para poner una pequena info</p>
            </b-col>
            <b-col cols="3">
              <b-avatar class="mx-3 my-4" size="6rem"></b-avatar>
            </b-col>
            <b-col cols="3" class="py-3">
              <h4>Nombre</h4>
              <p>Este seria un lugar para poner una pequena info</p>
            </b-col>
            
            

          </b-row>
        </b-col>

        <b-col class="ml-5" id="containerLogos">
          <b-row align-h="center">
            <b-img class="mb-5" src="https://imgur.com/dUaxCOJ.png" height="100%" alt="Image 1"></b-img>
          </b-row>
          <b-row>
            <b-col cols="4">
              <b-img src="https://imgur.com/vKbtIub.png" height="100%" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="4">
              <b-img src="https://imgur.com/V9uRGgJ.png" height="100%" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="4">
              <b-img src="https://imgur.com/UIqaSdv.png" height="100%" alt="Image 1"></b-img>
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col>
              <b-img class="mt-5" src="https://imgur.com/gvWJpLo.png" height="100%" alt="Image 1"></b-img>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "About",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#colText {
  text-align: left;
  margin-left: -3%;
  margin-right: 20%;
}
.navbar {
  background-color: #ffffff !important;
}
.about {
  color: black;

  height: 100%;
  max-width: 100%;
}
.contenedorAbout {
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
}
#containerLogos {
  margin-top: 0.5%;
  padding-bottom: 1%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 600px) {
  .about {
    color: black;
    overflow: scroll;
    height: 100%;
    max-width: 100%;
  }
  .contenedorAbout {
    margin-top: 15%;
    margin-bottom: 20%;
  }
  #colText {
    text-align: center;
  }
  #aboutText {
    padding-right: 0%;
    margin-bottom: 20%;
  }
  #containerLogos {
    margin-left: 10%;
  }
}
</style>
