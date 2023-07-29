require('./bootstrap');

import { createApp } from 'vue';
import router from './router';

// Vue.component('pagination', require('laravel-vue-pagination'));

import PostIndex from './components/PostIndex'

createApp({
    components: {
        PostIndex
    }
})
.use(router)
.mount('#app');