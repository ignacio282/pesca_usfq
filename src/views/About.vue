<template>
  <div class="about">
    <NavBar />
    <b-container fluid class="contenedorAbout">
      <b-row id="rows">
        <b-col lg="6" sm="12" id="colText">
          <h3 class="mb-4" style="font-weight: 300">El Proyecto</h3>
          <h5 class="mb-4" style="font-weight: 500">Proyecto Redes Fantasma y Regeneración de Ecosistemas</h5>
          <p style="font-size: 18px">
            El proyecto de vinculación “Regeneración de Ecosistemas” de la
            Universidad San Francisco de Quito (USFQ) es una iniciativa de los
            colegios de Biología, Ciencias de la Salud y Comunicación y Arte, en
            convenio con varias organizaciones de la sociedad civil. Se enfoca
            en aportar a la conservación del ecosistema marino en la provincia
            de Esmeraldas desde varios ejes de acción como son la investigación,
            la comunicación y la educación ambiental.
          </p>
          <br />
          <h3 class="mb-4" style="font-weight: 300">El Equipo</h3>
          <b-row v-for="lideres in lideresPares" :key="lideres.id">
            <b-col
              v-for="lider in lideres"
              :key="lider.id"
              cols="12"
              md="6"
              sm="12"
            >
              <b-row>
                <b-col cols="12" md="6" sm="12" xs="10" class="py-2">
                  <b-avatar class="mx-2" size="5rem"></b-avatar>
                </b-col>
                <b-col
                  cols="12"
                  md="6"
                  sm="12"
                  xs="10"
                  class="py-4 px-0"
                  style="margin-left: -50px"
                >
                  <h5>{{ lider.nombre }}</h5>
                  <p>{{ lider.info }}</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>

        <b-col id="containerLogos">
          <h3 class="mb-4 tituloPatrocinadores">Patrocinadores</h3>
          <b-row>
            <b-col cols="12" md="6" sm="12">
              <b-img
                class="mb-4 imagen"
                src="../assets/img/logoUSFQ.png"
                alt="Image 1"
              ></b-img>
            </b-col>
            <b-col cols="12" md="6" sm="12">
              <b-img
                class="mb-4 imagen"
                id="community"
                src="../assets/img/logoCommunityESPcolor.png"
                alt="Image 1"
              ></b-img>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="6" sm="12">
              <b-img
                class="imagen mt-2"
                style="margin-left: 70%"
                src="../assets/img/DAAD_Logo.png"
                alt="Image 1"
              ></b-img>
            </b-col>
          </b-row>
          <h3 class="mb-4 mt-5 tituloPatrocinadores">Organizadores</h3>
          <b-row align-h="center">
            <b-col cols="6" md="6" sm="12">
              <b-img
                class="imagen"
                id="zmt"
                src="../assets/img/logoZMTdark.png"
                alt="Image 1"
              ></b-img>
            </b-col>
            <b-col cols="6" md="4" sm="12">
              <b-img
                class="imagen3"
                src="../assets/img/logoCocibaDark.png"
                alt="Image 1"
              ></b-img>
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col cols="12" md="4" sm="12">
              <b-img
                class="imagen2"
                id="salud"
                src="../assets/img/logoSaludDark.png"
                alt="Image 1"
              ></b-img>
            </b-col>
            <b-col cols="12" md="4">
              <b-img
                id="cocoa"
                src="../assets/img/logoCOCOAdark.png"
                alt="Image 1"
              ></b-img>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div id="nombres" v-if="creditosR.length">
        <b-row>
          <b-col>
            <div v-for="credito in creditosL" :key="credito.id">
              <h6 v-if="credito.id === 'logistico'">Coordinador Logístico</h6>
              <h6 v-if="credito.id === 'educacion'">Educación Ambiental</h6>
              <h6 v-if="credito.id === 'editor'">
                Plásticos / Reciclaje / Biodegradación
              </h6>
              <h6 v-if="credito.id === 'grafico'">Diseñadores Gráficos</h6>
              <h6 v-if="credito.id === 'multimedia'">
                Producción Multimedia (Educación Ambiental)
              </h6>
              <h6 v-if="credito.id === 'investigadores'">
                Producción de Contenido (Educación Ambiental)
              </h6>
              <div v-for="(nombre, campo) in credito" :key="nombre.id">
                <p v-if="campo !== 'id'">{{ nombre }}</p>
              </div>
            </div>
          </b-col>
          <b-col>
            <div v-for="credito in creditosR" :key="credito.id">
              <h6 v-if="credito.id === 'redes'">Redes Fantasma</h6>
              <h6 v-if="credito.id === 'pesca'">Pesca</h6>
              <h6 v-if="credito.id === 'escritores'">Escritores Creativos</h6>
              <h6 v-if="credito.id === 'website'">
                Comunicación / Arte / Website
              </h6>
              <h6 v-if="credito.id === 'actores'">Actores Creativos</h6>
              <h6 v-if="credito.id === 'logo'">Diseñador Logo</h6>
              <div v-for="(nombre, campo) in credito" :key="nombre.id">
                <p v-if="campo !== 'id'">{{ nombre }}</p>
              </div>
            </div>
          </b-col>
          <b-col cols="8">
            <h3 class="mb-4 tituloPatrocinadores" style="margin-left: 49%">
              Colaboradores
            </h3>
            <b-row
              align-h="center"
              class="mt-3 ml-5"
              style="padding-left: 40%"
              sm="12"
            >
              <b-col cols="12" md="4" sm="12">
                <b-img
                  class="ml-4"
                  id="plastico"
                  src="../assets/img/LogoPlastiCo.png"
                  alt="Image 1"
                ></b-img>
              </b-col>
              <b-col cols="12" md="4" sm="12">
                <b-img
                  class="mt-3 ml-5"
                  style="width: 125%"
                  src="../assets/img/DosIslas.png"
                  alt="Image 1"
                ></b-img>
              </b-col>
            </b-row>
            <b-row
              align-h="center"
              class="mt-3 ml-5"
              style="padding-left: 40%"
              sm="12"
            >
              <b-col cols="12" md="4" sm="12">
                <b-img
                  style="margin-left: -95%"
                  class="mt-4"
                  src="../assets/img/Ministerio.png"
                  alt="Image 1"
                ></b-img>
              </b-col>
            </b-row>
            <b-row
              align-h="center"
              class="mt-3 ml-5"
              style="padding-left: 40%"
              sm="12"
            >
              <b-col cols="12" md="4" sm="12">
                <b-img
                  class="mt-5 ml-4"
                  src="../assets/img/DLAB.png"
                  alt="Image 1"
                ></b-img>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import { creditos } from "../firebase";
import { lideres } from "../firebase";
import { chunk } from "lodash";
export default {
  name: "About",
  mounted: function () {
    lideres.onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let text = doc.data();
        text.id = doc.id;
        this.lideres.push(text);
      });
    });

    creditos.doc("logistico").onSnapshot((doc) => {
      let text = doc.data();
      text.id = doc.id;
      this.creditosL.push(text);
    });
    creditos.doc("redes").onSnapshot((doc) => {
      let text = doc.data();
      text.id = doc.id;
      this.creditosR.push(text);
    });

    creditos.doc("educacion").onSnapshot((doc) => {
      let text = doc.data();
      text.id = doc.id;
      this.creditosL.push(text);
    });
    creditos.doc("website").onSnapshot((doc) => {
      let text = doc.data();
      text.id = doc.id;
      this.creditosR.push(text);
    });
    creditos.doc("editor").onSnapshot((doc) => {
      let text = doc.data();
      text.id = doc.id;
      this.creditosL.push(text);
    });
    creditos.doc("pesca").onSnapshot((doc) => {
      let text = doc.data();
      text.id = doc.id;
      this.creditosR.push(text);
    });
    creditos.doc("grafico").onSnapshot((doc) => {
      let text = doc.data();
      text.id = doc.id;
      this.creditosL.push(text);
    });

    creditos.doc("actores").onSnapshot((doc) => {
      let text = doc.data();
      text.id = doc.id;
      this.creditosR.push(text);
    });

    creditos.doc("multimedia").onSnapshot((doc) => {
      let text = doc.data();
      text.id = doc.id;
      this.creditosL.push(text);
    });
    creditos.doc("escritores").onSnapshot((doc) => {
      let text = doc.data();
      text.id = doc.id;
      this.creditosR.push(text);
    });
    creditos.doc("investigadores").onSnapshot((doc) => {
      let text = doc.data();
      text.id = doc.id;
      this.creditosL.push(text);
    });
  },
  data() {
    return {
      creditosL: [],
      creditosR: [],
      lideres: [],
    };
  },
  computed: {
    lideresPares() {
      return _.chunk(this.lideres, 2);
    },
  },
};
</script>

<style lang="scss" scoped>
#colText {
  text-align: left;
  margin-left: -3%;
  margin-right: 20%;
}
.tituloPatrocinadores {
  font-weight: 300;
  text-align: left;
}
.navbar {
  background-color: #ffffff !important;
}
.about {
  color: black;
  height: 100%;
  max-width: 100%;
}
.contenedorAbout {
  padding-top: 9%;
  padding-left: 10%;
  padding-right: 12%;
  font-size: 14px;
}
#containerLogos {
  padding-bottom: 1%;
  margin-left: -2%;
  padding-left: 0;
}

.imagen {
  width: 70%;
}

.imagen2 {
  width: 70;
  padding-top: 5%;
}

.imagen3 {
  width: 90%;
  margin-top: -5%;
}

#community {
  width: 100%;
  margin-top: 15%;
}

#zmt {
  margin-bottom: 15%;
}

#cocoa {
  padding-top: 45%;
  width: 120%;
  margin-left: 25%;
}

#salud {
  width: 62%;
}

#plastico {
  width: 100%;
}

#rows {
  margin-bottom: 3%;
}

#nombres {
  margin-bottom: 5%;
  text-align: left;
  margin-left: -3%;
}

#nombres h6 {
  margin-top: 2%;
}

#nombres p {
  margin-bottom: 0;
}

@media only screen and (max-width: 500px) {
  .about {
    color: black;
    overflow: scroll;
    height: 100%;
    max-width: 100%;
  }
  .contenedorAbout {
    margin-top: 15%;
    margin-bottom: 20%;
  }
  #colText {
    text-align: center;
  }
  #aboutText {
    padding-right: 0%;
    margin-bottom: 20%;
  }
  #containerLogos {
    padding-left: 10%;
  }
  .persona {
    margin-right: 10%;
  }
  #colText {
    margin-left: 0%;
    margin-right: 0%;
  }
  #containerLogos {
    padding-right: 20%;
    padding-left: 20%;
    margin-bottom: 30%;
  }
}
</style>
