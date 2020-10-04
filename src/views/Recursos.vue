<template>
  <div id="recursos">
    <NavBar />
    <b-container fluid class="px-5 mt-5" id="tarjetas">
      <b-card-group deck>
        <b-card
          title="PDF"
          img-src="../assets/img/plasticoPDF.png"
          img-alt="Card image"
          img-top
          img-height="60%"
          class="mb-5"
        >
          <b-card-text>PDF para descargar</b-card-text>
          <b-button v-b-modal.modal-xl>VER</b-button>
          <b-modal id="modal-xl" hide-footer hide-header size="xl" centered>
            <b-row class="mx-4 my-5">
              <b-col cols="8">
                <b-img src="https://via.placeholder.com/800x600" fluid alt="Responsive image"></b-img>
              </b-col>
              <b-col cols="4" class="my-auto text-center">
                Ea nulla magna do veniam nostrud aliquip. Magna deserunt proident cupidatat in amet.
                Aliqua occaecat irure dolore laboris id eu veniam aliquip anim officia.
                Do sunt id dolor cupidatat. Voluptate occaecat incididunt duis laboris excepteur incididunt culpa.
                Voluptate aliquip velit quis ut exercitation occaecat do id ut sint duis aliqua minim. Sunt aliquip
                Lorem dolor et consectetur.Enim incididunt minim do commodo consequat minim do commodo nisi deserunt proident veniam.
                Dolore consequat nisi commodo excepteur ipsum laborum. Sit magna pariatur pariatur ullamco non ut dolore culpa exercitation
                minim ipsum aute est.
                <br />
                <b-button class="mt-5" variant="dark">DESCARGAR</b-button>
              </b-col>
            </b-row>
          </b-modal>
        </b-card>
        <b-card
          title="Video"
          img-src="../assets/img/videoRedSS.png"
          img-alt="Card image"
          img-top
          img-height="60%"
          class="mb-5 "
        >
          <b-card-text>Video para descargar</b-card-text>
          <b-button v-b-modal.modal2>VER</b-button>
          <b-modal id="modal2" hide-footer hide-header size="xl" centered>
            <b-row class="mx-4 my-2">
              <b-col class="text-center">
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="../assets/video/1 Educacion_Ambiental.mp4"
                  allowfullscreen
                ></b-embed>
                <b-button class="mt-3" variant="dark">DESCARGAR</b-button>
              </b-col>
            </b-row>
          </b-modal>
        </b-card>
        <b-card class="mb-5 ">
          <div id="waveform" class="py-5"></div>
          <b-card-title>AUDIO</b-card-title>
          <b-card-text>Audio para descargar</b-card-text>
          <b-button @click="play" >PLAY</b-button>
          <b-button>DESCARGAR</b-button>
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
    <Footer />
  </div>
</template>


<script>
import WaveSurfer from "wavesurfer.js";
export default {
  name: "Recursos",
  mounted: function() {
    this.$nextTick(()=>{
      this.wavesurfer = WaveSurfer.create({
          container: "#waveform",
          waveColor: "#1381B5",
          progressColor: "#03141d",
          barHeight: 3
        });
        this.wavesurfer.load(
          "https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3"
        );
    })
  },
  methods: {
    play: function(){
      this.wavesurfer.playPause();
    }
  }
};
</script>

<style lang="scss" scoped>
.card{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
#tarjetas {
  padding-top: 7%;
  color: black;
  padding-bottom: 7%;
  text-transform: uppercase;
}
#modal-xl {
  background-color: black;
}

.btn-secondary{
  margin: 1%;
}
</style>