[![Contentstack](https://www.contentstack.com/assets/blt440aad5a09c89b2f/contentstack_icon.svg)](https://www.contentstack.com/)


# Build Website using Nuxt.js, imgix, and Contentstack

About Contentstack: Contentstack is a headless CMS with an API-first approach that puts content at the centre. It is designed to simplify the process of publication by separating code from content.

About imgix: imgix is an image optimization, management, & delivery API.  There's no need to store images on imgix, it instead simply connects to whereever your images are located.  For Contentstack, you would simply create a webfolder and point it at https://images.contentstack.io/. Then you can add an imgix SDK library, the Vue SDK in this example for Nuxt, to easily create responsive images.

About this project: Creating an example blog page using imgix with an existing project on Contentstack and Nuxt.


![banner](https://images.contentstack.io/v3/assets/blt398b654a8f2799a0/blt81c0af7fab7c9254/5f476c18a5031b4a3bba90d3/nuxtjs-sample-app.png "banner")


## Live Demo

You can check the [live demo](https://imgix-ctstack.netlify.app/) to get first-hand experience of the website.

## Comparison

This site was built using the below steps from Contentstack.  Of note, the image weight on a Chrome browser was brought down from 23.3 MB to 272 KB, which is a 98.9 % reduction in image weight! 

[Build Website using Nuxt.js and Contentstack](https://www.contentstack.com/docs/example-apps/build-a-website-using-nuxt-js-and-contentstack)

## Steps to add an imgix Library

Install the appropriate imgix library, in this example the Vue library.  

```
npm install vue-imgix
```

Add a file to the plugins, vue-imgix.js and add this:

```
import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
    domain: "{your imgix domain}",
    defaultIxParams: {
        auto: 'format,compress'
    },
});
```

You can then replace any `<img />` tags with `<ix-img>`.  For the src, I created a function in methods to remove the host name from the image urls sent by contentstack, which will be replaced by your imgix url in the vue-imgix.js plugin.  Like this:

```
methods: {
    imageSrc() {
      return (new URL(this.data.banner.image.url)).pathname
    }
  }
```