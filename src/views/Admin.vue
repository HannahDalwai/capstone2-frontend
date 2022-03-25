<template>

<!-- CREATE BLOG -->
    <button>
   <router-link  :to="{name:'CreateBlog'}" class="nav-link"> CreateBlog</router-link>
 </button>

<!-- POSTS -->
<div v-if="posts" class="all">

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
         <button @click="deletePost(post._id)" class="btn btn-danger me-3">Delete</button>
      </div>
      </div>
    </div>
   
    </div>
    </div>
    </div>
    </div>
    
  <div v-else>
    Loading blogs... 
    <Loader/>
 </div>



 <!-- USERS -->

<div v-if="users" class="all">


  

  <h2>Users</h2>
  <p>{{users.length}} users found</p>
    <label>
        Sort Fullname:
        <select v-model="fullname" @change="sortUsers(fullname)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <input type="text"  placeholder="search" v-model="search">

    <div class="posts-container" v-if="users">

      <div v-for="user of filteredUsers" :key="user._id">

<div class="container">
  <div class="row">
    <div class="col-md-6 item">
      <div class="item-in">
        <h4>{{user.fullname}}</h4>
        <div class="seperator"></div>
        <p>{{user.contact}}</p>
      </div>
      </div>
    </div>
   
    </div>
    </div>
    </div>
    </div>
    
  <div v-else>
    Loading users... 
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
      users: null,
      filteredBlogs: null,
      title: "",
      search: "",
      fullname: "",
      
    };
  },
  mounted() {
    fetch("https://blog-capstone-h.herokuapp.com/posts")
        .then(res => res.json())
    .then((data)=>{
      this.posts = data;
      this.filteredBlogs = data
    })
        .catch(err => console.log(err.message));

         fetch("https://blog-capstone-h.herokuapp.com/users")
        .then(res => res.json())
    .then((data)=>{
      this.users = data;
      this.filteredUsers = data
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
    // USERS
     sortUsers(dir) {
      this.filteredUsers = this.filteredUsers.sort((a, b) => {
        if (a.fullname < b.fullname) {
          return -1;
        }
        if (a.fullname > b.fullname) {
          return 1;
        }
        return 0;
      });
      if (dir == "desc") this.filteredUsers.reverse();
    },

    // DELETE
    deletePost(_id){
      //   if (!localStorage.getItem("jwt")) {
      //   alert("User not logged in");
      //   return this.$router.push({ name: "Login" });
      // }
      let warning = "Are you sure";
      if(confirm(warning) == true){

      
      fetch("https://blog-capstone-h.herokuapp.com/posts/" + _id, {
        method: "DELETE",
      
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Post Deleted");
          location.reload()
        })
        .catch((err) => {
          alert(err);
        });
        }
        },
   },
computed: {
    filteredPosts: function () {
      return this.posts.filter((post) => {
        return post.title.match(this.search);
      });
    },
     filteredUsers: function () {
      return this.users.filter((user) => {
        return user.fullname.match(this.search);
      });
    },
  },

};
</script>

<style>

</style>