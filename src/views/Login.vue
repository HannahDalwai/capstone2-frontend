<template>

<div class="main-w3layouts wrapper">
    <form @submit.prevent="login">
      <h1 >Login</h1>
       <hr />
	<div >
      <input  type="email" v-model="email" placeholder="Email" required/>
  	</div>

     <div >
       <input  type="password" v-model="password" placeholder="Password" required/>
  	 </div>


    <button type="submit"  :disabled="loading"> 
	<span v-show="loading" class="spinner-border spinner-border-sm"></span>
    <span>Log In</span></button>

  
   <p>Don't have an Account?<router-link :to="{name :'register'}"> sign up</router-link> </p>
    </form>

	</div>
 
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
	  loading: false,

    };
  },
  methods: {
    login() {
		console.log(this.email, this.password);
      fetch("https://blog-capstone-h.herokuapp.com/users", {
        method: "POST",
		// mode: 'no-cors',
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
			// console.log(json);
          localStorage.setItem("jwt", json.jwt);
          alert("User logged in");
           this.$router.push({ name: "blog" });
        })
        .catch((err) => {
			console.log(err);
          alert("User does not exist");
        });
    },
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@300&display=swap');
h1{
  font-family: 'Lobster', cursive;
}

</style>
