<template>
  <div class="media">
    <NavBar />
    <b-container fluid id="gallery">
      <div class="content-wrap">
        <div class="intro">
          <h2 class="text-center">Media</h2>
          <p class="text-center">Galería de medios</p>
        </div>
        <lightbox />
      </div>
      <Foot />
    </b-container>
  </div>
</template>

<script>
import Lightbox from "@/components/Lightbox.vue";
import Foot from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Media",
  components: {
    lightbox: Lightbox,
    Foot,
    NavBar
  },
  data: function() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.media {
  background: linear-gradient(#399ebc, #062d40);
  color: #edf2ca;
  height: 100%;
}

#gallery {
  padding-top: 4rem;
  padding-left: 0;
  padding-right: 0;
  position: relative;
  min-height: 100%;
}

.intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto 40px;
}

.text-center {
  text-align: center !important;
}

h2 {
  font-weight: bold;
  margin-bottom: 20px;
  padding-top: 40px;
  color: inherit;
}

@media (max-width: 767px) {
  h2 {
    margin-bottom: 25px;
    padding-top: 25px;
    font-size: 24px;
  }
}

.intro p {
  margin-bottom: 0;
}

#logos {
  padding-top: 5%;
}

@media (min-width: 768px) {
  #footer {
    position: absolute;
    bottom: 0;
    height: 6.2rem;
    width: 100%;
  }

  .content-wrap {
    padding-bottom: 6.2rem;
  }
}
</style>