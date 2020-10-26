<template>
  <div class="about">
    <NavBar />
    <b-container fluid class="contenedorAbout">
      <b-row id="rows">
        <b-col lg="6" sm="12" id="colText">
          <h3 class="mb-4 " style="font-weight:300">El Equipo</h3>
          <b-row v-for="lideres in lideresPares" :key="lideres.id">
            <b-col v-for="lider in lideres" :key="lider.id" cols="12" md="6" sm="12">
              <b-row>
                <b-col cols="12" md="6" sm="12" xs="10" class="py-2">
                  <b-avatar class="mx-5" size="5rem"></b-avatar>
                </b-col>
                <b-col cols="12" md="6" sm="12" xs="10" class="py-4">
                  <h5 >{{lider.nombre}}</h5>
                  <p >{{lider.info}}</p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-col>

        <b-col id="containerLogos">
          <h3 class="mb-4 tituloPatrocinadores">Patrocinadores y Organizadores</h3>
          <b-row>
            <b-col cols="12" md="6" sm="12">
              <b-img class="mb-4 imagen" src="../assets/img/logoUSFQ.png" alt="Image 1"></b-img>
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
              <b-img class="imagen" src="../assets/img/DAAD_Logo.svg" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="12" md="6" sm="12">
              <b-img class="imagen" id="zmt" src="../assets/img/logoZMTdark.png" alt="Image 1"></b-img>
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col cols="12" md="4" sm="12">
              <b-img class="imagen3" src="../assets/img/logoCocibaDark.png" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="12" md="4" sm="12">
              <b-img class="imagen3" id="salud" src="../assets/img/logoSaludDark.png" alt="Image 1"></b-img>
            </b-col>
          </b-row>
          <b-row align-h="center" class="mt-3" sm="12">
            <b-col cols="12" md="4">
              <b-img id="cocoa" src="../assets/img/logoCOCOAdark.png" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="12" md="4" sm="12">
              <b-img id="plastico" src="../assets/img/LogoPlastiCo.png" alt="Image 1"></b-img>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div id="nombres" v-if="creditos.length">
        <div v-for="credito in creditos" :key="credito.id">
          <h6 v-if="credito.id === 'logistico'">Coordinador Logístico</h6>
          <h6 v-if="credito.id === 'educacion'">Coordinación - Área Educación Ambiental</h6>
          <h6
            v-if="credito.id === 'editor'"
          >Coordinación - Área Plásticos / Reciclaje / Biodegradación</h6>
          <h6 v-if="credito.id === 'pesca'">Coordinación - Área Pesca</h6>
          <h6 v-if="credito.id === 'website'">Coordinación - Área Comunicación / Arte / Website</h6>
          <h6 v-if="credito.id === 'redes'">Proyecto Redes Fantasmas</h6>
          <h6 v-if="credito.id === 'actores'">Actores Creativos</h6>
          <h6 v-if="credito.id === 'grafico'">Diseñadores Gráficos</h6>
          <h6 v-if="credito.id === 'logo'">Diseñador Logo</h6>
          <h6
            v-if="credito.id === 'multimedia'"
          >Edición y Creación de Contenido Multimedia (Educación Ambiental)</h6>
          <h6 v-if="credito.id === 'escritores'">Escritores Creativos</h6>
          <h6 v-if="credito.id === 'investigadores'">Investigadores / Fact Checkers</h6>
          <div v-for="(nombre, campo) in credito" :key="nombre.id">
            <p v-if="campo !== 'id'">{{nombre}}</p>
          </div>
        </div>
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
  mounted: function() {
    lideres.onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        let text = doc.data();
        text.id = doc.id;
        this.lideres.push(text);
      });
    });

    creditos.doc("logistico").onSnapshot(doc => {
      let text = doc.data();
      text.id = doc.id;
      this.creditos.push(text);
    });
    creditos.doc("redes").onSnapshot(doc => {
      let text = doc.data();
      text.id = doc.id;
      this.creditos.push(text);
    });

    creditos.doc("educacion").onSnapshot(doc => {
      let text = doc.data();
      text.id = doc.id;
      this.creditos.push(text);
    });
    creditos.doc("website").onSnapshot(doc => {
      let text = doc.data();
      text.id = doc.id;
      this.creditos.push(text);
    });
    creditos.doc("editor").onSnapshot(doc => {
      let text = doc.data();
      text.id = doc.id;
      this.creditos.push(text);
    });
    creditos.doc("pesca").onSnapshot(doc => {
      let text = doc.data();
      text.id = doc.id;
      this.creditos.push(text);
    });
    creditos.doc("grafico").onSnapshot(doc => {
      let text = doc.data();
      text.id = doc.id;
      this.creditos.push(text);
    });

    creditos.doc("actores").onSnapshot(doc => {
      let text = doc.data();
      text.id = doc.id;
      this.creditos.push(text);
    });

    creditos.doc("multimedia").onSnapshot(doc => {
      let text = doc.data();
      text.id = doc.id;
      this.creditos.push(text);
    });
    creditos.doc("escritores").onSnapshot(doc => {
      let text = doc.data();
      text.id = doc.id;
      this.creditos.push(text);
    });
    creditos.doc("investigadores").onSnapshot(doc => {
      let text = doc.data();
      text.id = doc.id;
      this.creditos.push(text);
    });
  },
  data() {
    return {
      creditos: [],
      lideres: []
    };
  },
  computed: {
    lideresPares() {
      return _.chunk(this.lideres, 2);
    }
  }
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

.imagen3 {
  width: 110%;
  padding-top: 3%;
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
}

#salud {
  width: 62%;
}

#plastico {
  width:100%;
  padding-top: 5%;
  padding-left: 3%;
}

#rows {
  margin-bottom: 3%;
}

#nombres {
  margin-bottom: 5%;
  text-align: left;
  margin-left: 9.5%;
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
  .persona{
    margin-right: 10%;
  }
  #colText {

  margin-left: 0%;
  margin-right: 0%;
}
#containerLogos{
  padding-right: 20%;
  padding-left: 20%;
  margin-bottom: 30%;
}
}
</style>
