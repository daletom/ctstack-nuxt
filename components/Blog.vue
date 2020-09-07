<template>
  <section id="blogs">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>Blogs</h2>
          <hr class="star-primary" />
        </div>
      </div>
      <div class="row">
        <div v-for="(blog, key) in blogs" :key="key" class="card">
          <PortfolioGallery
            class="card-img-top"
            :imgobject="blog.blog_list.blog_image"
          />
          <div class="card-body" v-html="blog.blog_list.blog_details" />
          <a
            :href="'/blogs' + blog.blog_list.cta.href"
            class="btn btn-primary linkToPost"
            >{{ blog.blog_list.cta.title }}</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PortfolioGallery from '~/components/PortfolioGallery.vue'

export default {
  props: ["entry"],
  components:{
    PortfolioGallery
  },
  data() {
    return {
      blogs: this.entry[0].modular_blocks,
    };
  },
};
</script>

<style></style>
