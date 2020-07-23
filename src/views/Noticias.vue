<template>
  <div class="news">
    <NavBar />
    <b-container class="p-5">
      <h2 style="padding-top:60px">
        Lorem ipsum dolor sit amet Praesent facilisis nibh
        <br />
        diam, et tempor augue semper id
      </h2>
      <div class="subtitle pt-1 pb-2">Autor</div>
      <img class="pt-3 pb-5" src="https://via.placeholder.com/400" alt="..." />
      <hr />
      <h3 class="pt-4 pb-5">
        Lorem ipsum dolor si
        <br />
        amet Praesent facilisis nibh
      </h3>
      <p class="pl-5 pr-5">
        <b-container class="pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          facilisis nibh diam, et tempor augue semper id. Vestibulum ante risus,
          fringilla a rutrum ac, vehicula nec erat. Morbi rutrum elementum
          aliquam. Suspendisse non aliquet lacus. <br />
          <br />Quisque in metus diam. Donec eleifend nisi nec tortor fermentum,
          eget efficitur libero ornare. In sed justo quis ante finibus dictum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          ultricies vulputate pharetra. <br />
          <br />
          Donec varius lobortis augue a malesuada. Nulla dictum, ante rutrum
          hendrerit aliquet, lectus justo condimentum eros, vel fringilla lorem
          turpis in augue. Nunc scelerisque libero id velit luctus tempor.
          Nullam efficitur tortor a malesuada auctor.
        </b-container>
      </p>
      <hr />
      <b-row class="pt-5">
        <b-col>
          <h3>1. Titulo 1</h3>
          <p class="pl-5 pr-5 pt-3">
            <b-container class="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              facilisis nibh diam, et tempor augue semper id. Vestibulum ante
              risus, fringilla a rutrum ac, vehicula nec erat. Morbi rutrum
              elementum aliquam. Suspendisse non aliquet lacus. <br />
              <br />Quisque in metus diam. Donec eleifend nisi nec tortor
              fermentum, eget efficitur libero ornare. In sed justo quis ante
              finibus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vivamus ultricies vulputate pharetra. <br />
              <br />
              Donec varius lobortis augue a malesuada. Nulla dictum, ante rutrum
              hendrerit aliquet, lectus justo condimentum eros, vel fringilla
              lorem turpis in augue. Nunc scelerisque libero id velit luctus
              tempor. Nullam efficitur tortor a malesuada auctor.
            </b-container>
          </p>
        </b-col>
        <b-col>
          <img
            class="pt-3 pb-5"
            src="https://via.placeholder.com/400"
            alt="..."
          />
        </b-col>
      </b-row>

      <b-row class="pt-5">
        <b-col>
          <img
            class="pt-3 pb-5"
            src="https://via.placeholder.com/400"
            alt="..."
          />
        </b-col>
        <b-col>
          <h3>1. Titulo 1</h3>
          <p class="pl-5 pr-5 pt-3">
            <b-container class="pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              facilisis nibh diam, et tempor augue semper id. Vestibulum ante
              risus, fringilla a rutrum ac, vehicula nec erat. Morbi rutrum
              elementum aliquam. Suspendisse non aliquet lacus. <br />
              <br />Quisque in metus diam. Donec eleifend nisi nec tortor
              fermentum, eget efficitur libero ornare. In sed justo quis ante
              finibus dictum. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Vivamus ultricies vulputate pharetra. <br />
              <br />
              Donec varius lobortis augue a malesuada. Nulla dictum, ante rutrum
              hendrerit aliquet, lectus justo condimentum eros, vel fringilla
              lorem turpis in augue. Nunc scelerisque libero id velit luctus
              tempor. Nullam efficitur tortor a malesuada auctor.
            </b-container>
          </p>
        </b-col>
      </b-row>
    </b-container>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "News",
  components: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.news {
  color: black;
}
.subtitle {
  color: rgb(122, 120, 120);
}
.navbar {
  background-color: white !important;
  height: 10%;
  color: black ;
}
::v-deep .nav-link {
  color: rgba($color: black, $alpha: 1) !important;
}
hr {
  border: 0.1px solid rgb(150, 149, 149);
  background: rgb(150, 149, 149);
  width: 88%;
}
p {
  text-align: left;
  color: rgb(80, 80, 80);
  font-family: "Roboto Light";
}
::v-deep .colorWhite{
    color: black !important;
}
</style>
