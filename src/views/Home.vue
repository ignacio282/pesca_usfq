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
      <kinesis-container class="contenedor">
        <kinesis-element type="depth" :strength="10">
          <p class="tituloLanding">REGENERACION</p>
        </kinesis-element>
        <kinesis-element style="margin:-20px" type="depth" :strength="2">
          <p class="tituloLanding">DE</p>
        </kinesis-element>
        <kinesis-element type="depth_inv" :strength="10">
          <p class="tituloLanding">ECOSISTEMAS</p>
        </kinesis-element>
      </kinesis-container>

      <kinesis-container>
        <kinesis-element type="depth" :strength="20">
          <b-row class="justify-content-center pregunta">Pregunta</b-row>
          <b-row class="justify-content-center">
            <b-col col lg="2" class="respuestas">
              Respuesta 1
              <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
                style="margin:5px"
                switch
              ></b-form-checkbox>
            </b-col>
            <b-col col lg="2" class="respuestas">
              Respuesta 2
              <b-form-checkbox
                id="checkbox-2"
                v-model="status"
                name="checkbox-2"
                value="accepted"
                unchecked-value="not_accepted"
                style="margin:5px"
                switch
              ></b-form-checkbox>
            </b-col>
            <b-col col lg="2" class="respuestas">
              Respuesta 3
              <b-form-checkbox
                id="checkbox-3"
                v-model="status"
                name="checkbox-3"
                value="accepted"
                unchecked-value="not_accepted"
                style="margin:5px"
                switch
              ></b-form-checkbox>
            </b-col>
          </b-row>
        </kinesis-element>
        <b-button>
          <router-link to="/menu">Continuar</router-link>
        </b-button>
      </kinesis-container>
    </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  color: rgb(0, 0, 0);
  overflow: hidden;
  background-color: rgb(7, 22, 54);
}

.contenedor {
  height: 70%;
  padding-top: 8%;
}
.tituloLanding {
  color: white;
  font-size: 500%;
  padding: 0;
  margin: 0;
  font-weight: 900;
}
.respuestas {
  color: #9b6500;
}
.pregunta {
  color: #9b6500;
  font-size: 150%;
  margin-bottom: 3%;
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
