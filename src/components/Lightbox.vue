<template>
  <div class="lightbox">
      <b-container fluid>
          <b-row>
              <b-col cols="12" md="6" lg="3">
                  <b-img fluid rounded='circle' :src="require('../assets/logo.png')"></b-img>
              </b-col>
              <b-col cols="12" md="6" lg="3">
                  <b-img fluid rounded='circle' :src="require('../assets/logo.png')"></b-img>
              </b-col>
              <b-col cols="12" md="6" lg="3">
                  <b-img fluid rounded='circle' :src="require('../assets/logo.png')"></b-img>
              </b-col>
              <b-col cols="12" md="6" lg="3">
                  <b-img fluid rounded='circle' :src="require('../assets/logo.png')"></b-img>
              </b-col>
              <b-col cols="12" md="6" lg="3">
                  <b-img fluid rounded='circle' :src="require('../assets/logo.png')"></b-img>
              </b-col>
              <b-col cols="12" md="6" lg="3">
                  <b-img fluid rounded='circle' :src="require('../assets/logo.png')"></b-img>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
export default {
  name: "Lightbox"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>