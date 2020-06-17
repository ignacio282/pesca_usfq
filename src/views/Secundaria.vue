<template>
  <div class="pt-5 pr-0 content bodySecu">
    <NavBar></NavBar>


        <div class="pb-5 pt-2" id="grad1">
          <h1 class="text-center pb-5" id="titulo">TITULO</h1>
          <div class="container" id="video">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe
                class="embed-responsive-item"
                src="https://www.youtube.com/embed/mzJj5-lubeM"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="container pt-5">
            <h2 class="text-center pt-5 pb-5">DESCRIPCION</h2>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta
              vehicula tortor, quis porta lectus dictum non. Curabitur vel
              molestie leo. Vivamus nisi sapien, porttitor in lorem at, vulputate
              dapibus erat. Morbi vehicula eros justo, a porttitor velit lacinia
              sit amet. Donec vehicula eleifend eleifend. Morbi sagittis pharetra
              quam nec sodales. Donec in nulla suscipit, lobortis felis dictum,
              laoreet sapien. Fusce maximus tellus a urna fermentum, ut elementum
              leo rutrum. Vestibulum at diam ac purus imperdiet finibus. Praesent
              ut felis dolor. Duis pulvinar ipsum vel blandit condimentum. Donec
              efficitur a risus a malesuada. Praesent bibendum felis ut dictum
              mattis. Duis at nunc arcu. Duis et eleifend tortor. Mauris
              consectetur metus eget elit ultrices, et dictum risus viverra. Donec
              tempor nibh eleifend porttitor dictum. Vivamus maximus nisl leo,
              eget mattis eros aliquet quis. Sed vestibulum lectus turpis, id
              malesuada lectus malesuada et. Morbi nec sapien vel libero congue
              efficitur pellentesque vitae metus. Morbi accumsan ullamcorper nunc
              sit amet pulvinar. Vestibulum tincidunt, urna sed sollicitudin
              consectetur, ante orci porta lacus, eget tincidunt urna erat in
              mauris. Pellentesque sem sem, porta vel lacus malesuada, iaculis
              malesuada ex. Aliquam accumsan arcu velit, non ultricies lacus
              malesuada eget. Suspendisse tellus nisl, ullamcorper et faucibus eu,
              pharetra vel augue. Nullam urna justo, fringilla sit amet lectus ut,
              malesuada mollis sem. Vestibulum nec pellentesque justo. Etiam non
              egestas ipsum, eget tempor lacus. Proin egestas, nisi non congue
              ornare, turpis sem scelerisque nulla, a pellentesque tellus mauris
              id odio. Maecenas vitae tristique est. Cras at nisl condimentum,
              malesuada eros sed, ultrices massa. Donec faucibus felis vitae est
              fringilla mollis at a elit. Aliquam tempor enim nulla. Donec vel
              mattis nibh. Donec euismod, ante sit amet pulvinar pretium, ante
              lectus porta nunc, sed porttitor nibh elit quis mauris. Aliquam erat
              volutpat. Quisque id tincidunt ante. Aenean malesuada lobortis
              tortor, vel mollis nulla porttitor vel. Cras vel ex in justo rutrum
              vulputate in vel ex. Sed ultrices mi mollis tempus congue. Vivamus
              at efficitur metus. Quisque semper nisl sit amet risus consectetur,
              ornare tincidunt nulla aliquam. Etiam eu nunc elementum, imperdiet
              dui et, varius dui. Etiam sit amet lacus augue. Aenean malesuada
              suscipit metus vitae lacinia.
            </p>
          </div>
        </div>
        <div class="stripe"></div>
        <div class="parallax">
          <b-container class="pt-5">
            <b-jumbotron
              class="jumbo"
              header="Conservación"
              lead="Cuida el mar"
            >
              <p>Para ams info haz click aqui</p>
              <b-button variant="primary" href="#">Info</b-button>
            </b-jumbotron>
          </b-container>
        </div>
        
        <div class="pb-5">
          <div class="stripe"></div>
          <h2 style="color:black" class="text-center pt-5 pb-5">GALERIA</h2>

          <div class="row row-cols-1 row-cols-md-3">
            <div class="col mb-4">
              <b-button v-b-modal.modal-1>
                <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                <b-modal id="modal-1" title="BootstrapVue">
                  <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                </b-modal>
              </b-button>
            </div>

            <div class="col mb-4">
              <b-button v-b-modal="'modal-2'">
                <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                <b-modal id="modal-2" title="BootstrapVue">
                  <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                </b-modal>
              </b-button>
            </div>
            <div class="col mb-4">
              <b-button v-b-modal="'modal-3'">
                <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                <b-modal id="modal-3" title="BootstrapVue">
                  <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                </b-modal>
              </b-button>
            </div>
            <div class="col mb-4">
              <b-button v-b-modal="'modal-4'">
                <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                <b-modal id="modal-4" title="BootstrapVue">
                  <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                </b-modal>
              </b-button>
            </div>
            <div class="col mb-4">
              <b-button v-b-modal="'modal-5'">
                <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                <b-modal id="modal-5" title="BootstrapVue">
                  <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                </b-modal>
              </b-button>
            </div>
            <div class="col mb-4">
              <b-button v-b-modal="'modal-6'">
                <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                <b-modal id="modal-6" title="BootstrapVue">
                  <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
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
                  <h5 class="modal-title" id="exampleModalLabel">Redes marinas</h5>
                </div>
                <div class="modal-body">
                  <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <!-- fin modales-->
        </div>

    <Footer></Footer>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String
  },
  methods: {
    ClickedMe: function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    }
  }
};
</script>

<style scoped lang="scss">
#grad1 {
  background-image: linear-gradient(#399ebc, #062d40);
}

#titulo {
  padding-top: 75px;
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
  padding-top: 60px;
  padding-bottom: 40px;
  color: white;
  font-size: 25px;
  background-color: #154e64;
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
  height: 600px;

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
.bodySecu
{
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden; 
}
</style>
