<template>
  <ix-img
    :src="imageSrc()"
    :alt="imgobject.filename"
    loading="lazy"
    
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
  name: 'PortfolioImg',
  methods: {
    imageSrc() {
      return (new URL(this.imgobject.url)).pathname
    }
  }
}
</script>
