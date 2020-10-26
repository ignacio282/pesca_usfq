<template>
    <div class="home">
      <!--
      <div id="titulo" class="heading text-center">
      <h1>Regeneración de Ecosistemas</h1>
    </div>
    <div id="homeForm">
      <iframe
        id="googleForm"
        src="https://docs.google.com/forms/d/e/1FAIpQLSd5V_4ZrO0S-9XKJqpQWua4TXDRSPyVS5gTm0hraCvTZ5P9zA/viewform?embedded=true"
        height="75%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Cargando…</iframe>
      <b-row>
        <b-col class="text-center">
          <router-link to="/menu">Continuar</router-link>
        </b-col>
      </b-row>
    </div>
      -->
      <kinesis-container  class="contenedor">

        <kinesis-element type="depth" :strength="10">
          <img src="../assets/img/LogoCompletoL.png" width="50%" class="logo">
        </kinesis-element>
      </kinesis-container>


    <kinesis-container>
    <kinesis-element type="depth" :strength="20">
    
      <b-row class="justify-content-center pregunta" >¿CÓMO SERÁ EL OCÉANO EN EL FUTURO?</b-row>
      <b-row class="justify-content-center" >
        <b-col col lg="2" class="respuestas">
          LIMPIO
          <router-link to="/menu/limpio">
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
            style="margin:5px"
            
          ></b-form-checkbox>
          
          </router-link>
          
        </b-col>
        <b-col col lg="2" class="respuestas">
          SUCIO
          <router-link to="/menu/sucio">
          <b-form-checkbox
            id="checkbox-3"
            name="checkbox-3"
            value="accepted"
            unchecked-value="not_accepted"
            style="margin:5px"
            
          ></b-form-checkbox>
          </router-link>
        </b-col>
      </b-row>
      </kinesis-element>
    
    </kinesis-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  data: function(){
    return{
    }
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  color: rgb(0, 0, 0);
  overflow: hidden;
  background-color: rgb(7, 22, 54);
  background-image: url("../assets/img/Inicio_short.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
}

.contenedor {
  height: 60%;
  padding-top: 6%;
}
.tituloLanding {
  color: white;
  font-size: 600%;
  padding: 0;
  margin: 0;
  font-weight: 100;
  letter-spacing: 5px;
}

.logo{
  margin-right: 8%;
}

.tituloLandingS{
  color: white;
  font-size: 200%;
  padding: 0;
  margin: 0;
  font-weight: 100;
}
.respuestas {
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 150%;
}
.pregunta {
  color: white;
  font-size: 175%;
  margin-bottom: 1%;
  margin-top: 4%;
  text-transform: uppercase;
  font-weight: 400;
}

#titulo {
  color: #072d40;
  height: 15%;
}

.row {
  width: 100%;
}

.text-center {
  text-align: center !important;
}

#homeForm {
  height: 85%;
  width: 100%;
}

#googleForm {
  width: 85%;
}

@media (max-width: 768px) {
  #googleForm {
    width: 75%;
  }
}
</style>
