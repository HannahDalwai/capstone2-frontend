<template>
<Search/>

<div class="container-fluid">
  <div class="col-lg-6 col-md-6 hidden-sm hidden-xs">
    <figure>
      <div class="media" style="background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/584938/bg_5.png)"></div>
      <figcaption>
        <svg viewBox="0 0 200 200" version="1.1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect id="alpha" x="0" y="0" width="100%" height="100%"></rect>
              <text class="title" dx="50%" dy="2.5em">ENJOY</text>
              <text class="title" dx="50%" dy="3.5em">EVERY</text>
              <text class="title" dx="50%" dy="4.5em">MOMENT</text>
            </mask>
          </defs>
          <rect id="base" x="0" y="0" width="100%" height="100%"></rect>
        </svg>
        <div class="body">
          <p>Enamel pin selvage health goth edison bulb, venmo glossier tattooed hella butcher cred iPhone. Plaid skateboard man braid wayfarers.</p>
        </div>
      </figcaption><a href="#"></a>
    </figure>
  </div>
</div>




   <div v-if="posts">
    <h2>Blogs</h2>
    <div class="posts-container" v-if="posts">
      <div 
        v-for="post of posts"
        :key="post._id"
        >


        <div>{{post.description}}</div>
        <div>{{post.category}}</div>
        <div>{{post.date}}</div>
        <img :src="post.img" :alt="post.title" />
        {{ post.author}}
        <router-link :to="{ name: 'BlogDetails', params: { id: post._id } }" >Read more</router-link>
      </div>
    </div>



 <button>
   <router-link :to="{name:'createblog'}" class="nav-link"> Create blog</router-link>
 </button>

  </div>


  <div v-else>Loading blogs... 
    <div class="flower-spinner">
      <div class="dots-container">
        <div class="bigger-dot">
          <div class="smaller-dot"></div>
        </div>
      </div>
    </div>  
 </div>


</template>

<script>
import Search from '../components/Search.vue'
export default {
  components: { Search },
 data() {
    return {
      posts: null,
    };
  },
  mounted() {
    fetch("https://blog-capstone-h.herokuapp.com/posts")
        .then(res => res.json())
        .then(data => this.posts= data)
        .catch(err => console.log(err.message))
  },
   
};
</script>

<style scoped>
.flower-spinner,  .flower-spinner * {
      box-sizing: border-box;
    }

    .flower-spinner {
      height: 70px;
      width: 70px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .flower-spinner .dots-container {
      height: calc(70px / 7);
      width: calc(70px / 7);
    }

    .dots-container {
      margin-left: 50%;
    }

    .flower-spinner .smaller-dot {
      background: #56ab2f;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      animation: flower-spinner-smaller-dot-animation 2.5s 0s infinite both;

    }

    .flower-spinner .bigger-dot {
      background: #56ab2f;
      height: 100%;
      width: 100%;
      padding: 10%;
      border-radius: 50%;
      animation: flower-spinner-bigger-dot-animation 2.5s 0s infinite both;
    }

    @keyframes flower-spinner-bigger-dot-animation {
      0%, 100% {
        box-shadow: #56ab2f,
       #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px;
      }

      50% {
        transform: rotate(180deg);
      }

      25%, 75% {
        box-shadow: #56ab2f 26px 0px 0px,
        #56ab2f -26px 0px 0px,
        #56ab2f 0px 26px 0px,
        #56ab2f 0px -26px 0px,
        #56ab2f 19px -19px 0px,
        #56ab2f 19px 19px 0px,
        #56ab2f -19px -19px 0px,
        #56ab2f -19px 19px 0px;
      }

      100% {
        transform: rotate(360deg);
        box-shadow: #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px;
      }
    }

    @keyframes flower-spinner-smaller-dot-animation {
      0%, 100% {
        box-shadow: #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px;
      }

      25%, 75% {
        box-shadow: #56ab2f 14px 0px 0px,
        #56ab2f -14px 0px 0px,
        #56ab2f 0px 14px 0px,
        #56ab2f 0px -14px 0px,
        #56ab2f 10px -10px 0px,
        #56ab2f 10px 10px 0px,
        #56ab2f -10px -10px 0px,
        #56ab2f -10px 10px 0px;
      }

      100% {
        box-shadow: #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px,
        #56ab2f 0px 0px 0px;
      }
    }


* {
  box-sizing: border-box;
}


/* card */
.container-fluid {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  width: 100%;
}
.media {
  background-position: center;
  background-size: cover;
  height: 100%;
  position: absolute;
  transition: all 0.3s ease;
  width: 100%;
}
figure {
  height: 370px;
  overflow: hidden;
  position: relative;
}
figure a {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
}
figure:hover .media {
  transform: scale(1.25);
}
figcaption {
  color: #252830;
  height: calc(100% - 30px);
  margin: 15px;
  left: 0;
  position: absolute;
  top: 0;
  width: 250px;
}
.body {
  background-color: white;
  bottom: 0;
  padding: 15px;
  position: absolute;
  width: 100%;
}
svg {
  height: inherit;
  width: 100%;
}
svg text {
  text-anchor: middle;
}
svg #alpha {
  fill: white;
}
svg .title {
  font-size: 28px;
  font-family: "Montserrat";
  letter-spacing: 5px;
}
svg #base {
  fill: white;
  -webkit-mask: url(#mask);
  mask: url(#mask);
}
</style>