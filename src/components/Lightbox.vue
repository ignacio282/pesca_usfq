<template>
  <div class="lightbox">
    <b-container fluid class="wrap">
      <b-row>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/ConcepstBarco.jpg"
            width="100%"
            alt="Barco"
            class="hover-shadow image"
            @click="openModal(); currentSlide(1);"
          />
          <div class="middle">
            <p class="h1 mb-2">
              <b-icon-arrows-fullscreen @click="openModal"></b-icon-arrows-fullscreen>
            </p>
          </div>
        </b-col>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/ConcepstBG1.jpg"
            width="100%"
            alt="BG"
            class="hover-shadow image"
            @click="openModal(); currentSlide(2);"
          />
          <div class="middle">
            <p class="h1 mb-2">
              <b-icon-arrows-fullscreen @click="openModal"></b-icon-arrows-fullscreen>
            </p>
          </div>
        </b-col>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/ConcepstCharacter.jpg"
            width="100%"
            alt="Character"
            class="hover-shadow image"
            @click="openModal(); currentSlide(3);"
          />
          <div class="middle">
            <p class="h1 mb-2">
              <b-icon-arrows-fullscreen @click="openModal"></b-icon-arrows-fullscreen>
            </p>
          </div>
        </b-col>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/Concepts_Diver.jpg"
            width="100%"
            alt="Diver"
            class="hover-shadow image"
            @click="openModal(); currentSlide(4);"
          />
          <div class="middle">
            <p class="h1 mb-2">
              <b-icon-arrows-fullscreen @click="openModal"></b-icon-arrows-fullscreen>
            </p>
          </div>
        </b-col>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/Concepts_Diver.jpg"
            width="100%"
            alt="Diver"
            class="hover-shadow image"
            @click="openModal(); currentSlide(5);"
          />
          <div class="middle">
            <p class="h1 mb-2">
              <b-icon-arrows-fullscreen @click="openModal"></b-icon-arrows-fullscreen>
            </p>
          </div>
        </b-col>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/ConcepstBarco.jpg"
            width="100%"
            alt="Barco"
            class="hover-shadow image"
            @click="openModal(); currentSlide(6);"
          />
          <div class="middle">
            <p class="h1 mb-2">
              <b-icon-arrows-fullscreen @click="openModal"></b-icon-arrows-fullscreen>
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div id="myModal" class="modal">
      <span class="close cursor" @click="closeModal">&times;</span>
      <div class="modalContent">
        <div class="mySlides">
          <div class="numbertext">1 / 6</div>
          <img src="@/assets//img/ConcepstBarco.jpg" alt="Barco" style="width:100%" />
        </div>

        <div class="mySlides">
          <div class="numbertext">2 / 6</div>
          <img src="@/assets//img/ConcepstBG1.jpg" alt="BG" style="width:100%" />
        </div>

        <div class="mySlides">
          <div class="numbertext">3 / 6</div>
          <img src="@/assets//img/ConcepstCharacter.jpg" alt="Character" style="width:100%" />
        </div>

        <div class="mySlides">
          <div class="numbertext">4 / 6</div>
          <img src="@/assets//img/Concepts_Diver.jpg" alt="Diver" style="width:100%" />
        </div>

        <div class="mySlides">
          <div class="numbertext">5 / 6</div>
          <img src="@/assets//img/Concepts_Diver.jpg" alt="Diver" style="width:100%" />
        </div>

        <div class="mySlides">
          <div class="numbertext">6 / 6</div>
          <img src="@/assets//img/ConcepstBarco.jpg" alt="Barco" style="width:100%" />
        </div>

        <!-- Next/previous controls -->
        <a class="prev" @click="plusSlides(-1);">&#10094;</a>
        <a class="next" @click="plusSlides(1);">&#10095;</a>

        <b-icon-arrow-bar-up id="flecha" @click="showInfo"/>
        <b-icon-arrow-bar-down id="cerrarInfo" @click="closeInfo"/>

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
</template>

<script>
export default {
  name: "Lightbox",
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
      ]
    };
  },
  methods: {
    openModal: function() {
      document.getElementById("myModal").style.display = "block";
      document.getElementById("myNav").style.display = "none";
      document.body.style.overflow = "hidden";
    },
    closeModal: function() {
      document.getElementById("myModal").style.display = "none";
      document.getElementById("myNav").style.display = "flex";
      document.body.style.overflow = "auto";
      document.getElementsByClassName("animate-wrap")[0].style.display = "none";
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
        slides[i].classList.remove("activeSlide", "FadeInUp", "FadeOutBottom", "FadeOutUp", "FadeInBottom");
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
    showInfo: function(){
      document.getElementsByClassName("activeSlide")[0].classList.remove("FadeInUp");
      document.getElementsByClassName("animate-wrap")[0].classList.remove("FadeOutBottom");
      document.getElementsByClassName("animate-wrap")[0].classList.add("FadeInBottom");
      document.getElementsByClassName("animate-wrap")[0].style.display = "flex";
      document.getElementsByClassName("activeSlide")[0].style.display = "none";
      document.getElementById("cerrarInfo").style.display = "inline-block";
      document.getElementById("flecha").style.display = "none";
      document.getElementsByClassName("prev")[0].style.display = "none";
      document.getElementsByClassName("next")[0].style.display = "none";
    },
    closeInfo: function(){
      document.getElementsByClassName("activeSlide")[0].classList.remove("FadeOutUp");
      document.getElementsByClassName("animate-wrap")[0].classList.remove("FadeInBottom");
      document.getElementsByClassName("animate-wrap")[0].classList.add("FadeOutBottom");
      document.getElementsByClassName("animate-wrap")[0].style.display = "none";
      document.getElementsByClassName("activeSlide")[0].classList.add("FadeInUp");
      document.getElementsByClassName("activeSlide")[0].style.display = "block";
      document.getElementById("flecha").style.display = "inline-block";
      document.getElementById("cerrarInfo").style.display = "none";
      document.getElementsByClassName("prev")[0].style.display = "block";
      document.getElementsByClassName("next")[0].style.display = "block";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.images {
  padding-bottom: 1%;
}

.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 3%;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
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

.close {
  color: white;
  position: relative;
  top: -5%;
  right: 10px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

.mySlides {
  display: none;
  padding: 15%;
  padding-top: 0;
  padding-bottom: 0;
}

/* Next & previous buttons */
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 85%;
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
  top: 50%;
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

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 95%;
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

.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.images:hover .image {
  opacity: 0.3;
}

.images:hover .middle {
  opacity: 1;
}
.image {
  opacity: 1;

  transition: 0.5s ease;
}

#flecha {
  width: 2%;
  height: 2%;
  margin-top: 1%;
}

#cerrarInfo{
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

.FadeInUp{
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

.animate-wrap{
  position: fixed;
  top: 25%;
  right: 0;
  left: 0;
  bottom: 0;
  perspective: 1500px;
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: center;
}

.animate-item{
  background: #222;
  padding: 1em 2em;
  color: #eee;
  width: 800px;
  height: 300px;
}

.is-hidden {
  display: none;
}

.FadeOutUp{
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.25, 0, 0.15, 1);
  animation-name: fadeOutUp;
}

@keyframes fadeOutUp {
  0%{
    opacity: 1;
    transform: translateY(100%);
  }
  75%{
    transform: none;
  }
  100%{
    opacity: 0;
  }
}

.FadeOutBottom{
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.25, 0, 0.15, 1);
  animation-name: fadeOutBottom;
}

@keyframes fadeOutBottom {
  0%{
    opacity: 1;
    transform: translateY(-100%);
  }
  75%{
    transform: none;
  }
  100%{
    opacity: 0;
  }
}
</style>