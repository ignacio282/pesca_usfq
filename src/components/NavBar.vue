<template>
  <div class="barra">
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light pt-3 p-2 pb-3">
      <router-link to="/home"  style="color:white" class="navbar-brand pl-3"> titulo
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">

          <li class="nav-item dropdown pr-4 ">
            <a class="nav-link dropdown-toggle" style="color:white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Secciones</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
          </li>
          <li class="nav-item dropdown" id="secondLink">
            <a class="nav-link dropdown-toggle" style="color:white" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Partners</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
          </li>

        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400&family=Roboto:wght@100&display=swap");

.barra {
  font-family: Montserrat;
  
  
  
}
.navbar-toggler-icon{
    width: 20px !important;
    height: 20px !important;
    
}
.navbar{
  background:#012B50!important;
  
}
#secondLink{
  padding-right: 150px;
}

</style>
