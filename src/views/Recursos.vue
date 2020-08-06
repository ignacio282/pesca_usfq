<template>
  <div id="recursos">
    <NavBar />
    <b-container fluid id="tarjetas">
      <b-card-group deck>
        <b-card
          title="PDF"
          img-src="../assets/img/plasticoPDF.png"
          img-alt="Card image"
          img-top
          img-height="60%"
          class="mb-2"
        >
          <b-card-text>PDF para descargar</b-card-text>
          <b-button>Descargar</b-button>
        </b-card>
        <b-card
          title="Video"
          img-src="../assets/img/videoRedSS.png"
          img-alt="Card image"
          img-top
          img-height="60%"
          class="mb-2"
        >
          <b-card-text>Video para descargar</b-card-text>
          <b-button>Descargar</b-button>
        </b-card>
        <b-card
          title="Audio"
          img-src="../assets/img/waveformjs.png"
          img-alt="Card image"
          img-top
          img-height="60%"
          class="mb-2"
        >
          <b-card-text>Audio para descargar</b-card-text>
          <b-button>Descargar</b-button>
        </b-card>
      </b-card-group>
      <b-card-group deck>
        <b-card
          title="PDF"
          img-src="../assets/img/infoRedes.png"
          img-alt="Card image"
          img-top
          img-height="60%"
          class="mb-2"
        >
          <b-card-text>PDF para descargar</b-card-text>
          <b-button>Descargar</b-button>
        </b-card>
        <b-card
          title="Video"
          img-src="../assets/img/videoRed2SS.png"
          img-alt="Card image"
          img-top
          img-height="60%"
          class="mb-2"
        >
          <b-card-text>Video para descargar</b-card-text>
          <b-button>Descargar</b-button>
        </b-card>
        <b-card
          title="Audio"
          img-src="../assets/img/waveformjs.png"
          img-alt="Card image"
          img-top
          img-height="60%"
          class="mb-2"
        >
          <b-card-text>Audio para descargar</b-card-text>
          <b-button>Descargar</b-button>
        </b-card>
      </b-card-group>
    </b-container>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: "Recursos"
};
</script>

<style lang="scss" scoped>
#tarjetas{
    padding-top: 7%;
    color: black;
    padding-bottom: 7%;
    text-transform: uppercase;
}
</style>