<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   <router-link :to="{name:'home'}" class="navbar-brand">Wellness Kit</router-link>
      <div class="navbar-nav mr-auto">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :to="{name:'home'}" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
          <li class="nav-item">
           <router-link :to="{name:'about'}" class="nav-link"> About Us</router-link>
        </li>
            <li class="nav-item">
           <router-link :to="{name:'blog'}" class="nav-link"> Blogs</router-link>
        </li>
         <li class="nav-item">
                 <router-link :to="{name:'profile'}" class="nav-link">Profile</router-link>

        </li>
        <li class="nav-item">
        <router-link  class="but nav-link" to="/Login"><i class='bx bx-log-out-circle'></i></router-link>
        </li>
      </ul>
       </div>
 
         
       
     
    </div>
  </div>
</nav>



</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push({name:'login'});
    },
    // confirm(){
    //   confirm("Are you sure you want to logout?");
    //   this.$router.push({ name: "home" });
    // }
  }
};
</script>
<style scoped>

.nav-link:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 50%;
  position: absolute;
  background: #56ab2f;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.nav-link:hover:after { 
  width: 100%; 
  left: 0; 
}
.nav-link {
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  
  display: inline-block;
  padding: 15px 20px;
  position: relative;
}
.navbar-brand:hover{
color:#56ab2f

}



</style>