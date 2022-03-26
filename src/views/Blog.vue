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

<!-- <div class="container">
  <div class="row">
    <div class="col-md-6 item">
      <div class="item-in">
        <h4>{{post.title}}</h4>
        <div class="seperator"></div>
        <p>{{post.description.substring(0, 100)}}</p>
         <router-link class="read-more" :to="{ name: 'BlogDetails', params: { id: post._id } }" >Read more<i class="fa fa-long-arrow-right"></i></router-link>
          <br>
         <router-link class="read-more" :to="{ name: 'BlogDetailsTester', params: { id: post._id } }" >Testing<i class="fa fa-long-arrow-right"></i></router-link>
      </div>
      </div>
    </div>
    </div> -->
<div class="col-lg-4 col-md-6 col-sm-6">
		<article class="post-grid mb-5 ">
			<a class="post-thumb mb-4 d-block">
				<img  :src="post.img" alt="" class="img-fluid w-100">
			</a>

			<div class="post-content-grid">
				<div class="label-date">
					<span class="day">{{ post.date }}</span>
				</div>
				<span class="cat-name text-color font-extra font-sm text-uppercase letter-spacing">{{ post.category }}</span>
				<h3 class="post-title mt-1"><p >{{ post.title }}</p></h3>
				<p>{{ post.description.substring(0, 100) }} </p>
			</div>
         <router-link class="read-more" :to="{ name: 'BlogDetails', params: { id: post._id } }" >Read more<i class="fa fa-long-arrow-right"></i></router-link>
        <br>           
		</article>
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


	<!-- <div class="col-lg-4 col-md-6 col-sm-6">
		<article class="post-grid mb-5 ">
			<a class="post-thumb mb-4 d-block">
				<img  :src="post.img" alt="" class="img-fluid w-100">
			</a>

			<div class="post-content-grid">
				<div class="label-date">
					<span class="day">15</span>
					<span class="month text-uppercase">apr</span>
				</div>
				<span class="cat-name text-color font-extra font-sm text-uppercase letter-spacing">Travel</span>
				<h3 class="post-title mt-1"><p >{{ post.title }}</p></h3>
				<p>{{ post.description }} </p>
			</div>
		</article>
	</div> -->







  


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