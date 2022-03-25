<template>




<div v-if="posts" class="all">

<div class="latest"> 
       <h1>Latest</h1>
  <div>{{posts[posts.length-1].title}}</div>
  <img :src="posts[posts.length-1].img" alt="">

  <div>{{posts[posts.length-2].title}}</div>
  <img :src="posts[posts.length-2].img" alt="">
  
   <div>{{posts[posts.length-3].title}}</div>
  <img :src="posts[posts.length-3].img" alt="">
  </div>

           <h2>Blogs</h2>
  <p>{{posts.length}} posts found</p>
    <label>
        Sort Title:
        <select v-model="title" @change="sortTitle(title)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <input type="text"  placeholder="search" v-model="search">

    <div class="posts-container" v-if="posts">

      <div v-for="post of filteredPosts" :key="post._id" >

<div class="container">
  <div class="row">
    <div class="col-md-6 item">
      <div class="item-in">
        <h4>{{post.title}}</h4>
        <div class="seperator"></div>
        <p>{{post.description}}</p>
         <router-link class="read-more" :to="{ name: 'BlogDetails', params: { id: post._id } }" >Read more<i class="fa fa-long-arrow-right"></i></router-link>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    <button>
   <router-link  :to="{name:'admin'}" class="nav-link"> admin</router-link>
 </button>
    </div>
    
  <div v-else>
    Loading blogs... 
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
      title: "",
      search: "",
      
    };
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
    filteredPosts: function () {
      return this.posts.filter((post) => {
        return post.title.match(this.search);
      });
    },
  },

};
</script>

<style scoped>

/* card */
@import url(https://fonts.googleapis.com/css?family=Merriweather:400,300,700);
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
body {
  font-family: "Merriweather", serif;
  font-size: 16px;
  color: #777;
}
.all{
    background: rgb(65, 89, 65);

}
.posts-container{
  margin-left: 30%;
}

h1, h4 {
  font-family: "Montserrat", sans-serif;
}

.row {
  padding: 50px 0;
}

.seperator {
  margin-bottom: 30px;
  width: 35px;
  height: 3px;
  background: #777;
  border: none;
}

.title {
  text-align: center;
}
.title .row {
  padding: 50px 0 0;
}
.title h1 {
  text-transform: uppercase;
}
.title .seperator {
  margin-top: 0;
  margin-left:50%;
}

.item {
  position: relative;
  margin-bottom: 30px;
  min-height: 1px;
  float: left;
  /* -webkit-backface-visibility: hidden; */
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.item .item-in {
  background: #fff;
  padding: 40px;
  position: relative;
}
.item .item-in:hover:before {
  width: 100%;
}
.item .item-in::before {
  content: "";
  position: absolute;
  bottom: 0px;
  height: 2px;
  width: 0%;
  background: #333333;
  right: 0px;
  transition: width 0.4s;
}

.item h4 {
  font-size: 18px;
  margin-top: 25px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.item p {
  font-size: 12px;
}
.item a {
  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: #666666;
  margin-top: 10px;
}
.item a i {
  opacity: 0;
  padding-left: 0px;
  transition: 0.4s;
  font-size: 24px;
  display: inline-block;
  top: 5px;
  position: relative;
}
.item a:hover {
  text-decoration: none;
}
.item a:hover i {
  padding-left: 10px;
  opacity: 1;
  font-weight: 300;
}

.item .icon {
  position: absolute;
  top: 27px;
  left: -16px;
  cursor: pointer;
}
.item .icon a {
  font-family: "Merriweather", serif;
  font-size: 14px;
  font-weight: 400;
  color: #999;
  text-transform: none;
}
.item .icon svg {
  width: 32px;
  height: 32px;
  float: left;
}
.item .icon .icon-topic {
  opacity: 0;
  padding-left: 0px;
  transition: 0.4s;
  display: inline-block;
  top: 0px;
  position: relative;
}
.item .icon:hover .icon-topic {
  opacity: 1;
  padding-left: 10px;
}

@media only screen and (max-width: 768px) {
  .item .icon {
    position: relative;
    top: 0;
    left: 0;
  }
}

@media only screen and (max-width: 746px) {
 .posts-container{
   margin-left: 7%;
  }
}


</style>