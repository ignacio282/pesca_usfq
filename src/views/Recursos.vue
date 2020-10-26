<template>
  <div id="recursos">
    <NavBar />
    <b-container fluid class="px-5 mt-5 pt-5" id="tarjetas">
      <b-row>
        <b-col cols="12" lg="4" >
          <b-card
          title="PDF"
          img-src="../assets/img/plasticoPDF.png"
          img-alt="Card image"
          img-top
          img-height="252px"
          class="mb-5"
        >
          <b-card-text>PDF para descargar</b-card-text>
          <b-button v-b-modal.modal-xl>VER</b-button>
          <b-modal id="modal-xl" hide-footer hide-header size="xl" centered>
            <b-row class="mx-4 my-5">
              <b-col cols="12" lg="4">
                <b-img
                  src="../assets/img/PlasticoPDFCompletoL.png"
                  fluid
                  alt="Responsive image"
                ></b-img>
              </b-col>
              <b-col cols="12" lg="4" class="my-auto text-center">
                Ea nulla magna do veniam nostrud aliquip. Magna deserunt
                proident cupidatat in amet. Aliqua occaecat irure dolore laboris
                id eu veniam aliquip anim officia. Do sunt id dolor cupidatat.
                Voluptate occaecat incididunt duis laboris excepteur incididunt
                culpa. Voluptate aliquip velit quis ut exercitation occaecat do
                id ut sint duis aliqua minim. Sunt aliquip Lorem dolor et
                consectetur.Enim incididunt minim do commodo consequat minim do
                commodo nisi deserunt proident veniam. Dolore consequat nisi
                commodo excepteur ipsum laborum. Sit magna pariatur pariatur
                ullamco non ut dolore culpa exercitation minim ipsum aute est.
                <br />
                <b-button class="mt-5" variant="dark" @click="downloadContent(1);">DESCARGAR</b-button>
              </b-col>
            </b-row>
          </b-modal>
        </b-card>
        <b-card
          title="PDF"
          img-src="../assets/img/infoRedes.png"
          img-alt="Card image"
          img-top
          img-height="252px"
          class="mb-1"
        >
          <b-card-text>PDF para descargar</b-card-text>
          <b-button v-b-modal.modal-3>VER</b-button>
          <b-modal id="modal-3" hide-footer hide-header size="xl" centered>
            <b-row class="mx-4 my-5">
              <b-col cols="12" lg="4">
                <b-img
                  src="../assets/img/infoRedes.png"
                  fluid
                  alt="Responsive image"
                ></b-img>
              </b-col>
              <b-col cols="12" lg="4" class="my-auto text-center">
                Ea nulla magna do veniam nostrud aliquip. Magna deserunt
                proident cupidatat in amet. Aliqua occaecat irure dolore laboris
                id eu veniam aliquip anim officia. Do sunt id dolor cupidatat.
                Voluptate occaecat incididunt duis laboris excepteur incididunt
                culpa. Voluptate aliquip velit quis ut exercitation occaecat do
                id ut sint duis aliqua minim. Sunt aliquip Lorem dolor et
                consectetur.Enim incididunt minim do commodo consequat minim do
                commodo nisi deserunt proident veniam. Dolore consequat nisi
                commodo excepteur ipsum laborum. Sit magna pariatur pariatur
                ullamco non ut dolore culpa exercitation minim ipsum aute est.
                <br />
                <b-button class="mt-5" variant="dark" @click="downloadContent(4);">DESCARGAR</b-button>
              </b-col>
            </b-row>
          </b-modal>
        </b-card>
        </b-col>
        <b-col cols="12" lg="4">
          <b-card
          title="Video"
          img-src="../assets/img/videoRedSS.png"
          img-alt="Card image"
          img-top
          img-height="252px"
          class="mb-5 "
        >
          <b-card-text>Video para descargar</b-card-text>
          <b-button v-b-modal.modal2 @click="setVideo(1)">VER</b-button>
          <b-modal id="modal2" hide-footer hide-header size="xl" centered>
            <b-row class="mx-4 my-2">
              <b-col class="text-center">
                <b-embed
                  id="video1"
                  type="iframe"
                  aspect="16by9"
                  src=""
                  allowfullscreen
                ></b-embed>
                <b-button class="mt-3" variant="dark" @click="downloadContent(2);">DESCARGAR</b-button>
              </b-col>
            </b-row>
          </b-modal>
        </b-card>
        <b-card
          title="Video"
          img-src="../assets/img/videoRed2SS.png"
          img-alt="Card image"
          img-top
          img-height="252px"
          class="mb-5"
        >
          <b-card-text>Video para descargar</b-card-text>
          <b-button v-b-modal.modal2 @click="setVideo(1)">VER</b-button>
          <b-modal id="modal2" hide-footer hide-header size="xl" centered>
            <b-row class="mx-4 my-2">
              <b-col class="text-center">
                <b-embed
                  id="video1"
                  type="iframe"
                  aspect="16by9"
                  src=""
                  allowfullscreen
                ></b-embed>
                <b-button class="mt-3" variant="dark" @click="downloadContent(5);">DESCARGAR</b-button>
              </b-col>
            </b-row>
          </b-modal>
        </b-card>
        </b-col>
        <b-col>
          <b-card class="mb-5 ">
          <div id="waveform" class="wave"></div>
          <b-card-title>AUDIO</b-card-title>
          <b-card-text>Audio para descargar</b-card-text>
          <b-button @click="play(1)">PLAY</b-button>
          <b-button @click="downloadContent(3);">DESCARGAR</b-button>
        </b-card>
        <b-card class="mb-5 ">
          <div id="waveform2" class="wave"></div>
          <b-card-title>AUDIO</b-card-title>
          <b-card-text>Audio para descargar</b-card-text>
          <b-button @click="play(1)">PLAY</b-button>
          <b-button @click="downloadContent(6);">DESCARGAR</b-button>
        </b-card>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>


<script>
import WaveSurfer from "wavesurfer.js";
import { storage } from "../firebase";
export default {
  name: "Recursos",
  data: function() {
    return {
      storageRef: storage.ref()
    };
  },
  mounted: function() {
    this.$nextTick(() => {
      this.wavesurfer = WaveSurfer.create({
        container: "#waveform",
        waveColor: "#1381B5",
        progressColor: "#03141d",
        barHeight: 3
      });
      this.wavesurfer2 = WaveSurfer.create({
        container: "#waveform2",
        waveColor: "#1381B5",
        progressColor: "#03141d",
        barHeight: 3
      });
      this.wavesurfer.load(
        "https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3"
      );
      this.wavesurfer2.load(
        "https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3"
      );
    });
  },
  methods: {
    play: function(wave) {
      if (wave === 1) {
        this.wavesurfer.playPause();
      }
      if (wave === 2) {
        this.wavesurfer2.playPause();
      }
    },
    setVideo: function(num) {
      if (num === 1) {
        this.storageRef
          .child("recursos/videos/VIDEO_REDES_1_FINAL_NOBORRAR.mp4")
          .getDownloadURL()
          .then(function(url) {
            let video1 = document.getElementById("video1");
            console.log(video1);
            video1.src = url;
          });
      }
      if (num === 2) {
        this.storageRef
          .child("recursos/videos/VIDEO_REDES_2_FINAL_NOBORRAR.mp4")
          .getDownloadURL()
          .then(function(url) {
            let video2 = document.getElementById("video2");
            video2.src = url;
          });
      }
    },
    downloadContent: function(id) {
      switch (id) {
        case 1:
          this.storageRef
            .child("recursos/pdf/PlasticoCompleto.pdf")
            .getDownloadURL()
            .then(function(url) {
              let xhr = new XMLHttpRequest();
              xhr.responseType = "blob";
              xhr.onload = function(event) {
                let blob = xhr.response;
                let a = document.createElement("a");
                a.href = window.URL.createObjectURL(blob);
                a.download = "videoRedes2";
                a.click();
              };
              xhr.open("GET", url);
              xhr.send();
            });
            break;
        case 2:
          this.storageRef
            .child("recursos/videos/VIDEO_REDES_1_FINAL_NOBORRAR.mp4")
            .getDownloadURL()
            .then(function(url) {
              let xhr = new XMLHttpRequest();
              xhr.responseType = "blob";
              xhr.onload = function(event) {
                let blob = xhr.response;
                let a = document.createElement("a");
                a.href = window.URL.createObjectURL(blob);
                a.download = "videoRedes2";
                a.click();
              };
              xhr.open("GET", url);
              xhr.send();
            });
            break;
        case 3:
          /*this.storageRef
            .child("recursos/img/VIDEO_REDES_2_FINAL_NOBORRAR.mp4")
            .getDownloadURL()
            .then(function(url) {
              let xhr = new XMLHttpRequest();
              xhr.responseType = "blob";
              xhr.onload = function(event) {
                let blob = xhr.response;
                let a = document.createElement("a");
                a.href = window.URL.createObjectURL(blob);
                a.download = "videoRedes2";
                a.click();
              };
              xhr.open("GET", url);
              xhr.send();
            });*/
            console.log("descarga audio 1");
            break;
        case 4:
          this.storageRef
            .child("recursos/img/infoRedes.pdf")
            .getDownloadURL()
            .then(function(url) {
              let xhr = new XMLHttpRequest();
              xhr.responseType = "blob";
              xhr.onload = function(event) {
                let blob = xhr.response;
                let a = document.createElement("a");
                a.href = window.URL.createObjectURL(blob);
                a.download = "videoRedes2";
                a.click();
              };
              xhr.open("GET", url);
              xhr.send();
            });
            break;
        case 5:
          this.storageRef
            .child("recursos/videos/VIDEO_REDES_2_FINAL_NOBORRAR.mp4")
            .getDownloadURL()
            .then(function(url) {
              let xhr = new XMLHttpRequest();
              xhr.responseType = "blob";
              xhr.onload = function(event) {
                let blob = xhr.response;
                let a = document.createElement("a");
                a.href = window.URL.createObjectURL(blob);
                a.download = "videoRedes2";
                a.click();
              };
              xhr.open("GET", url);
              xhr.send();
            });
            break;
        case 6:
          /*this.storageRef
            .child("recursos/img/VIDEO_REDES_2_FINAL_NOBORRAR.mp4")
            .getDownloadURL()
            .then(function(url) {
              let xhr = new XMLHttpRequest();
              xhr.responseType = "blob";
              xhr.onload = function(event) {
                let blob = xhr.response;
                let a = document.createElement("a");
                a.href = window.URL.createObjectURL(blob);
                a.download = "videoRedes2";
                a.click();
              };
              xhr.open("GET", url);
              xhr.send();
            });*/
            console.log("descarga audio 1");
            break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #ffffff !important;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
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

.wave {
  padding-top: 15%;
  padding-bottom: 15%;
  width: 100%;
}
.btn-secondary {
  margin: 1%;
}
</style>