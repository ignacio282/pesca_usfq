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
          Los ALDF se refieren a los desechos de pesca abandonados, perdidos o
          descardados (en inglés abandoned, lost or discarded fishing gear)
          tanto en zonas costeras como ambientes submarinos (Macfadyen et al
          2011). Cuando las redes de pesca se encuentran a la deriva (sin
          control en su operación por pescadores) pueden seguir atrapando
          especies marinas y provocar la ¨pesca fantasma¨ (NOAA, 2015). En la
          década de 1960 se elaborarán redes de pesca utilizando materiales de
          rápida degradación como el algodón y el cáñamo (Kim et al, 2016).
          Posteriormente, los avances en la tecnología permitieron mejorar el
          diseño de las artes de pesca y la materia prima fue cambiando a fibras
          plásticas de mayor durabilidad y resistencia. Por ejemplo, se
          elaboraron redes con materiales de poliamida (nylon), polietileno y
          polipropileno, los cuales se demoran décadas en degradarse (Brandt
          1984; Stelfox et al, 2016). Esto ha causado que las artes de pesca
          abandonadas o perdidas se acumulen en grandes cantidades en los
          océanos y estén causen impactos considerables a corto y largo plazo
          (Stelfox et al, 2016).
        </p>
        <h5 class="p-3">
          ¿Cuál es el impacto de las redes fantasma en
          arrecifes rocosos?
        </h5>
        <p class="description">
          Las redes fantasmas pueden seguir atrapando y
          matando a distintas especies marinas amenazadas y en peligro de
          extinción como tortugas, peces, invertebrados, aves e inclusive
          mamíferos marinos (Stelfox et al, 2016). Específicamente, los
          descartes o desechos de redes fantasmas originados de prácticas
          pesqueras comerciales y artesanales pueden ocasionar considerables
          cambios en la dinámica de las comunidades bióticas y ecosistemas
          marinos (Macfadyen et al 2009; Wilcox etl 2014). Se ha evidenciado que
          las redes fantasma sirven como trampas de sedimentos, lo cual podría
          provocar altas tasas de mortalidad en comunidades sensibles como los
          corales de arrecifes (Risk and Edinger 2011; Erftemeijer et al 2012).
          Por ejemplo, es conocido que las redes fantasma pueden poner en riesgo
          a la mayoría de las comunidades de corales que habitan en los
          arrecifes rocosos; modificando su estructura y crecimiento debido a
          procesos de fragmentación y fracturación (Risk et al., 2001;
          Valderrama et al 2018; Figueroa et al 2020). Existe muy poca
          información sobre la magnitud del impacto de los desechos pesqueros y
          mucho menos sobre los efectos que pueden causar las distintas artes de
          pesquerías artesanales cuando se encuentran a la deriva y/o caen en
          los fondos marinos ( Link et al 2019)
        </p>
        <h5 class="p-3">
          ¿Cuál es la situación actual
          de la problemática de redes fantasma en el ambiente?
        </h5>

        <p class="description">
          Se estima que 6.4
          millones de toneladas de desechos son arrojados a los océanos
          anualmente. Las artes de pesca descartadas o abandonadas conforman más
          del 10% del volumen total de dichos residuos plásticos (Stelfox et al,
          2016; Gilman et al, 2016). Una reciente estimación hasta el 2017 sobre
          desechos pesqueros, indican que 5,7 % de todas las redes, 8,6 % de
          todas las trampas y 29% de todas las líneas (nylon) pesqueras se han
          perdido en todos los océanos del mundo (Richardson et al 2019). La
          cantidad, distribución e impacto de las artes de pesca abandonadas han
          aumentado sustancialmente en las últimas décadas debido al crecimiento
          de la actividad pesquera y la transición a materiales sintéticos más
          duraderos y boyantes para su elaboración (Stelfox et al, 2016;
          Valderrama et al, 2018). En la región de Sudamérica, existe muy pocos
          datos reportados sobre las causas de abandono, pérdidas o descartes de
          desechos pesqueros, lo cual ha limitado la implementación de
          estrategias de manejo y respuesta ante la problemática (Richardson et
          al 2019). Existen innumerables causas por las cuales las artes de
          pesca son abandonadas, pérdidas o descartadas. Por ejemplo, cuando se
          enganchan en el fondo marino, se rompen a causa de las malas
          condiciones ambientales, fallas operativos, e inclusive pueden
          desecharse por la falta de espacio en las embarcaciones pesqueras
          (Gilman et al, 2016; Richardson et al 2018). Una vez que existe la
          acumulación de redes fantasma en ecosistemas como los arrecifes rocos,
          se presenta la dificultad logística en recuperar las redes sin dañar a
          los corales (Valderrama et al, 2018), incluyendo la recolección y
          almacenamiento adecuado de las redes pesqueras en tierra (Stelfox et
          al, 2016;). Por lo tanto, para mitigar los impactos de las redes
          fantasmas y conservación de los ecosistemas marinos aún es importante
          el trabajo colaborativo entre ONGs, comunidades locales, agencias
          gubernamentales, academia, y autoridades pesqueras tanto nacionales y
          regionales (Richardson et al 2018).
        </p>
      </div>
    </div>
    <div class="stripe"></div>
    <div class="parallax">
      <b-container class="pt-5">
        <b-jumbotron class="jumbo" header="Conservación" lead="Cuida el mar">
          <p>Para ams info haz click aqui</p>
          <b-button variant="primary" href="#">Info</b-button>
        </b-jumbotron>
      </b-container>
    </div>

    <div class="pb-5" id="grad2">
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
#grad2 {
  background-image: linear-gradient(#062d40, #010c13);
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
.bodySecu {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow-x: hidden;
}
</style>
