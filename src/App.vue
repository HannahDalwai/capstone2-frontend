<template>
 <div id="app">
     <Navbar />
        <div class="container">
<router-view/>
        </div>
        </div>
<Footer/>
</template>


<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
     Navbar,
     Footer  },
 
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Open+Sans:wght@300&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;

}

.error-feedback{
  color: rgb(161, 38, 38);
}

h1{
  font-family: 'Lobster', cursive;
}
p{
  font-family: 'Open Sans', sans-serif;
  line-height: 1.4;
}
</style>
