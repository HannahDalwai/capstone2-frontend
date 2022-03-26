<template>
<div v-if="posts" class="all">

<!-- display counter -->
<div class="container-fluid pt-4 px-4">
                <div class="row g-4">
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class='bx bx-edit bx-lg'  ></i>
                            <div class="ms-6">
                                <p class="mb-2">{{posts.length}}</p>
                                <h6 class="mb-0">Blogs posted</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                        <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i class='bx bxs-user bx-lg'></i>
                            <div class="ms-3">
                                <p class="mb-2">{{users.length}}</p>
                                <h6 class="mb-0">Users created</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-3">
                          <label>
        Sort Fullname:
        <select v-model="fullname" @change="sortUsers(fullname)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <br> <br>
      </label>
      <input type="text"  placeholder="search blogs" v-model="search">
      <div v-for="user of filteredUsers" :key="user._id">
                    </div> </div>
    <div class="col-sm-6 col-xl-3">
    <label>
        Sort Fullname:
        <select v-model="fullname" @change="sortUsers(fullname)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <br> <br>
      <input type="text"  placeholder="search users" v-model="search">
<div v-for="user of filteredUsers" :key="user._id">
                    </div>
                </div>
           
<!-- sort and search -->
 

 
<!-- users table -->
      



 </div>
 </div>
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