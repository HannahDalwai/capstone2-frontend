<template>

<div class="main-w3layouts wrapper">
  <form @submit.prevent="register" >
	<h2>Sign Up</h2>
		  <div >
          <input type="text" v-model="fullname" placeholder="Username" required/>
	  	</div>

        <div>
          <input  type="text" v-model="email" placeholder="Contact " required/>
  		</div>

    	<div >
          <input  type="email" v-model="phone_number" placeholder="Email" required/>
  		</div>

	<div >
    <input  type="password" v-model="password" placeholder="Password" required/>
  		</div>
	
              <button type="submit"  :disabled="loading"> 
				<span v-show="loading" class="spinner-border spinner-border-sm"></span>
                <span>Sign Up</span></button>
		      

			   <p>Already have an Account?<router-link :to="{name :'login'}"> 
            log in
          </router-link> </p>
	
  </form>
  
	</div>
  
</template>
<script>
export default {
  data() {
    return {
      fullname: "",
      email: "",
      phone_number: "",
      password: "",
	  loading: false,
    };
  },
  methods: {
    register() {
		console.log(this.fullname, this.email, this.phone_number, this.password)
      fetch("https://blog-capstone-h.herokuapp.com/users", {
        method: "POST",
		// mode: 'no-cors',
        body: JSON.stringify({
          fullname: this.fullname,
          email: this.email,
          phone_number: this.phone_number,
          password: this.password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
			console.log(json)
          alert("User registered");
          localStorage.setItem("jwt", json.jwt);
          this.$router.push({ name: "login" });
        })
        .catch((err) => {
			console.log("error: "+err)
          alert(err);
        });
    },
  },
};
</script>
