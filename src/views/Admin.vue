<template>

<!-- Create -->
  <form @submit.prevent="createBlog" class="form neu-border">
    <h2 class="form-heading">Create a blog</h2>
    <input class="form-input neu-border-inset" type="text" v-model="title" placeholder="Title" required/>
    <input 
      class="form-input neu-border-inset" 
      type="text" 
      v-model="img" 
      placeholder="Image Url" 
      required 
    />
      <input 
      class="form-input neu-border-inset" 
      type="text" 
      v-model="category" 
      placeholder="category" 
      required
    />
     <input 
      class="form-input neu-border-inset" 
      type="text"  v-model="author" placeholder="author"  required
    />
    <textarea
      class="form-input neu-border-inset"
      type="text"
      v-model="description"
      placeholder="Body"
      required
    ></textarea>

    <button type="submit" class="form-btn neu-border">Create Blog</button>
  </form>



<!-- POSTS -->
<div v-if="post">
   <p>post</p> 
    <div class="blog">
    
   
<!-- new -->
<div class="container3">
  <div class="row">
    <div class="col-lg-6 ">
            <img class="blog-image neu-border" :src="post.img" :alt="post.title" />

    </div>
    <div class="col-lg-6 ">
        <div class="blog-details">
        <h2>{{ post.title }}</h2>
        <h4>{{ post.author_name }} - {{ post.date }}</h4>
        <p>{{ post.description }}</p>
        <p>{{ post.category }}</p>
      </div>
    </div>
  </div>
</div>
 </div>

  </div>
<div v-else>
     <Loader/>
  </div>



</template>
<script>
export default {
     props:["post","idx"],
  data() {
    return {
      title: "",
      description: "",
      img: "",
      category:"",
      author:"",
      posts: null,
      filteredBlogs: null,
      search: "",
    }
  },
mounted() {
         fetch("https://blog-capstone-h.herokuapp.com/posts")
        .then(res => res.json())
        // .then(data => this.posts= data)
        // this.filteredBlogs = data
    .then((data)=>{
      this.posts = data;
      this.filteredBlogs = data
    })
        .catch(err => console.log(err.message))

},
methods: {
 
    createBlog() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://blog-capstone-h.herokuapp.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          img: this.img,
          category: this.category,
          author: this.author,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Post Created");
          this.$router.push({ name: "blog" });
        })
        .catch((err) => {
          alert(err);
        });
    },
       sortTitle(dir) {
      this.filteredBlogs = this.filteredBlogs.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      if (dir == "desc") this.filteredBlogs.reverse();
    },
  },
};
</script>