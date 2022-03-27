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
<!-- sort and search -->
<div class="col-sm-6 col-xl-3">
         <label>
        Sort Title:
        <select v-model="title" @change="sortTitle(title)">
            <option value="">All</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <br> <br>
          <input type="text"  placeholder="search blogs" v-model="search1">
       </div>
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
<button>
   <router-link  :to="{name:'CreateBlog'}" class="nav-link">  create blog</router-link>
 </button>

  <!-- END -->
 <h1>users</h1>
<!-- users table -->
<div class="table-responsive">  
<table >
  <tr class="table-header table-dark">
    <th>user</th>
    <th>email</th>
    <th>contact</th>
    <th>member since</th>
  </tr>
    <tr v-for="user of filteredUsers" :key="user._id">
      <td >
         <router-link  :to="{name:'Profile', params:{
           id: user._id
         },}" class="nav-link">{{user.fullname}}</router-link>
  
        </td>
      <td >
        {{user.phone_number}}
      </td>
      <td >
        {{user.email}}
      </td>
      <td >
        {{user.join_date}}
      </td>
      <!-- <td >
        {{user.password}}
      </td> --> 
       <!-- <td >
        role
      </td> -->
    </tr>
  </table>
   </div>

<h1>blogs</h1>
<!-- blogs table -->
<div class="table-responsive">  
<table >
  <tr class="table-dark table-header">
    <th>title</th>
    <th>category</th>
    <th>img url</th>
    <th>description</th>
    <th>actions</th>
    <th></th>
  </tr>
    <tr v-for="post of filteredPosts" :key="post._id" >
      <td >
         <router-link  :to="{name:'BlogDetails', params:{
           id: post._id
         },}" class="nav-link">{{post.title}}</router-link>
        </td>
      <td >
        {{post.category}}
      </td>
      <td >
        {{post.img}}
      </td>
      <td >
        {{post.description.substring(0,7)}}
      </td>
      <!-- <td >
        {{user.password}}
      </td> --> 
       <!-- <td >
        role
      </td> -->
    </tr>
  </table>
  </div>
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
  props:["post","idx", "id"],
  components: { Loader },
 data() {
    return {
      posts: null,
      users: null,
      filteredBlogs: null,
      filteredUsers: null,
      title: "",
      search: "",
      search1: "",
      fullname: "",
      email: "",
      phone_number: "",
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
        updateUser() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://blog-capstone-h.herokuapp.com/users/" + this.id, {
        method: "PUT",
        body: JSON.stringify({
          fullname: this.fullname,
          email: this.email,
          phone_number: this.phone_number,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          this.user = json;
          alert("User Updated!");
          location.reload();
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
   },
computed: {
    filteredPosts: function () {
      return this.posts.filter((post) => {
        return post.title.match(this.search1);
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
<style scoped>

.container {
   width: 950px;
   margin: auto;
}
table {
   width: 100%;
}
th, td {
   padding-top: 15px;
   padding-bottom: 15px;
   padding-left: 15px;
}
th {
   text-align: left;
   
}
tr:nth-child(odd) {
   background: #F9F9F9;
   border-top: 1px solid transparent;
   border-left: 1px solid transparent;
}
tr:nth-child(even) {
   background: #FFF;
   border-top: 1px solid transparent;
   border-left: 1px solid transparent;
}
tr:hover {
   background-color: #EBF5FB;
   cursor: default;
   border: 1px solid #67B2E4;
}
a {
   color: #3498DB;
   text-decoration: none;
}
i {
   float: right;
   padding: 0px 15px;
   font-size: 12px;
}
tr.table-header {
  border: 1px solid #BBBEBF;
  background-color: black;
}
input[type=text] {
  padding: 6px;
  margin-top: 5px;
  font-size: 14px;
  width: 300px;
  border: 1px solid #9A9DA0;
  border-radius: 2px;
}
</style>