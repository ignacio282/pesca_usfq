<template>
  <div class="pr-0 content bodySecu">
    <NavBar></NavBar>

    <div class="snapSection pr-0">
      <div class="pt-5">
        <div class="child childVideo">
          <div class="container" id="video">
            <br />
            <b-embed
              v-if="educacion"
              type="iframe"
              aspect="16by9"
              src="../assets/video/1 Educacion_Ambiental.mp4"
              allowfullscreen
            ></b-embed>
            <b-embed
              v-if="redes"
              type="iframe"
              aspect="16by9"
              src="../assets/video/2 Redes_Fantasma.mp4"
              allowfullscreen
            ></b-embed>
            <b-embed
              v-if="plastico"
              type="iframe"
              aspect="16by9"
              src="../assets/video/4_Plasticos2.mp4"
              allowfullscreen
            ></b-embed>
            <b-embed
              v-if="reciclaje"
              type="iframe"
              aspect="16by9"
              src="../assets/video/3 Plasticos.mp4"
              allowfullscreen
            ></b-embed>
            <img
              v-if="pesca"
              src="../assets/img/ConcepstBarco.jpg"
              width="90%"
            />
            <div>
              <b-button v-b-toggle.sidebar-1 class="openSidebar"
                ><b-icon-list
              /></b-button>
              <b-sidebar
                v-if="!eng"
                id="sidebar-1"
                title="CONTENIDO"
                shadow
                style="overflow-y:hidden"
              >
                <b-nav
                  class="flex-column sideMenu"
                  v-b-scrollspy:nav-scroller
                  style="margin-top:30%"
                >
                  <b-nav-item href="#video">VIDEO</b-nav-item>
                  <b-nav-item href="#PREGUNTAS">PREGUNTAS</b-nav-item>
                  <b-nav-item href="#RECURSOS">RECURSOS</b-nav-item>
                  <b-nav-item href="#grad2">GALERIA</b-nav-item>
                </b-nav>
                <b-img
                  src="@/assets//img/Barra.png"
                  width="300%"
                  class="fondoSide"
                ></b-img>
              </b-sidebar>
              <b-sidebar
                v-if="eng"
                id="sidebar-1"
                title="CONTENT"
                shadow
                style="overflow-y:hidden"
              >
                <b-nav
                  class="flex-column sideMenu"
                  v-b-scrollspy:nav-scroller
                  style="margin-top:30%"
                >
                  <b-nav-item href="#video">VIDEO</b-nav-item>
                  <b-nav-item href="#PREGUNTAS">QUESTIONS</b-nav-item>
                  <b-nav-item href="#RECURSOS">RESOURCES</b-nav-item>
                  <b-nav-item href="#grad2">GALLERY</b-nav-item>
                </b-nav>
                <b-img
                  src="@/assets//img/Barra.png"
                  width="300%"
                  class="fondoSide"
                ></b-img>
              </b-sidebar>
            </div>
          </div>
          <h5 v-if="educacion && !eng" class="titulo text-uppercase">
            Educación Ambiental
          </h5>
          <h5 v-if="educacion && eng" class="titulo text-uppercase">
            Environmental Education
          </h5>
          <h5 v-if="redes && !eng" class="titulo text-uppercase">
            Redes Fantasma
          </h5>
          <h5 v-if="redes && eng" class="titulo text-uppercase">Ghost Nets</h5>
          <h5 v-if="plastico && !eng" class="titulo text-uppercase">
            Plásticos
          </h5>
          <h5 v-if="plastico && eng" class="titulo text-uppercase">Plastics</h5>
          <h5 v-if="reciclaje && !eng" class="titulo text-uppercase">
            Reciclaje
          </h5>
          <h5 v-if="reciclaje && eng" class="titulo text-uppercase">
            Recycling
          </h5>
          <h5 v-if="pesca && !eng" class="titulo text-uppercase">Pesca</h5>
          <h5 v-if="pesca && eng" class="titulo text-uppercase">Fishing</h5>
        </div>
      </div>

      <div v-if="educacion && !eng" id="PREGUNTAS">
        <div v-if="educacionTexts.length">
          <div v-for="educacionText in educacionTexts" :key="educacionText.id">
            <div class="container-fluid child" :id="educacionText.id">
              <h2 class="text-center pt-4 pb-4"></h2>
              <div v-scrollanimation>
                <div class="fondoTarjeta">
                  <h4 class="pb-3">{{ educacionText.pregunta }}</h4>
                  <div class="overflow-auto pr-3" style="height:300px">
                    <p class="description">{{ educacionText.respuesta }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="educacion && eng" id="PREGUNTAS">
        <div v-if="educationTexts.length">
          <div v-for="educationText in educationTexts" :key="educationText.id">
            <div class="container-fluid child" :id="educationText.id">
              <h2 class="text-center pt-4 pb-4"></h2>
              <div v-scrollanimation>
                <div class="fondoTarjeta">
                  <h4 class="pb-3">{{ educationText.question }}</h4>
                  <div class="overflow-auto pr-3" style="height:300px">
                    <p class="description">{{ educationText.answer }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="redes">
        <div v-if="redesTexts.length">
          <div v-for="redesText in redesTexts" :key="redesText.id">
            <div class="container-fluid child" :id="redesText.id">
              <h2 class="text-center pt-4 pb-4"></h2>
              <div v-scrollanimation>
                <div class="fondoTarjeta">
                  <h4 class="pb-3">{{ redesText.pregunta }}</h4>
                  <div class="overflow-auto pr-3" style="height:300px">
                    <p class="description">{{ redesText.respuesta }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="plastico" id="PREGUNTAS">
        <div v-if="plasticosTexts.length">
          <div v-for="plasticosText in plasticosTexts" :key="plasticosText.id">
            <div class="container-fluid child" :id="plasticosText.id">
              <h2 class="text-center pt-4 pb-4"></h2>
              <div v-scrollanimation>
                <div class="fondoTarjeta">
                  <h4 class="pb-3">{{ plasticosText.pregunta }}</h4>
                  <div class="overflow-auto pr-3" style="height:300px">
                    <p class="description">{{ plasticosText.respuesta }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="reciclaje" id="PREGUNTAS">
        <div v-if="reciclajeTexts.length">
          <div v-for="reciclajeText in reciclajeTexts" :key="reciclajeText.id">
            <div class="container-fluid child" :id="reciclajeText.id">
              <h2 class="text-center pt-4 pb-4"></h2>
              <div v-scrollanimation>
                <div class="fondoTarjeta">
                  <h4 class="pb-3 subtitulo">{{ reciclajeText.pregunta }}</h4>
                  <div class="overflow-auto pr-3" style="height:300px">
                    <p class="description">{{ reciclajeText.respuesta }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="pesca" id="PREGUNTAS">
        <div v-if="pescaTexts.length">
          <div v-for="pescaText in pescaTexts" :key="pescaText.id">
            <div class="container-fluid child" :id="pescaText.id">
              <h2 class="text-center pt-4 pb-4"></h2>
              <div v-scrollanimation>
                <div class="fondoTarjeta">
                  <h4 class="pb-3 subtitulo">{{ pescaText.pregunta }}</h4>
                  <div class="overflow-auto pr-3" style="height:300px">
                    <p class="description">{{ pescaText.respuesta }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax child" id="RECURSOS">
        <b-container style="padding-top:180px">
          <b-jumbotron
            v-if="!eng"
            class="jumbo"
            header="Material Educativo"
            lead="Videos educativos, Infografías, Hojas de trabajo (PDF)"
            style="text-transform: uppercase"
          >
            <p>Haz Click Aquí Para Ver</p>
            <router-link to="/recursos" class="colorWhite">
              <b-button variant="primary">
                <b-icon-download></b-icon-download>
              </b-button>
            </router-link>
          </b-jumbotron>
          <b-jumbotron
            v-if="eng"
            class="jumbo"
            header="Educational Material"
            lead="Educational videos, infographics, work sheets (PDF)"
            style="text-transform: uppercase"
          >
            <p>Click Here to View</p>
            <router-link to="/recursos" class="colorWhite">
              <b-button variant="primary">
                <b-icon-download></b-icon-download>
              </b-button>
            </router-link>
          </b-jumbotron>
        </b-container>
      </div>

      <div class="pt-3" id="grad2">
        <div id="myModal" class="modal child">
          <div class="modalContent" id="GALERIA">
            <div class="mySlides" style="display:block">
              <div class="numbertext">1 / 4</div>
              <img
                src="@/assets//img/IMG_0377.jpg"
                alt="Character"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">1 / 4</div>
              <img
                src="@/assets//img/IMG_0365.jpg"
                alt="Character"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">1 / 4</div>
              <img
                src="@/assets//img/IMG_0264.jpg"
                alt="Character"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">1 / 4</div>
              <img
                src="@/assets//img/IMG_0236.jpg"
                alt="Character"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">2 / 4</div>
              <img
                src="@/assets//img/IMG_0258.jpg"
                alt="Diver"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/IMG_0408.jpg"
                alt="Barco"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/IMG_0169.jpg"
                alt="Barco"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/IMG_0171.jpg"
                alt="Barco"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/IMG_0174.jpg"
                alt="Barco"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/IMG_0184.jpg"
                alt="Barco"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/IMG_0194.jpg"
                alt="Barco"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/IMG_0412.jpg"
                alt="Barco"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/redesFondos.png"
                alt="Character"
                style="width:95%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/redes2.jpg"
                alt="Character"
                style="width:70%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/redesTecnica.png"
                alt="Character"
                style="width:95%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/redesAnguila.png"
                alt="Character"
                style="width:95%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/DSCN0258.jpg"
                alt="Character"
                style="width:70%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/DSCN0301.jpg"
                alt="Character"
                style="width:70%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/DSCN0310.jpg"
                alt="Character"
                style="width:70%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/DSCN0315.jpg"
                alt="Character"
                style="width:70%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/dardo-muestra-piel.jpg"
                alt="Character"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/Mother, calf and escort.png"
                alt="Character"
                style="width:95%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/muestras soplos.jpg"
                alt="Character"
                style="width:95%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/Photo-ID.jpg"
                alt="Character"
                style="width:80%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/RackMultipart20180729-7436-1g4yyeh.png"
                alt="Character"
                style="width:55%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/research_boat.png"
                alt="Character"
                style="width:100%"
              />
            </div>

            <div class="mySlides">
              <div class="numbertext">4 / 4</div>
              <img
                src="@/assets//img/Sountrap deployment.jpg"
                alt="Character"
                style="width:95%"
              />
            </div>

            <!-- Next/previous controls -->
            <a class="prev" @click="plusSlides(-1)"
              ><b-img
                src="@/assets//img/Pez1Hueco.png"
                width="75%"
                alt="Responsive image"
              ></b-img
            ></a>
            <a class="next" @click="plusSlides(1)"
              ><b-img
                src="@/assets//img/TortugaHueco.png"
                width="75%"
                alt="Responsive image"
              ></b-img
            ></a>

            <b-icon-info-circle-fill id="flecha" @click="showInfo" />
            <b-icon-arrow-bar-down id="cerrarInfo" @click="closeInfo" />

            <div class="animate-wrap is-hidden">
              <!-- Caption text -->
              <div class="caption-container animate-item FadeInBottom">
                <h3 id="caption"></h3>
                <p id="description"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer class="child"></Footer>
    </div>
  </div>
</template>

<script>
import { educacionTexts } from "../firebase";
import { redesTexts } from "../firebase";
import { plasticosTexts } from "../firebase";
import { reciclajeTexts } from "../firebase";
import { pescaTexts } from "../firebase";
import { educationTexts } from "../firebase";
export default {
  name: "Secundaria",
  watch: {
    $route(to, from) {
      if (this.$route.params.nombre === "educacion") {
        this.educacion = true;
        this.redes = false;
        this.plastico = false;
        this.reciclaje = false;
        this.pesca = false;
      }
      if (this.$route.params.nombre === "redes") {
        this.educacion = false;
        this.redes = true;
        this.plastico = false;
        this.reciclaje = false;
        this.pesca = false;
      }
      if (this.$route.params.nombre === "plastico") {
        this.educacion = false;
        this.redes = false;
        this.plastico = true;
        this.reciclaje = false;
        this.pesca = false;
      }
      if (this.$route.params.nombre === "reciclaje") {
        this.educacion = false;
        this.redes = false;
        this.plastico = false;
        this.reciclaje = true;
        this.pesca = false;
      }
      if (this.$route.params.nombre === "pesca") {
        this.educacion = false;
        this.redes = false;
        this.plastico = false;
        this.reciclaje = false;
        this.pesca = true;
      }
    }
  },
  created: function() {
    if (this.$route.params.nombre === "educacion") {
      this.educacion = true;
      this.redes = false;
      this.plastico = false;
      this.reciclaje = false;
      this.pesca = false;
    }
    if (this.$route.params.nombre === "redes") {
      this.educacion = false;
      this.redes = true;
      this.plastico = false;
      this.reciclaje = false;
      this.pesca = false;
    }
    if (this.$route.params.nombre === "plastico") {
      this.educacion = false;
      this.redes = false;
      this.plastico = true;
      this.reciclaje = false;
      this.pesca = false;
    }
    if (this.$route.params.nombre === "reciclaje") {
      this.educacion = false;
      this.redes = false;
      this.plastico = false;
      this.reciclaje = true;
      this.pesca = false;
    }
    if (this.$route.params.nombre === "pesca") {
      this.educacion = false;
      this.redes = false;
      this.plastico = false;
      this.reciclaje = false;
      this.pesca = true;
    }
  },
  mounted: function() {
    document
      .getElementsByClassName("snapSection")[0]
      .addEventListener("scroll", this.onScroll);
    educacionTexts.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        let text = doc.data();
        text.id = doc.id;
        this.educacionTexts.push(text);
      });
    });
    redesTexts.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        let text = doc.data();
        text.id = doc.id;
        this.redesTexts.push(text);
      });
    });
    plasticosTexts.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        let text = doc.data();
        text.id = doc.id;
        this.plasticosTexts.push(text);
      });
    });
    reciclajeTexts.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        let text = doc.data();
        text.id = doc.id;
        text.pregunta = text.pregunta.replace("br", "\n");
        this.reciclajeTexts.push(text);
      });
    });
    pescaTexts.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        let text = doc.data();
        text.id = doc.id;
        text.pregunta = text.pregunta.replace("br", "\n");
        this.pescaTexts.push(text);
      });
    });
    educationTexts.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        let text = doc.data();
        text.id = doc.id;
        text.question = text.question.replace("br", "\n");
        this.educationTexts.push(text);
      });
    });
    this.$root.$on("lang", eng => {
      this.eng = eng;
      console.log(this.eng);
    });
  },
  updated: function() {
    if (this.educacion) {
      document.getElementById("pregunta1").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0377.jpg") + ")";
      document.getElementById("pregunta2").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0365.jpg") + ")";
      document.getElementById("pregunta3").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0264.jpg") + ")";
    }
    if (this.redes) {
      document.getElementById("pregunta1").style.backgroundImage =
        "url(" + require("../assets/img/redesFondos.png") + ")";
      document.getElementById("pregunta2").style.backgroundImage =
        "url(" + require("../assets/img/redes2.jpg") + ")";
      document.getElementById("pregunta3").style.backgroundImage =
        "url(" + require("../assets/img/redesTecnica.png") + ")";
    }
    if (this.plastico) {
      document.getElementById("pregunta1").style.backgroundImage =
        "url(" + require("../assets/img/DSC_6981.jpg") + ")";
      document.getElementById("pregunta2").style.backgroundImage =
        "url(" + require("../assets/img/DSC_7024.jpg") + ")";
      document.getElementById("pregunta3").style.backgroundImage =
        "url(" + require("../assets/img/DSC_7061.jpg") + ")";
      document.getElementById("pregunta4").style.backgroundImage =
        "url(" + require("../assets/img/DSC_7004.jpg") + ")";
    }
    if (this.reciclaje) {
      document.getElementById("pregunta1").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0377.jpg") + ")";
      document.getElementById("pregunta2").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0365.jpg") + ")";
      document.getElementById("pregunta3").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0264.jpg") + ")";
      document.getElementById("pregunta4").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0236.jpg") + ")";
      document.getElementById("pregunta5").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0408.jpg") + ")";
      document.getElementById("pregunta6").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0258.jpg") + ")";
    }
    if (this.pesca) {
      document.getElementById("pregunta1").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0377.jpg") + ")";
      document.getElementById("pregunta2").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0365.jpg") + ")";
      document.getElementById("pregunta3").style.backgroundImage =
        "url(" + require("../assets/img/IMG_0264.jpg") + ")";
    }
  },
  beforeDestroy: function() {
    document
      .getElementsByClassName("snapSection")[0]
      .removeEventListener("scroll", this.onScroll);
  },
  data: function() {
    return {
      slideIndex: 1,
      descripciones: [
        "Descripción barco",
        "Descripción BG",
        "Descripción Character",
        "Descripción Diver",
        "Descripción barco",
        "Descripción Diver"
      ],
      educacion: false,
      redes: false,
      plastico: false,
      reciclaje: false,
      pesca: false,
      educacionTexts: [],
      redesTexts: [],
      plasticosTexts: [],
      reciclajeTexts: [],
      pescaTexts: [],
      educationTexts: [],
      eng: false
    };
  },
  methods: {
    ClickedMe: function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    },
    showSlides: function(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let captionText = document.getElementById("caption");
      let descriptionText = document.getElementById("description");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove(
          "activeSlide",
          "FadeInUp",
          "FadeOutBottom",
          "FadeOutUp",
          "FadeInBottom"
        );
      }
      slides[this.slideIndex - 1].style.display = "block";
      slides[this.slideIndex - 1].classList.add("activeSlide");
      captionText.innerHTML = slides[this.slideIndex - 1].getElementsByTagName(
        "img"
      )[0].alt;
      descriptionText.innerHTML = this.descripciones[this.slideIndex - 1];
    },
    currentSlide: function(n) {
      this.slideIndex = n;
      this.showSlides(this.slideIndex);
    },
    plusSlides: function(n) {
      this.showSlides((this.slideIndex += n));
    },
    showInfo: function() {
      this.showSlides(1);
      document
        .getElementsByClassName("activeSlide")[0]
        .classList.remove("FadeInUp");
      document
        .getElementsByClassName("animate-wrap")[0]
        .classList.remove("FadeOutBottom");
      document
        .getElementsByClassName("animate-wrap")[0]
        .classList.add("FadeInBottom");
      document.getElementsByClassName("animate-wrap")[0].style.display = "flex";
      document.getElementsByClassName("activeSlide")[0].style.display = "none";
      document.getElementById("cerrarInfo").style.display = "inline-block";
      document.getElementById("flecha").style.display = "none";
      document.getElementsByClassName("prev")[0].style.display = "none";
      document.getElementsByClassName("next")[0].style.display = "none";
    },
    closeInfo: function() {
      document
        .getElementsByClassName("activeSlide")[0]
        .classList.remove("FadeOutUp");
      document
        .getElementsByClassName("animate-wrap")[0]
        .classList.remove("FadeInBottom");
      document
        .getElementsByClassName("animate-wrap")[0]
        .classList.add("FadeOutBottom");
      document.getElementsByClassName("animate-wrap")[0].style.display = "none";
      document
        .getElementsByClassName("activeSlide")[0]
        .classList.add("FadeInUp");
      document.getElementsByClassName("activeSlide")[0].style.display = "block";
      document.getElementById("flecha").style.display = "inline-block";
      document.getElementById("cerrarInfo").style.display = "none";
      document.getElementsByClassName("prev")[0].style.display = "block";
      document.getElementsByClassName("next")[0].style.display = "block";
    },
    isElementinViewport: function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top <= 754) {
        return true;
      }
    },
    onScroll: function() {
      document.getElementById("myNav").style.backgroundColor =
        "rgba(255, 255, 255, 0.25)";
      let visible = this.isElementinViewport(
        document.getElementById("myModal")
      );
      if (visible) {
        document.getElementById("myNav").style.opacity = 0;
        document.getElementById("myNav").style.visibility = "hidden";
      } else {
        document.getElementById("myNav").style.opacity = 1;
        document.getElementById("myNav").style.visibility = "visible";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.sideMenu {
  font-size: 120%;
}
::v-deep .b-sidebar {
  width: 15%;
}
::v-deep .b-sidebar-body {
  overflow: hidden;
}
::v-deep .b-sidebar-header {
  padding: 30px;
}
.openSidebar {
  position: fixed;
  bottom: 5%;
  right: 4%;
  z-index: 100;
}
.fondoTarjeta {
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #ffffff00;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(255, 255, 255);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(153, 152, 152);
  }
}
.before-enter {
  width: 900px;
  height: 440px;
  margin-left: 60%;
  margin-top: 40%;
  padding-top: 2%;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 10%;
  background-color: rgba(0, 0, 0, 0.5);

  box-shadow: 10px 10px 16px -4px rgba(0, 0, 0, 0.56);
  color: white;
  text-align: left;
  text-transform: uppercase;
}
.enter {
  -webkit-animation: enter 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: enter 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes enter {
  0% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
  }
  100% {
    -webkit-transform: translateY(-5px) translateX(-5px);
    transform: translateY(-5px) translateX(-5px);
  }
}
@keyframes enter {
  0% {
    -webkit-transform: translateY(0) translateX(0);
    transform: translateY(0) translateX(0);
  }
  100% {
    -webkit-transform: translateY(-400px) translateX(-400px);
    transform: translateY(-480px) translateX(-400px);
  }
}
.snapSection {
  flex-basis: 50%;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  scroll-snap-type: y mandatory;
  &.proximity {
    scroll-snap-type: y proximity;
  }
}
.titulo {
  color: black;
  font-weight: 300;
  margin-top: 1%;
  margin-right: 19.25%;
  text-align: right;
}
.child {
  scroll-snap-align: start;
  height: 100vh;
}
#footer.child {
  height: 10%;
}
#grad1 {
  background-image: linear-gradient(white, #062d40);
}
#grad2 {
  background-color: black;
}
#grad3 {
  background: linear-gradient(white, #062d40);
}
#boton {
  background-color: rgba(255, 255, 255, 0);
}
#titulo {
  padding-top: 80px;
  color: #03141d;
}
#video {
  padding-top: 70px;
  padding-left: 100px;
  padding-right: 100px;
}
.content {
  color: white;
}
.snapSection::-webkit-scrollbar {
  display: none;
}
.subtitulo {
  white-space: pre;
}
.description {
  column-count: 2;
  column-gap: 40px;
  text-align: justify;
  text-justify: inter-word;
  color: white;
  font-weight: 300;
  text-transform: none;
  padding-right: 1%;
}
#logos {
  padding-top: 45px;
  padding-bottom: 40px;
  color: white;
  font-size: 25px;
  background-color: #03141d;
}
.stripe {
  height: 3px;
  background: rgb(180, 58, 58);
  background: linear-gradient(
    90deg,
    rgba(180, 58, 58, 1) 0%,
    rgba(145, 44, 192, 1) 25%,
    rgba(81, 70, 169, 1) 40%,
    rgba(29, 252, 253, 1) 57%,
    rgba(49, 253, 144, 1) 75%,
    rgba(184, 253, 49, 1) 89%
  );
}
.parallax {
  /* The image used */
  background-image: url("https://imgur.com/nLylsqL.jpg");
  /* Set a specific height */
  height: 750px;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#pregunta1 {
  /* The image used */
  color: Black;
  /* Set a specific height */
  height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#pregunta2 {
  /* The image used */
  color: Black;
  /* Set a specific height */
  height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
#pregunta3 {
  /* The image used */
  color: Black;
  /* Set a specific height */
  height: 100vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#pregunta4 {
  /* The image used */
  color: Black;
  /* Set a specific height */
  height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#pregunta5 {
  /* The image used */
  color: Black;
  /* Set a specific height */
  height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#pregunta6 {
  /* The image used */
  color: Black;
  /* Set a specific height */
  height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.jumbo {
  background-color: rgba(0, 0, 0, 0.37);
  padding-top: 120px;
}
.bodySecu {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
  overflow-y: hidden;
}
.modal {
  display: block;
  position: relative;
  z-index: 1;
  padding-top: 3%;
  left: 0;
  top: 0;
  width: 100%;
  height: 900px;
  overflow: auto;
  background-color: black;
}
.modal::-webkit-scrollbar {
  display: none;
}
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}
.mySlides {
  display: none;
  padding: 15%;
  padding-top: 0;
  padding-bottom: 0;
}

.mySlides img {
  max-height: 80%;
}
/* Next & previous buttons */
.next {
  cursor: pointer;
  position: absolute;
  top: 35%;
  right: 7%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}
.prev {
  cursor: pointer;
  position: absolute;
  top: 35%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
  left: 7%;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
/* Number text (1/3 etc) */
.numbertext {
  color: #5db9d1;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 72%;
  left: 7%;
}
/* Caption text */
.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
  font-size: 20px;
}
.hover-shadow {
  transition: 0.3s;
}
.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#flecha {
  width: 2%;
  height: 2%;
  margin-top: 2%;
  color: #5db9d1;
}
#cerrarInfo {
  width: 2%;
  height: 2%;
  margin-top: 1%;
  display: none;
}
.FadeInBottom {
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.25, 0, 0.15, 1);
  animation-name: fadeInBottom;
}
@keyframes fadeInBottom {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  75% {
    transform: none;
  }
  100% {
    opacity: 1;
  }
}
.FadeInUp {
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.25, 0, 0.15, 1);
  animation-name: fadeInUp;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  75% {
    transform: none;
  }
  100% {
    opacity: 1;
  }
}
.animate-wrap {
  position: relative;
  top: 50%;
  right: 0;
  left: 0;
  bottom: 0;
  perspective: 1500px;
  display: block;
  height: 30%;
  align-items: center;
  justify-content: center;
  margin-top: 4%;
}
.animate-item {
  background: #222;
  padding: 1em 2em;
  color: #eee;
  width: 800px;
  height: 300px;
}
.is-hidden {
  display: none;
}
.FadeOutUp {
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.25, 0, 0.15, 1);
  animation-name: fadeOutUp;
}
@keyframes fadeOutUp {
  0% {
    opacity: 1;
    transform: translateY(100%);
  }
  75% {
    transform: none;
  }
  100% {
    opacity: 0;
  }
}
.FadeOutBottom {
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.25, 0, 0.15, 1);
  animation-name: fadeOutBottom;
}
@keyframes fadeOutBottom {
  0% {
    opacity: 1;
    transform: translateY(-100%);
  }
  75% {
    transform: none;
  }
  100% {
    opacity: 0;
  }
}
@media only screen and (max-width: 850px) {
  #video {
    padding-left: 0px;
    padding-right: 0px;
  }
  .child {
    scroll-snap-align: start;
  }
  .before-enter {
    display: none;
  }
  ::v-deep .b-sidebar {
    width: 55%;
  }
  .fondoSide {
    margin-top: 20%;
  }
  .jumbo {
    padding-top: 0%;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1280px) {
  .child {
    scroll-snap-align: start;
  }
  ::v-deep .navbar {
    padding-right: 20%;
  }
  ::v-deep .b-sidebar {
    width: 22%;
  }
  .parallax {
    height: 800px;
  }
  .jumbo {
    margin-top: 5%;
  }

  @keyframes enter {
    0% {
      -webkit-transform: translateY(0) translateX(0);
      transform: translateY(0) translateX(0);
    }
    100% {
      -webkit-transform: translateY(-400px) translateX(-400px);
      transform: translateY(-400px) translateX(-400px);
    }
  }
  #GALERIA {
    padding-top: 10%;
  }
}
</style>
