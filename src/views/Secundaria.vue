<template>
  <div class="secundaria">
    <h1 class="text-center pt-5 pb-5">TITULO</h1>
    <div class="container pl-5 pr-5">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="container pt-5">
      <h2 class="text-center pt-5 pb-5">DESCRIPCION</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta
        vehicula tortor, quis porta lectus dictum non. Curabitur vel molestie
        leo. Vivamus nisi sapien, porttitor in lorem at, vulputate dapibus erat.
        Morbi vehicula eros justo, a porttitor velit lacinia sit amet. Donec
        vehicula eleifend eleifend. Morbi sagittis pharetra quam nec sodales.
        Donec in nulla suscipit, lobortis felis dictum, laoreet sapien. Fusce
        maximus tellus a urna fermentum, ut elementum leo rutrum. Vestibulum at
        diam ac purus imperdiet finibus. Praesent ut felis dolor. Duis pulvinar
        ipsum vel blandit condimentum. Donec efficitur a risus a malesuada.
        Praesent bibendum felis ut dictum mattis. Duis at nunc arcu. Duis et
        eleifend tortor. Mauris consectetur metus eget elit ultrices, et dictum
        risus viverra. Donec tempor nibh eleifend porttitor dictum. Vivamus
        maximus nisl leo, eget mattis eros aliquet quis. Sed vestibulum lectus
        turpis, id malesuada lectus malesuada et. Morbi nec sapien vel libero
        congue efficitur pellentesque vitae metus. Morbi accumsan ullamcorper
        nunc sit amet pulvinar. Vestibulum tincidunt, urna sed sollicitudin
        consectetur, ante orci porta lacus, eget tincidunt urna erat in mauris.
        Pellentesque sem sem, porta vel lacus malesuada, iaculis malesuada ex.
        Aliquam accumsan arcu velit, non ultricies lacus malesuada eget.
        Suspendisse tellus nisl, ullamcorper et faucibus eu, pharetra vel augue.
        Nullam urna justo, fringilla sit amet lectus ut, malesuada mollis sem.
        Vestibulum nec pellentesque justo. Etiam non egestas ipsum, eget tempor
        lacus. Proin egestas, nisi non congue ornare, turpis sem scelerisque
        nulla, a pellentesque tellus mauris id odio. Maecenas vitae tristique
        est. Cras at nisl condimentum, malesuada eros sed, ultrices massa. Donec
        faucibus felis vitae est fringilla mollis at a elit. Aliquam tempor enim
        nulla. Donec vel mattis nibh. Donec euismod, ante sit amet pulvinar
        pretium, ante lectus porta nunc, sed porttitor nibh elit quis mauris.
        Aliquam erat volutpat. Quisque id tincidunt ante. Aenean malesuada
        lobortis tortor, vel mollis nulla porttitor vel. Cras vel ex in justo
        rutrum vulputate in vel ex. Sed ultrices mi mollis tempus congue.
        Vivamus at efficitur metus. Quisque semper nisl sit amet risus
        consectetur, ornare tincidunt nulla aliquam. Etiam eu nunc elementum,
        imperdiet dui et, varius dui. Etiam sit amet lacus augue. Aenean
        malesuada suscipit metus vitae lacinia.
      </p>
    </div>
    <div class="container pb-5">
      <h2 class="text-center pt-5 pb-5">GALERIA</h2>

      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4">
          <button type="button" class="btn btn btn-link" data-toggle="modal" data-target="#myModal">
            <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
          </button>
        </div>

        <div class="col mb-4">
          <button type="button" class="btn btn btn-link" data-toggle="modal" data-target="#myModal">
            <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
          </button>
        </div>
        <div class="col mb-4">
          <button type="button" class="btn btn btn-link" data-toggle="modal" data-target="#myModal">
            <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
          </button>
        </div>
        <div class="col mb-4">
          <button type="button" class="btn btn btn-link" data-toggle="modal" data-target="#myModal">
            <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
          </button>
        </div>
        <div class="col mb-4">
          <button type="button" class="btn btn btn-link" data-toggle="modal" data-target="#myModal">
            <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
          </button>
        </div>
        <div class="col mb-4">
          <button type="button" class="btn btn btn-link" data-toggle="modal" data-target="#myModal">
            <img src="https://via.placeholder.com/400" class="card-img-top" alt="..." />
          </button>
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
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
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

<style scoped lang="scss"></style>
