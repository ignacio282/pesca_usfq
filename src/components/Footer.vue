<template>
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
</template>

<script>
export default {
    name: "Foot"
}
</script>

<style scoped>
#logos{
  height: 10%;
  color: #edf2ca;
}

@media (max-width: 400px){
  #logos{
    margin-top: 100px;
  }

  #menu{
    padding-top: 25px;
  }
}

#contacto{
  font-size: 100%;
  padding-bottom: 20px;
}

.imagenes{
  padding-right: 10px;
  padding-bottom: 10px;
  width: 10%;
}

@media (max-width: 576px){
  #logos{
    margin-top: 275px;
  }
}

@media (min-width: 576px) and (max-width: 768px){
  #logos{
    margin-top: 275px;
  }

  #contacto{
    padding-bottom: 10px;
  }
}

@media (min-width: 769px) and (max-width: 1200px){
  #logos{
    margin-top: 600px;
  }

  #contacto{
    padding-bottom: 15px;
  }
}
</style>
