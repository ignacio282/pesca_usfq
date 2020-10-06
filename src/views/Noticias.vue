<template>
  <div class="news">
    <NavBar />
    <b-container class="p-5">
      <h2 style="padding-top:60px">
        Noticias Regeneración de Ecosistemas
      </h2>
      <hr />
      <div v-for="(blog, index) in blogs" :key="blog.id">
        <b-row class="pt-5">
          <b-col v-if="index % 2 !== 0">
            <img
              class="image"
              :src="imagenes[index]"
              alt="..."
            />
          </b-col>
          <b-col>
            <h3 class="pt-4 pb-3 pl-3 titulo">
              {{ blog.titulo }}
            </h3>
            <p class="pr-4 pt-3">
              <b-container class="pb-5">
                {{ blog.texto }}
              </b-container>
            </p>
          </b-col>
          <b-col v-if="index % 2 === 0 || index === 0">
            <img
              class="image"
              :src="imagenes[index]"
              alt="..."
            />
          </b-col>
        </b-row>
        <hr />
      </div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import { storage } from "../firebase";
import { blog } from "../firebase";
export default {
  name: "News",
  data: function() {
    return {
      storageRef: storage.ref(),
      blogs: [],
      imagenes: []
    };
  },
  mounted: function() {
    let blogRef = this.storageRef.child("blog");
    blog.orderBy("fecha", "desc").onSnapshot(querySnapshot => {
      querySnapshot.forEach(doc => {
        let text = doc.data();
        text.id = doc.id;
        this.blogs.push(text);
      });
    });
    blogRef.listAll().then(res => {
      res.items.forEach(itemRef =>{
        itemRef.getDownloadURL().then(url =>{
          this.imagenes.push(url);
        })
      })
    });
  },
  components: {},
  methods: {}
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
  color: black;
}

.titulo{
  text-align: left;
}

.image{
  padding-top: 5%;
  max-height: 60%;
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
::v-deep .colorWhite {
  color: black !important;
}
</style>
