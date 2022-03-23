<template>

<Search/>


 <div v-if="posts"> 
  <h2>Blogs</h2>
  <p>{{posts.length}} posts found</p>
    <div class="posts-container" v-if="posts">
      <div v-for="post of posts" :key="post._id" >

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
   <router-link  :to="{name:'createblog'}" class="nav-link"> Create blog</router-link>
 </button>
    </div>
    

  
  <div v-else>
    Loading blogs... 
    <Loader/>
 </div>


</template>

<script>
import Search from '../components/Search.vue'
import Loader from '../components/Loader.vue'

export default {
  components: { Search, Loader },
 data() {
    return {
      posts: null,
    };
  },
  mounted() {
    fetch("https://blog-capstone-h.herokuapp.com/posts")
        .then(res => res.json())
        .then(data => this.posts= data)
        .catch(err => console.log(err.message))
  },
   
};
</script>

<style scoped>

/* card */
@import url(https://fonts.googleapis.com/css?family=Merriweather:400,300,700);
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
body {
  background: #fbfbfb;
  font-family: "Merriweather", serif;
  font-size: 16px;
  color: #777;
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