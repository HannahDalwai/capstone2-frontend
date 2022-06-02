<template>
<main>
<div class="container">
  <div class="row">
    <div id="call-to-action" class="col">
     <h1 class="display-6"><strong>Your journey begins here</strong></h1>
     <p>Dont wait for monday to come around. Start today. Start with us.</p>
		     <button class="col btn btn-green-moon btn-rounded"> 
          <router-link :to="{name :'register'}"> 
             Start your journey
          </router-link>
         </button>
    </div>
    <!-- <div class="col col-md-6 col-sm-12 col-lg-6 col-xl-6">
    <img src="https://i.postimg.cc/y8Nkfk6r/casey-horner-4r-DCa5h-Bl-Cs-unsplash.jpg" class=" float-end" alt="...">
    </div> -->
  </div>
</div>
</main>
</template>

<script>

export default {
  name: 'Home',
  components: {
  
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@300&display=swap');
main{
  background: linear-gradient( rgba(48, 45, 45, 0.5), rgba(0, 0, 0, 0.5) ), url("https://i.postimg.cc/y8Nkfk6r/casey-horner-4r-DCa5h-Bl-Cs-unsplash.jpg");
  background-position: center;background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding:0;

}
.call-to-action{
  padding-top: 50px;
}
 .container{
   margin: 0;
   padding: 0;
  height: 100vh;
 }
h1{
  font-family: 'Lobster', cursive;
  color: white;
}

p{
  font-family: 'Open Sans', sans-serif;
  color: white;
  
}
.btn-green-moon {
    background: #56ab2f;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #a8e063, #56ab2f);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #a8e063, #56ab2f); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #fff;
    border: 3px solid #eee;
}
.btn-rounded {
    
    text-decoration: none;
}
.btn-green-moon:hover{
  color: #41493b;
}
button{
   border-radius: 35px;
}
a{
   text-decoration: none !important;
   color: white !important;
   padding: 10px 10px 10px 10px;
}
</style>