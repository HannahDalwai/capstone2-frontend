<template>
  <header>
  <h1>CSS-only direction-aware hover effect</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet aliquid rerum cumque veniam unde nesciunt quos ipsum ad. Itaque eaque nemo sapiente eligendi officiis quaerat harum facere nulla aliquam.</p>
  <p>Also, you can <strong>resize</strong> the window. It keeps working when grid changes.</p>
</header>
<div class="container">
   <div class="row">
    <div class="col">
 <img src="https://i.postimg.cc/yYnJPRbT/Untitled-design.png" alt="">
    </div>
    
   
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
header {
  padding: 1rem;
  font-size: 1em;
}

h1 {
  margin-top: 0;
}

*, *:before, *:after {
  box-sizing: border-box;
}
img {
 height: 100%;
  width: 50%;
  object-fit: cover;
  padding: 0;
}
.col{
  padding: 0%;
}

</style>