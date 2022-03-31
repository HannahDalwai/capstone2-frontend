<template>
<div v-if="posts" class="all">
<h3>Latest Blogs</h3>
                <div class="row g-4">
                    <div class="col-sm-6 col-xl-4 col-md-6">
                        <div id="latest" class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <img class="latest" :src="posts[posts.length-1].img" alt="">
                            <div class="ms-6">
                                <p class="mb-2">{{posts[posts.length-1].title}}</p>
                                <h6 class="mb-0">{{posts[posts.length-1].category}}</h6>
                            </div>
                        </div>
                    </div>
                     <div class="col-sm-6 col-xl-4 col-md-6">
                        <div id="latest" class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <img class="latest" :src="posts[posts.length-2].img" alt="">
                            <div class="ms-6">
                                <p class="mb-2">{{posts[posts.length-2].title}}</p>
                                <h6 class="mb-0">{{posts[posts.length-2].category}}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-4 col-md-6">
                        <div id="latest" class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <img class="latest" :src="posts[posts.length-3].img" alt="">
                            <div class="ms-6">
                                <p class="mb-2">{{posts[posts.length-3].title}}</p>
                                <h6 class="mb-0">{{posts[posts.length-3].category}}</h6>
                            </div>
                        </div>
                    </div>

<br> <br>
<!-- CATS -->
 <div class="col-sm-6 col-xl-3">
<h1>categories</h1> 
<button @click="setCategory(null)">All</button>
<button @click="setCategory('skincare')">skincare</button>
<button @click="setCategory('movement')">movement</button>
<button @click="setCategory('feeling toolkit')">feeling toolkit</button>


<!-- end -->
         <label>
        Sort Title:
        <select v-model="title" @change="sortTitle(title)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <br> <br>
          <input type="text"  placeholder="search blogs" v-model="search">
       </div>
       <h1 class="display-4">Blogs</h1>

<div class="posts-container" v-if="posts">
      <div v-for="post of filteredPosts" :key="post._id" >

 <div class="blog-card">
    <div class="meta">
      <img :src="post.img" class="photo img-fluid w-100" alt="featured-image">
      <ul class="details">
        <li class="author">{{ post.author }}</li>
        <li class="date">{{ post.date }}</li>
        <li class="tags">
          <ul>
            <li>{{ post.category }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="description">
      <h1>  {{ post.title }}</h1>
      <!-- <h2> {{ post.subtitle }} show sub  </h2>\ -->

      
      <p>{{post.description.substring(0,100)}} </p>
      <p class="read-more">
                 <router-link class="read-more" :to="{ name: 'BlogDetails', params: { id: post._id } }" >Read more</router-link>
      </p>

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
import Loader from '../components/Loader.vue'

export default {
  props:["post","idx"],
  components: { Loader },
 data() {
    return {
      posts: null,
      filteredBlogs: null,
      categoryChosen: "",
      title: "",
      search: "",
      
    };
  },
  mounted() {
    fetch("https://blog-capstone-h.herokuapp.com/posts")
        .then(res => res.json())
    .then((data)=>{
      this.posts = data;
      this.filteredBlogs = data
    })
        .catch(err => console.log(err.message))

  },
   methods: {
    setCategory(postCat){
this.categoryChosen=postCat

    }


,
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
computed: {


  // Cat
    filteredPosts: function () {
      if(this.search[0]){
        return this.posts.filter((post) => {
        return post.title.match(this.search);
      });
      }else if(this.filteredCategory){
      return this.filteredCategory
      }else{
        return this.posts
      }
    },

 filteredCategory: function () {
   if (this.categoryChosen){
return this.posts.filter((post) => {
        return post.category.match(this.categoryChosen);
      })
   }
   else{
     return this.posts
   } 
    },
    

  },

};
</script>
<style scoped>



.all{
	margin-top: 10%;
}
img.latest{
	border-radius: 5%;
	padding-right: 5px;
}
#latest{
	height: 180px;
}
article{
  margin-top: 60%;
  display: flex;
}

/* CARDS */

* {
  box-sizing: border-box;
}



.blog-card {
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.6%;
  margin-left: 25%;
  background: #fff;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  height: 250px;
}
.blog-card a {
  color: inherit;
}
.blog-card a:hover {
  color: #5ad67d;
}
.blog-card:hover .photo {
  transform: scale(1.3) rotate(3deg);
}
.blog-card .meta {
  position: relative;
  z-index: 0;
  height: 200px;
}
.blog-card .photo {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s;
}
.blog-card .details,
.blog-card .details ul {
  margin: auto;
  padding: 0;
  list-style: none;
}
.blog-card .details {
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100%;
  margin: auto;
  transition: left 0.2s;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px;
  width: 100%;
  font-size: 0.9rem;
}
.blog-card .details a {
  -webkit-text-decoration: dotted underline;
          text-decoration: dotted underline;
}
.blog-card .details ul li {
  display: inline-block;
}
.blog-card .details .author:before {
  font-family: FontAwesome;
  margin-right: 10px;
  content: "";
}
.blog-card .details .date:before {
  font-family: FontAwesome;
  margin-right: 10px;
  content: "";
}
.blog-card .details .tags ul:before {
  font-family: FontAwesome;
  content: "";
  margin-right: 10px;
}
.blog-card .details .tags li {
  margin-right: 2px;
}
.blog-card .details .tags li:first-child {
  margin-left: -4px;
}
.blog-card .description {
  padding: 1rem;
  background: #fff;
  position: relative;
  z-index: 1;
}
.blog-card .description h1,
.blog-card .description h2 {
  font-family: Poppins, sans-serif;
}
.blog-card .description h1 {
  line-height: 1;
  margin: 0;
  font-size: 1.7rem;
}
.blog-card .description h2 {
  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  color: #a2a2a2;
  margin-top: 5px;
}
.blog-card .description .read-more {
  text-align: right;
}
.blog-card .description .read-more a {
  color: #5ad67d;
  display: inline-block;
  position: relative;
}
.blog-card .description .read-more a:hover {
  color: orange;
  display: inline-block;
  position: relative;
}
/* .blog-card .description .read-more :after {
  
 

  opacity: 0;
  vertical-align: middle;
  transition: margin 0.3s, opacity 0.3s;
} */
/* .blog-card .description .read-more :hover:after {
  margin-left: 5px;
  opacity: 1;
} */
.blog-card p {
  position: relative;
  margin: 1rem 0 0;
}
.blog-card p:first-of-type {
  margin-top: 1.25rem;
}
.blog-card p:first-of-type:before {
  content: "";
  position: absolute;
  height: 5px;
  background: #5ad67d;
  width: 35px;
  top: -0.75rem;
  border-radius: 3px;
}
.blog-card:hover .details {
  left: 0%;
}
@media only screen and (max-width: 800px) {
 .posts-container{
   margin-left: 0;
 }
   .blog-card {
   margin-left: 0;
  }
}
@media (min-width: 640px) {
  .blog-card {
    flex-direction: row;
    max-width: 700px;
  }
  .blog-card .meta {
    flex-basis: 40%;
    height: auto;
  }
  .blog-card .description {
    flex-basis: 60%;
  }
  .blog-card .description:before {
    transform: skewX(-3deg);
    content: "";
    background: #fff;
    width: 30px;
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  .blog-card.alt {
    flex-direction: row-reverse;
  }
  .blog-card.alt .description:before {
    left: inherit;
    right: -10px;
    transform: skew(3deg);
  }
  .blog-card.alt .details {
    padding-left: 25px;
  }
}
</style>