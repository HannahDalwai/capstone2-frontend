<template>
  <header>
  <h1>CSS-only direction-aware hover effect</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eveniet aliquid rerum cumque veniam unde nesciunt quos ipsum ad. Itaque eaque nemo sapiente eligendi officiis quaerat harum facere nulla aliquam.</p>
  <p>Also, you can <strong>resize</strong> the window. It keeps working when grid changes.</p>
</header>
<div class="container">
   <div class="row">
    <div class="col">
 <img src="https://i.postimg.cc/3wTF1WKc/aloe-3986306.jpg" alt="">
    </div>
    <div class="col">
     <img src="https://i.postimg.cc/pLHvHbRn/pexels-steve-johnson-1843717.jpg" alt="">
    </div>
    <div class="col">
    <img src="https://i.postimg.cc/3wTF1WKc/aloe-3986306.jpg" alt="">
    </div>
  </div>
   <div class="row">
    <div class="col">
 <img src="https://i.postimg.cc/pLHvHbRn/pexels-steve-johnson-1843717.jpg" alt="">
    </div>
    <div class="col">
     <img src="https://i.postimg.cc/02DJbYwJ/gemma-chua-tran-Ftvf4-Vb-Vb-DE-unsplash.jpg" alt="">
    </div>
    <div class="col">
    <img src="https://i.postimg.cc/pLHvHbRn/pexels-steve-johnson-1843717.jpg" alt="">
    </div>
  </div>
   <div class="row">
    <div class="col">
 <img src="https://i.postimg.cc/3wTF1WKc/aloe-3986306.jpg" alt="">
    </div>
    <div class="col">
     <img src="https://i.postimg.cc/pLHvHbRn/pexels-steve-johnson-1843717.jpg" alt="">
    </div>
    <div class="col">
    <img src="https://i.postimg.cc/tJHpfxCL/coconut-3221935.jpg" alt="">
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
  max-width: 100%;
  width: 100%;
  object-fit: cover;
  padding: 0;
}
.col{
  padding: 0%;
}

</style>