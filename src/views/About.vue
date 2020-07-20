<template>
  <div class="about">
    <NavBar />
    <b-container class="contenedorAbout">
      <b-row>
        <b-col lg="6" sm="12" class="mt-4" id="colText">
          <h1 class="font-weight-bold mb-5">El Equipo Detras de Regeneracion de Ecosistemas.</h1>
          <h3>Quienes somos?</h3>
          <p
            class="font-weight-light"
            id="aboutText"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis magna ante, sodales a laoreet non, scelerisque ac justo. Fusce ipsum lorem, fermentum quis varius sit amet, varius quis purus. Phasellus semper elit id purus fringilla, at dapibus ligula blandit. Phasellus tristique magna dui, a scelerisque odio semper id. Cras in est odio.</p>
        </b-col>

        <b-col  class="my-auto" id="containerLogos">
          <b-row align-h="center">
            <b-img class="mb-5" src="https://imgur.com/dUaxCOJ.png" height="100%" alt="Image 1"></b-img>
          </b-row>
          <b-row>
            <b-col cols="4" >
              <b-img src="https://imgur.com/vKbtIub.png" height="100%" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="4">
              <b-img src="https://imgur.com/V9uRGgJ.png" height="100%" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="4" >
              <b-img src="https://imgur.com/UIqaSdv.png" height="100%" alt="Image 1"></b-img>
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col >
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
}
#aboutText{
padding-right:40%
}
.about {
  color: black;
  overflow: hidden;
  height: 100%;
  max-width: 100%;
}
.contenedorAbout {
  margin-top: 7%;
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
  #aboutText{
    padding-right:0%;
    margin-bottom: 20%; 
}
#containerLogos{
    padding-right: 15%;
    padding-left: 10%;
}
}
</style>
