<template>
 

<div class="container">
  <div class="row">
    <div class="col">
     <h1 class="display-6"><strong>Your journey begins here</strong></h1>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat reprehenderit minus molestiae velit provident atque adipisci cumque assumenda saepe, rerum fugit reiciendis labore necessitatibus recusandae. Repudiandae sint quidem blanditiis accusantium.</p>
		     <button class="col btn btn-green-moon btn-rounded"> 
          <router-link :to="{name :'register'}"> 
             Start your journey
          </router-link>
         </button>
    </div>
    <div class="col">
    <img src="https://i.postimg.cc/RZYGYhNL/avenue-815297.jpg" class="rounded float-end" alt="...">
    </div>
  </div>
</div>


</template>

<script>
// @ is an alias to /src

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
 clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
}

.container{
  margin-top: 10%;
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
    border-radius: 35px;
}
.btn-green-moon:hover{
  color: #41493b;
}
</style>