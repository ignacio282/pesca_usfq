<template>
  <section id="footer">
    <div class="container">
      <b-row id="logos" class="justify-content-md-center" align-h="center">
        <b-col cols="12" md="4" class="pb-4 imagen">
          <img class="imagenes" src="../assets/img/logo.png" />
          <img class="imagenes" src="../assets/img/logo.png" />
          <img class="imagenes" src="../assets/img/logo.png" />
        </b-col>
        <b-col id="texto" cols="12" md="4" class="pb-4">
          <a href="http://www.usfq.edu.ec/programas_academicos/colegios/cocoa/Paginas/default.aspx">COCOA USFQ</a>
          <p>© Todos los derechos reservados.</p>
          <a href="http://www.usfq.edu.ec/Paginas/Inicio.aspx">USFQ - ECUADOR</a>
        </b-col>
        <b-col cols="12" md="4" class="pb-4 imagen">
          <img class="imagenes" src="../assets/img/logo.png" />
          <img class="imagenes" src="../assets/img/logo.png" />
          <img class="imagenes" src="../assets/img/logo.png" />
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {
  name: "Foot"
};
</script>

<style scoped>
#footer {
  background: #03141d;
  color: #ffffff;
}

#footer a {
  color: #ffffff;
  text-decoration: none !important;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

#footer a:hover{
  text-decoration-line: underline!important;
}

#footer p{
  margin-bottom: 0;
}

@media (max-width: 400px) {
  #logos {
    margin-top: 100px;
  }

  #menu {
    padding-top: 25px;
  }
}

.imagenes {
  width: 12%;
  padding-right: 2%;
}

.imagen{
  padding-top: 1.5%;
  padding-top: 1.5%!important;
}

#logos{
  padding: 1%;
}

#texto{
  font-size: 12px;
  padding-top: 0.6%;
  padding-bottom: 0.5%!important;
}
</style>
