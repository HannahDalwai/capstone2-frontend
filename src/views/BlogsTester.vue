<template>
<div v-if="posts" class="all">
<h3>Latest Blogs</h3>
                <div class="row g-4">
                    <div class="col-sm-6 col-xl-4 col-md-6">
                        <div id="latest" class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <img :src="posts[posts.length-1].img" alt="">
                            <div class="ms-6">
                                <p class="mb-2">{{posts[posts.length-1].title}}</p>
                                <h6 class="mb-0">{{posts[posts.length-1].category}}</h6>
                            </div>
                        </div>
                    </div>
                     <div class="col-sm-6 col-xl-4 col-md-6">
                        <div id="latest" class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <img :src="posts[posts.length-2].img" alt="">
                            <div class="ms-6">
                                <p class="mb-2">{{posts[posts.length-2].title}}</p>
                                <h6 class="mb-0">{{posts[posts.length-2].category}}</h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-xl-4 col-md-6">
                        <div id="latest" class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <img :src="posts[posts.length-3].img" alt="">
                            <div class="ms-6">
                                <p class="mb-2">{{posts[posts.length-3].title}}</p>
                                <h6 class="mb-0">{{posts[posts.length-3].category}}</h6>
                            </div>
                        </div>
                    </div>



</div>
</div>
<div v-else>
    <Loader/>
</div>

</template>

<script>
import Loader from '../components/Loader.vue'

export default {
  props:["post","idx"],
  components: { Loader },
 data() {
    return {
      posts: null,
      filteredBlogs: null,
      title: "",
      search: "",
      
    };
  },
  mounted() {
    fetch("https://blog-capstone-h.herokuapp.com/posts")
        .then(res => res.json())
        // .then(data => this.posts= data)
        // this.filteredBlogs = data
    .then((data)=>{
      this.posts = data;
      this.filteredBlogs = data
    })
        .catch(err => console.log(err.message))

  },
   methods: {
    sortTitle(dir) {
      this.filteredBlogs = this.filteredBlogs.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      if (dir == "desc") this.filteredBlogs.reverse();
    },
   },
computed: {
    filteredPosts: function () {
      return this.posts.filter((post) => {
        return post.title.match(this.search);
      });
    },
  },

};
</script>
<style>
.all{
	margin-top: 10%;
}
img{
	border-radius: 5%;
	padding-right: 5px;
}
#latest{
	height: 180px;
}
</style>