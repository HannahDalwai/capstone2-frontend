<template>
  <div v-if="post">
   <p>post</p> 
    <div class="blog">
      <img class="blog-image neu-border" :src="post.img" :alt="post.title" />
      <div class="blog-details">
        <h2>{{ post.title }}</h2>
        <h4>{{ post.author_name }} - {{ post.date }}</h4>
        <p>{{ post.description }}</p>
        <p>{{ post.category }}</p>
      </div>
    </div>
  </div>
  <div v-else>Loading the blog details...
     <Loader/>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      post: null,
    };
  },
  mounted() {
    fetch("https://blog-capstone-h.herokuapp.com/posts/" + this.id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => response.json())
      .then(async (json) => {
        this.post = json;
        await fetch(
          "https://blog-capstone-h.herokuapp.com/users" + json.author,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          }
        )
          .then((response) => response.json())
          .then((json) => {
            this.post.author_name = json.name;
          });
      });
  },
};
</script>
<style scoped>

</style>