<template>
  <div class="about">
    <NavBar />
    <b-container fluid class="contenedorAbout">
      <b-row id="rows">
        <b-col lg="6" sm="12" id="colText">
          <h1 class="font-weight-bold mb-5">El Equipo Detras de Regeneracion de Ecosistemas.</h1>
          <h3 class="mb-5">Quienes somos?</h3>
          <b-row>
            <b-col cols="3">
              <b-avatar class="mx-3 my-4" size="6rem"></b-avatar>
            </b-col>
            <b-col cols="3" class="py-3">
              <h4>Nombre</h4>
              <p>Este seria un lugar para poner una pequena info</p>
            </b-col>
            <b-col cols="3">
              <b-avatar class="mx-3 my-4" size="6rem"></b-avatar>
            </b-col>
            <b-col cols="3" class="py-3">
              <h4>Nombre</h4>
              <p>Este seria un lugar para poner una pequena info</p>
            </b-col>
            <b-col cols="3">
              <b-avatar class="mx-3 my-4" size="6rem"></b-avatar>
            </b-col>
            <b-col cols="3" class="py-3">
              <h4>Nombre</h4>
              <p>Este seria un lugar para poner una pequena info</p>
            </b-col>
            <b-col cols="3">
              <b-avatar class="mx-3 my-4" size="6rem"></b-avatar>
            </b-col>
            <b-col cols="3" class="py-3">
              <h4>Nombre</h4>
              <p>Este seria un lugar para poner una pequena info</p>
            </b-col>
          </b-row>
        </b-col>

        <b-col id="containerLogos">
          <b-row align-h="center">
            <b-col cols="12" md="6">
              <b-img class="mb-5 imagen" src="../assets/img/logoUSFQ.png" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="12" md="6">
              <b-img
                class="mb-5 imagen"
                id="community"
                src="../assets/img/logoCommunityESPcolor.png"
                alt="Image 1"
              ></b-img>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" md="6">
              <b-img class="imagen" src="../assets/img/DAAD_Logo.svg" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="12" md="6">
              <b-img class="imagen" id="zmt" src="../assets/img/logoZMTdark.png" alt="Image 1"></b-img>
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col cols="12" md="4">
              <b-img id="cocoa" src="../assets/img/logoCOCOAdark.png" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="12" md="4">
              <b-img class="imagen3" src="../assets/img/logoCocibaDark.png" alt="Image 1"></b-img>
            </b-col>
            <b-col cols="12" md="4">
              <b-img class="imagen3" id="salud" src="../assets/img/logoSaludDark.png" alt="Image 1"></b-img>
            </b-col>
          </b-row>
          <b-row align-h="center">
            <b-col cols="12">
              <b-img id="plastico" src="../assets/img/LogoPlastiCo.png" alt="Image 1"></b-img>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <h6>Coordinación - Área Educación Ambiental</h6>
      <p>
        Pieter van‘t Hof
        <br />Andrea Lema
        <br />Giovanna Jácome Ruiz
        <br />
      </p>
      <h6>Editor Principal</h6>
      <p>Paúl Rosero</p>
      <h6>Proyecto Redes Fantasmas</h6>
      <p>
        Judith Denkinger
        <br />Javier Oña
      </p>
      <h6>Actores Creativos</h6>
      <p>
        Hector Garcia
        <br />Samantha Jarrín
        <br />Nicole Palacios
        <br />Carly Rojas
        <br />Ibón Jácome Ruiz
        <br />Samay Lima Vega
        <br />
      </p>
      <h6>Diseñadores Gráficos</h6>
      <p>
        Daniela Carrión
        <br />Jennifer Freire C.
        <br />Michelle Molina
        <br />Sarah Viver
        <br />
      </p>
      <h6>Diseñador Logo</h6>
      <p>xxxxxxxxxxxxxx</p>
      <h6>Edición y creación de contenido multimedia</h6>
      <p>
        Juan José Alomía
        <br />Carlos Chérrez Montenegro
        <br />Alissen Haro
        <br />Alex Lalama Paredes
        <br />Favio Rivera
        <br />Matías Yépez Gaete
        <br />
      </p>
      <h6>Escritores creativos</h6>
      <p>
        Rossana Carpio
        <br />Valeria Grieco
        <br />Camila Miranda
        <br />Vanessa Naula
        <br />Leo Santos
        <br />
      </p>
      <h6>Investigadores / Fact checkers</h6>
      <p>
        Lía Altamirano Ponce
        <br />Karla Barragan
        <br />Mateo Carvajal
        <br />Paola Espinosa-Torres
        <br />Kerly R. Galeth-Moreira.
        <br />David Martínez
        <br />Juan Sebastian Martinez Gomez
        <br />Andrés Moreira-Mendieta
        <br />Marlon Josué Romo Gualinga
        Isabela Saud Miño<br>
        Ana Velástegui
      </p>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "About",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
#colText {
  text-align: left;
  margin-left: -3%;
  margin-right: 20%;
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
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
  font-size: 14px;
}
#containerLogos {
  margin-top: 0.5%;
  padding-bottom: 1%;
}

.imagen {
  width: 70%;
}

.imagen3 {
  width: 110%;
  padding-top: 10%;
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
  width: 35%;
  padding-top: 5%;
  padding-left: 3%;
}

#rows {
  margin-bottom: 3%;
}

@media only screen and (max-width: 600px) {
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
    margin-left: 10%;
  }
}
</style>
