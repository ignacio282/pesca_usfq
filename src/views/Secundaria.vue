<template>
  <div class="pr-0 content bodySecu">
    <NavBar></NavBar>
    <div class="snapSection pr-0">
      <div class="pb-5 pt-2" id="grad1">
        <div class="child">
          <h1 class="text-center pb-3" id="titulo">TITULO</h1>
          <div class="container" id="video">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/mzJj5-lubeM"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div class="container pt-5 pb-3 child">
          <h2 class="text-center pt-5 pb-4">DESCRIPCION</h2>
          <div v-scrollanimation>
             
          </div>
        </div>
      </div>
      <div class="stripe"></div>
      <div class="parallax child">
        <b-container style="padding-top:120px">
          <b-jumbotron class="jumbo" header="Conservación" lead="Cuida el mar">
            <p>Para mas info haz click aqui</p>
            <b-button variant="primary" href="#">Info</b-button>
          </b-jumbotron>
        </b-container>
      </div>

      <div class="pb-5 " id="grad2">
        <div class="stripe child"></div>
        <h2 style="color:white" class="text-center pt-5 pb-5">GALERIA</h2>

        <div class="row row-cols-3">
          <div class="col mb-4">
            <b-button id="boton" class="border-0" squared v-b-modal.modal-1>
              <img src="https://via.placeholder.com/400" alt="..." />
              <b-modal id="modal-1" title="BootstrapVue">
                <img
                  src="https://via.placeholder.com/400"
                  class="card-img-top"
                  alt="..."
                />
              </b-modal>
            </b-button>
          </div>

          <div class="col mb-4">
            <b-button id="boton" class="border-0" v-b-modal="'modal-2'">
              <img src="https://via.placeholder.com/400" alt="..." />
              <b-modal id="modal-2" title="BootstrapVue">
                <img
                  src="https://via.placeholder.com/400"
                  class="card-img-top"
                  alt="..."
                />
              </b-modal>
            </b-button>
          </div>
          <div class="col mb-4">
            <b-button id="boton" class="border-0" v-b-modal="'modal-3'">
              <img src="https://via.placeholder.com/400" alt="..." />
              <b-modal id="modal-3" title="BootstrapVue">
                <img
                  src="https://via.placeholder.com/400"
                  class="card-img-top"
                  alt="..."
                />
              </b-modal>
            </b-button>
          </div>
          <div class="col mb-4">
            <b-button id="boton" class="border-0" v-b-modal="'modal-4'">
              <img src="https://via.placeholder.com/400" alt="..." />
              <b-modal id="modal-4" title="BootstrapVue">
                <img
                  src="https://via.placeholder.com/400"
                  class="card-img-top"
                  alt="..."
                />
              </b-modal>
            </b-button>
          </div>
          <div class="col mb-4">
            <b-button id="boton" class="border-0" v-b-modal="'modal-5'">
              <img src="https://via.placeholder.com/400" alt="..." />
              <b-modal id="modal-5" title="BootstrapVue">
                <img
                  src="https://via.placeholder.com/400"
                  class="card-img-top"
                  alt="..."
                />
              </b-modal>
            </b-button>
          </div>
          <div class="col mb-4">
            <b-button id="boton" class="border-0" v-b-modal="'modal-6'">
              <img src="https://via.placeholder.com/400" alt="..." />
              <b-modal id="modal-6" title="BootstrapVue">
                <img
                  src="https://via.placeholder.com/400"
                  class="card-img-top"
                  alt="..."
                />
              </b-modal>
            </b-button>
          </div>
        </div>

        <!-- modales-->
        <div
          class="modal fade"
          id="myModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Redes marinas
                </h5>
              </div>
              <div class="modal-body">
                <img
                  src="https://via.placeholder.com/400"
                  class="card-img-top"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <!-- fin modales-->
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String,
  },
  methods: {
    ClickedMe: function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    },

  },
};
</script>

<style scoped lang="scss">
.before-enter {
  width: 900px;
  height: 500px;
  margin-left: 60%;
  margin-top: 50%;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 10px 10px;
  box-shadow: 10px 10px 16px -4px rgba(0, 0, 0, 0.56);
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
    transform: translateY(-530px) translateX(-300px);
  }
}

.snapSection {
  flex-basis: 50%;
  max-height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid gray;
  scroll-snap-type: y mandatory;
  &.proximity {
    scroll-snap-type: y proximity;
  }
}

.child {
  scroll-snap-align: start;
  height: 100%;
}

#grad1 {
  background-image: linear-gradient(#399ebc, #062d40);
}
#grad2 {
  background-image: linear-gradient(#062d40, #010c13);
}
#boton {
  background-color: rgba(255, 255, 255, 0);
}
#titulo {
  padding-top: 80px;
}
#video {
  padding-left: 100px;
  padding-right: 100px;
}
.content {
  color: white;
}
.description {
  column-count: 2;
  column-gap: 40px;
  text-align: justify;
  text-justify: inter-word;
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
</style>
