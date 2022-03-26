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
 



 <h1>users</h1>
<!-- users table -->
<table >
  <tr>
    <th>user</th>
    <th>email</th>
    <th>contact</th>
    <th>member since</th>
    <th>actions</th>
    

  </tr>
    <tr v-for="user of filteredUsers" :key="user._id">
      <td >
         {{user.fullname}}
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
      <td >
        <button>edit</button>
      </td>
       <td >
        <button>delete</button>
      </td>
     
      <!-- <td >
        {{user.password}}
      </td> --> 
       <!-- <td >
        role
      </td> -->

    </tr>
  </table>




<h1>blogs</h1>
<!-- blogs table -->

<table >
  <tr>
    <th>title</th>
    <th>category</th>
    <th>description</th>
    <th>img url</th>
    <th>actions</th>
    

  </tr>
    <tr -for="post of filteredPosts" :key="post._id" >
      <td >
         {{user.fullname}}
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
      <td >
        <button>edit</button>
      </td>
       <td >
        <button>delete</button>
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
      filteredUsers: null,
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
   background-color: #F2F2F2;
   color: #65696B;
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

.username {
   color: #3498DB;
}

.username:hover, a:hover {
   color: #3498DB;
   cursor: pointer;
   text-decoration: underline;
}

/* .activeUser {
   color: #03AB61;
} */

/* .bannedUser, .suspendedUser {
   font-weight: 600;
} */
.bannedUser {
   color: red;
}

.suspendedUser {
   color: #FF8C00;
}

.commenter {
   color: #9A9DA0;
}

.admin, .staff, .moderator {
   font-weight: 600;
}

a {
   color: #3498DB;
   text-decoration: none;
}

nav {
   padding-left: 20px;
   padding-right: 20px;
   border-bottom: 1px solid #E9E9E9;
}
nav ul li {
   display: inline-block;
   font-weight: 600;
   font-size: 16px;
   text-transform: uppercase;
}

nav ul li {
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
}

.talk {
   text-transfor: uppercase;
   font-size: 24px;
}

.active {
   background-color: #F77160;
   color: white;
}

.roleHead {
   width: 115px;
}

.statusHead {
   width: 115px;
}

i {
   float: right;
   padding: 0px 15px;
   color: #787D80;
   font-size: 12px;
}

td.activeUser:hover, td.suspendedUser:hover, td.bannedUser:hover, td.commenter, td.staff, td.admin, td.moderator {
   cursor: pointer;
}

tr.table-header {
  border: 1px solid #BBBEBF;
}

.styled-select select {
   background: transparent;
   border: none;
   font-size: 14px;
   font-family: 'Source Sans Pro', sans-serif;
   height: 29px;
   padding: 5px; /* If you add too much padding here, the options won't show in IE */
   width: 100%;
}

.styled-select {
   margin-top: 5px;
   width:200px;
   border-radius: 2px;
   border: 1px solid #9A9DA0;
   color: #3B4A53;
}

.filter-ui, .search-ui {
   display: inline-block;
}

input[type=text] {
  padding: 6px;
  margin-top: 5px;
  font-size: 14px;
  width: 300px;
  border: 1px solid #9A9DA0;
  border-radius: 2px;
}

.search-container button {
  padding: 10px 5px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}


::-webkit-input-placeholder {
  color: #BBBEBF;
  font-size: 13px;
}
::-moz-placeholder {
  color: #BBBEBF;
  font-size: 13px;
}
:-ms-input-placeholder {
  color: #BBBEBF;
  font-size: 13px;
}
::placeholder {
  color: #BBBEBF;
  font-size: 13px;
}


</style>