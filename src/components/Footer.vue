<template>
  <section id="footer">
    <div class="container">
      <b-row>
        <b-row id="logos" class="justify-content-md-right" align-v="end" align-h="center">
        <b-col cols="12" md="4" class="pb-4">
          <img class="imagenes" src="../assets/img/logo.png">
          <img class="imagenes" src="../assets/img/logo.png">
          <img class="imagenes" src="../assets/img/logo.png">
        </b-col>
        <b-col id="logos" cols="12" md="4" class="pb-4">
          <img class="imagenes" src="../assets/img/logo.png">
          <img class="imagenes" src="../assets/img/logo.png">
          <img class="imagenes" src="../assets/img/logo.png">
          
        </b-col>
        <b-col cols="12" md="4" class="pb-4">
          <img class="imagenes" src="../assets/img/logo.png">
          <img class="imagenes" src="../assets/img/logo.png">
          <img class="imagenes" src="../assets/img/logo.png">
        </b-col>
      </b-row> 
      </b-row>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p>
            <u>
              <a href="https://www.usfq.edu.ec/vinculacion/Paginas/default.aspx">COCOA USFQ</a>
            </u> Redes fantasma, impacto ecologico
          </p>
          <p class="h6">
            © Todos los derechos reservados.
            <a
              class="text-green ml-2"
              href="https://www.sunlimetech.com"
              target="_blank"
            >USFQ - ECUADOR</a>
          </p>
        </div>
        <hr />
      </div>
    </div>
  </section>

  <!--
  <b-row id="logos" class="justify-content-md-right" align-v="end" align-h="center">
        <b-col cols="12" md="4">
          <img class="imagenes" src="../assets/img/logo.png">
          <img class="imagenes" src="../assets/img/logo.png">
          <img class="imagenes" src="../assets/img/logo.png">
        </b-col>
        <b-col id="contacto" cols="12" md="4">
          Contacto
        </b-col>
        <b-col cols="12" md="4">
          <img class="imagenes" src="../assets/img/logo.png">
          <img class="imagenes" src="../assets/img/logo.png">
          <img class="imagenes" src="../assets/img/logo.png">
        </b-col>
      </b-row> 

  -->
</template>

<script>
export default {
  name: "Foot"
};
</script>

<style scoped>
section {
  padding: 40px 0;
  padding-top: 60px;
}

section .section-title {
  text-align: center;
  color: #007b5e;
  margin-bottom: 50px;
  text-transform: uppercase;
}
#footer {
  background: #03141d;
}
#footer h5 {
  padding-left: 10px;
  border-left: 3px solid #eeeeee;
  padding-bottom: 6px;
  margin-bottom: 20px;
  color: #ffffff;
}
#footer a {
  color: #ffffff;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}


@media (max-width: 767px) {
  #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
  }
}

#logos {
  height: 50%;
  color: #edf2ca;
}

@media (max-width: 400px) {
  #logos {
    margin-top: 100px;
  }

  #menu {
    padding-top: 25px;
  }
}

#contacto {
  font-size: 100%;
  padding-bottom: 20px;
}

.imagenes {
  padding-right: 10px;
  padding-bottom: 10px;
  width: 15%;
}

@media (max-width: 576px) {
  #logos {
    margin-top: 275px;
  }
}

@media (min-width: 576px) and (max-width: 768px) {
  #logos {
    margin-top: 275px;
  }

  #contacto {
    padding-bottom: 10px;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  #logos {
    margin-top: 600px;
  }

  #contacto {
    padding-bottom: 15px;
  }
}
</style>
