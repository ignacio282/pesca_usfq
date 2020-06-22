<template>
    <div class="lightbox">
        <b-container fluid>
            <b-row>
                <b-col cols="12" md="4" lg="3">
                    <img src="@/assets//img/logo.png">
                </b-col>
                <b-col cols="12" md="4" lg="3">
                    <img src="@/assets//img/logo.png">
                </b-col>
                <b-col cols="12" md="4" lg="3">
                    <img src="@/assets//img/logo.png">
                </b-col>
                <b-col cols="12" md="4" lg="3">
                    <img src="@/assets//img/logo.png">
                </b-col>
                <b-col cols="12" md="4" lg="3">
                    <img src="@/assets//img/logo.png">
                </b-col>
                <b-col cols="12" md="4" lg="3">
                    <img src="@/assets//img/logo.png">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
  name: "Lightbox",
  data: function() {
    return {
      images: [
          {
              src: "@/assets/img/logo.png",
              caption: "Vue Logo"
          },
          {
              src: "@/assets/img/logo.png",
              caption: "Vue Logo"
          },
          {
              src: "@/assets/img/logo.png",
              caption: "Vue Logo"
          },
          {
              src: "@/assets/img/logo.png",
              caption: "Vue Logo"
          },
          {
              src: "@/assets/img/logo.png",
              caption: "Vue Logo"
          },
          {
              src: "@/assets/img/logo.png",
              caption: "Vue Logo"
          },
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>