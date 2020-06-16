<template>
  <div class="media">
    <div class="photo-gallery">
      <b-container fluid>
        <div class="intro">
          <h2 class="text-center">Media</h2>
          <p class="text-center">Galería de medios</p>
        </div>
        <lightbox/>
      </b-container>
    </div>
  </div>
</template>

<script>
import Lightbox from '@/components/Lightbox.vue';
export default {
  name: "Media",
  components: {
      lightbox: Lightbox
  },
  data: function(){
      return{
      }
  }
};
</script>

<style lang="scss" scoped>
.media {
  height: 100%;
  background: linear-gradient(#399EBC, #062D40);
  color: #EDF2CA;
}

.photo-gallery {
  width: 100%;
  height: 100%;
}

.photo-gallery .intro {
  font-size: 16px;
  max-width: 500px;
  margin: 0 auto 40px;
}

.text-center {
  text-align: center !important;
}

.photo-gallery h2 {
  font-weight: bold;
  margin-bottom: 40px;
  padding-top: 40px;
  color: inherit;
}

@media (max-width: 767px) {
  .photo-gallery h2 {
    margin-bottom: 25px;
    padding-top: 25px;
    font-size: 24px;
  }
}

.photo-gallery .intro p {
  margin-bottom: 0;
}
</style>