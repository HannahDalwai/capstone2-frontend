<template>
<div v-if="posts" class="all">
<!-- TESTING -->
<div v-for="user of filteredUsers" :key="user._id">
  <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update user</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <div class="mb-3">
        <label for="addName" class="form-label">Name</label>
        <input
          class="form-control"
          type="text"
          name="addName"
          id="addName"
          v-model="fullname"
        />
      </div>
      <div class="mb-3">
        <label for="addEmail" class="form-label">Email</label>
        <input
          class="form-control"
          type="email"
          name="addEmail"
          id="addEmail"
          v-model="email"
        />
      </div>
      <div class="mb-3">
        <label for="addContact" class="form-label">Phone Number</label>
        <input
          class="form-control"
          type="text"
          name="addContact"
          id="addContact"
          v-model="phone_number"
        />
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button  @click="updateUser()" type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
  <!-- END --> 
 <h1>users</h1>
   <hr/>
<!-- users table -->
<table >
  <tr class="table-header">
    <th>user</th>
    <th>email</th>
    <th>contact</th>
    <th>member since</th>
    <th>actions</th>
    <th></th>
    

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
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  edit
</button>
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
<hr/>
<!-- blogs table -->

<table >
  <tr class="table-header">
    <th>title</th>
    <th>category</th>
    <th>description</th>
    <th>img url</th>
    <th>actions</th>
    <th></th>
    

  </tr>
    <tr v-for="post of filteredPosts" :key="post._id" >
      <td >
         {{post.title}}
        </td>
      <td >
        {{post.category}}
      </td>
      <td >
        {{post.img}}
      </td>
      <td >
        {{post.description.substring(0,5)}}
      </td>
      <td >
        <button>edit</button>
      </td>
       <td >
         <button @click="deletePost(post._id)" class="btn btn-danger me-3">Delete</button>
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
      email: "",
      password: "",
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
i {
   float: right;
   padding: 0px 15px;
   color: #787D80;
   font-size: 12px;
}
tr.table-header {
  border: 1px solid #BBBEBF;
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