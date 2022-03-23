<template>
   <div v-if="filteredBlog">
    <div class="sortBar">
      <label>
        Sort Date:
        <select v-model="date" @change="sortDate(date)">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <label>
        Sort Title:
        <select v-model="title" @change="sortTitle(title)">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <label>
        Filter Category:
        <select v-model="gender" @change="filterCategory(category)">
          <option value="Skincare">Skincare</option>
          <option value="Movement">Movement</option>
          <option value="Feeling Toolbox">Feeling Toolbox</option>
        </select>
      </label>
    </div>
    <div id="user-list">
      <Card
        v-for="(blog, idx) of filteredBlog"
        :key="idx"
        :blog="blog"
        :idx="idx"
      />
    </div>
  </div>
  <div v-else>loading search
      </div>

</template>

<script>
export default {
 methods: {
    // Sorting methods sort the filteredBBlogs   // Filter methods check for all results in the blog array, and writes the results to filteredblogs
    // This ensures that when sorting by date or title, you are still applying any filters
    sortAge(dir) {
      this.filteredBlog = this.filteredBlog.sort(
        (a, b) => a.date - b.date
      );
      if (dir == "desc") this.filteredBlog.reverse();
    },
    sortTitle(dir) {
      this.filteredPeople = this.filteredTitle.sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });
      if (dir == "desc") this.filteredBlog.reverse();
    },
    filterCategory(category) {
      if (category) {
        this.filteredBlog = this.blog.filter(
          (blog) => blog.category == category
        );
      } else {
        this.filteredBlog = this.blog;
      }
    },
  },
}
</script>

<style>

</style>