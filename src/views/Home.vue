<template>
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
    <div class="col col-md-12 col-sm-12">
    <img src="https://i.postimg.cc/RZYGYhNL/avenue-815297.jpg" class=" float-end" alt="...">
    </div>
  </div>
</div>
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
img{
  height: 100%;
  width: 100%;
  border-radius: 55% 42% 48% 16% / 69% 0% 100% 0%;
}
.call-to-action{
  padding-top: 50px;
}
.container{
  margin-top: 10%;
  height: 100vh;
}
h1{
  font-family: 'Lobster', cursive;
}

p{
  font-family: 'Open Sans', sans-serif;
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
router-link{
   text-decoration: none;
   color: white;
}
</style>