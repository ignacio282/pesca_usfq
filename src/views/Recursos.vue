<template>
  <div id="recursos">
    <NavBar />
    <b-container fluid class="px-5 mt-5 pt-5" id="tarjetas">
      <b-row>
        <b-col cols="12" lg="4">
          <div v-if="pdfs.length">
            <div v-for="(pdf, index) in pdfs" :key="index">
              <b-card
                :title="pdf.name"
                :img-src="sortedThumbnails[index]"
                img-alt="Card image"
                img-top
                img-height="252px"
                class="mb-5"
              >
                <b-button v-b-modal="'modal-x' + index">VER</b-button>
                <b-modal
                  :id="'modal-x' + index"
                  hide-footer
                  hide-header
                  size="xl"
                  centered
                >
                  <b-row class="mx-4 my-5">
                    <b-col cols="12" lg="4">
                      <b-img
                        id="PDF1"
                        :src="sortedvPreviews[index]"
                        fluid
                        alt="Responsive image"
                      ></b-img>
                    </b-col>
                    <b-col cols="12" lg="4" class="my-auto text-center">
                      Ea nulla magna do veniam nostrud aliquip. Magna deserunt
                      proident cupidatat in amet. Aliqua occaecat irure dolore
                      laboris id eu veniam aliquip anim officia. Do sunt id
                      dolor cupidatat. Voluptate occaecat incididunt duis
                      laboris excepteur incididunt culpa. Voluptate aliquip
                      velit quis ut exercitation occaecat do id ut sint duis
                      aliqua minim. Sunt aliquip Lorem dolor et consectetur.Enim
                      incididunt minim do commodo consequat minim do commodo
                      nisi deserunt proident veniam. Dolore consequat nisi
                      commodo excepteur ipsum laborum. Sit magna pariatur
                      pariatur ullamco non ut dolore culpa exercitation minim
                      ipsum aute est.
                      <br />
                      <b-button
                        class="mt-5"
                        variant="dark"
                        @click="downloadContent(sortedvPdfurls[index])"
                        >DESCARGAR</b-button
                      >
                    </b-col>
                  </b-row>
                </b-modal>
              </b-card>
            </div>
          </div>
        </b-col>
        <b-col cols="12" lg="4">
          <div v-if="videos.length">
            <div v-for="(video, index) in videos" :key="index">
              <b-card
                :title="video.name"
                :img-src="sortedvVidthumb[index]"
                img-alt="Card image"
                img-top
                img-height="252px"
                class="mb-5 "
              >
                <b-card-text>Video para descargar</b-card-text>
                <b-button v-b-modal="'modal' + index">VER</b-button>
                <b-modal
                  :id="'modal' + index"
                  hide-footer
                  hide-header
                  size="xl"
                  centered
                >
                  <b-row class="mx-4 my-2">
                    <b-col class="text-center">
                      <b-embed
                        id="video1"
                        type="iframe"
                        aspect="16by9"
                        :src="sortedvVideourls[index]"
                        allowfullscreen
                      ></b-embed>
                      <b-button
                        class="mt-3"
                        variant="dark"
                        @click="downloadContent(sortedvVideourls[index])"
                        >DESCARGAR</b-button
                      >
                    </b-col>
                  </b-row>
                </b-modal>
              </b-card>
            </div>
          </div>
        </b-col>
        <b-col>
          <b-card class="mb-5 ">
            <div id="waveform" class="wave"></div>
            <b-card-title>AUDIO</b-card-title>
            <b-card-text>Audio para descargar</b-card-text>
            <b-button @click="play(1)">PLAY</b-button>
            <b-button>DESCARGAR</b-button>
          </b-card>
          <b-card class="mb-5 ">
            <div id="waveform2" class="wave"></div>
            <b-card-title>AUDIO</b-card-title>
            <b-card-text>Audio para descargar</b-card-text>
            <b-button @click="play(1)">PLAY</b-button>
            <b-button>DESCARGAR</b-button>
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
      storageRef: storage.ref(),
      pdfs: [],
      pdfurls: [],
      previews: [],
      videos: [],
      videourls: [],
      thumbnails: [],
      vidthumb: [],
    
    };
  },
  mounted: function() {

    this.storageRef
      .child("recursos/pdf")
      .listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          this.pdfs.push(itemRef);
          itemRef.getDownloadURL().then(url => {
            this.pdfurls.push(url);
          });
        });
      });
    this.storageRef
      .child("recursos/previews")
      .listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          itemRef.getDownloadURL().then(url => {
            this.previews.push(url);

          });
        });
      });
    this.storageRef
      .child("recursos/thumbnails")
      .listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          itemRef.getDownloadURL().then(url => {
            this.thumbnails.push(url);
          });
        });
      });
    this.storageRef
      .child("recursos/videos")
      .listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          this.videos.push(itemRef);
          itemRef.getDownloadURL().then(url => {
            this.videourls.push(url);
          });
        });
      });
    this.storageRef
      .child("recursos/thumbnails/videos")
      .listAll()
      .then(res => {
        res.items.forEach(itemRef => {
          itemRef.getDownloadURL().then(url => {
            this.vidthumb.push(url);
          });
        });
      });
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
      console.log(this.getThumbnail(this.pdfs[0].fullPath));
      if (wave === 1) {
        this.wavesurfer.playPause();
      }
      if (wave === 2) {
        this.wavesurfer2.playPause();
      }
    },
    downloadContent: function(url) {
      let xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = function(event) {
        let blob = xhr.response;
        let a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "download";
        a.click();
      };
      xhr.open("GET", url);
      xhr.send();
    }
  },
  computed:{
    sortedThumbnails: function() {
      return this.thumbnails.sort();
      console.log(this);
    },
    sortedvPreviews: function() {
      return this.previews.sort();
      console.log(this);
    },
    sortedvPdfurls: function() {
      return this.pdfurls.sort();
      console.log(this);
    },
    sortedvVidthumb: function() {
      return this.vidthumb.sort();
      console.log(this);
    },
    sortedvVideourls: function() {
      return this.videourls.sort();
      console.log(this);
    },
    
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