import { createRouter, createWebHashHistory } from "vue-router";
import PostIndex from '../components/PostIndex'

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: PostIndex
    }
];

export default createRouter({
    history: createWebHashHistory(),
    routes
})