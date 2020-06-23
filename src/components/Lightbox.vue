<template>
  <div class="lightbox">
    <b-container fluid>
      <b-row>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/ConcepstBarco.jpg"
            width="100%"
            alt="Barco"
            class="hover-shadow"
            @click="openModal(); currentSlide(1);"
          />
        </b-col>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/ConcepstBG1.jpg"
            width="100%"
            alt="BG"
            class="hover-shadow"
            @click="openModal(); currentSlide(2);"
          />
        </b-col>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/ConcepstCharacter.jpg"
            width="100%"
            alt="Character"
            class="hover-shadow"
            @click="openModal(); currentSlide(3);"
          />
        </b-col>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/Concepts_Diver.jpg"
            width="100%"
            alt="Diver"
            class="hover-shadow"
            @click="openModal(); currentSlide(4);"
          />
        </b-col>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/Concepts_Diver.jpg"
            width="100%"
            alt="Diver"
            class="hover-shadow"
            @click="openModal(); currentSlide(5);"
          />
        </b-col>
        <b-col cols="12" md="4" lg="3" class="images">
          <img
            src="@/assets//img/ConcepstBarco.jpg"
            width="100%"
            alt="Barco"
            class="hover-shadow"
            @click="openModal(); currentSlide(6);"
          />
        </b-col>
      </b-row>
    </b-container>
    <div id="myModal" class="modal">
        <span class="close cursor" @click="closeModal">&times;</span>
        <div class="modalContent">
          <!-- Caption text -->
          <div class="caption-container">
            <p id="caption"></p>
          </div>

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
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Lightbox",
  data: function() {
    return {
      slideIndex: 1
    };
  },
  methods: {
    openModal: function() {
      document.getElementById("myModal").style.display = "block";
    },
    closeModal: function() {
      document.getElementById("myModal").style.display = "none";
    },
    showSlides: function(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let captionText = document.getElementById("caption");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[this.slideIndex - 1].style.display = "block";
      captionText.innerHTML = slides[this.slideIndex - 1].getElementsByTagName("img")[0].alt;
    },
    currentSlide: function(n) {
      this.slideIndex = n;
      this.showSlides(this.slideIndex);
    },
    plusSlides: function(n) {
      this.showSlides((this.slideIndex += n));
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
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

.modal::-webkit-scrollbar{
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
  top: 0px;
  right: 20px;
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
  padding: 5%;
  padding-top: 0;
}

/* Next & previous buttons */
.next {
  cursor: pointer;
  position: absolute;
  top: 70%;
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
  top: 70%;
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
  left: 0;
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
  top: 0;
}

/* Caption text */
.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>