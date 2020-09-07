import Vue from 'vue';
import VueImgix from 'vue-imgix';

Vue.use(VueImgix, {
    domain: "ctstack-test.imgix.net",
    defaultIxParams: {
        auto: 'format,compress'
    },
});
