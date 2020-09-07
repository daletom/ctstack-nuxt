<template>
  <ix-img
    :src="imageSrc()"
    width="360"
    height="270"
    :imgixParams="{fit:'fill', fill:'solid', fillcolor:'f7fafc'}"
    :alt="imgobject.filename"
    loading="lazy"
    fixed
    
  />
</template>

<script>
import VueImgix from '~/plugins/vue-imgix.js'

export default {
  props: {
    imgobject: {
      type: Object,
      default: null
    }
  },
  name: 'PortfolioGallery',
  methods: {
    imageSrc() {
      return (new URL(this.imgobject.url)).pathname
    }
  }
}
</script>
