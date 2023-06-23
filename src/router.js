import { createRouter, createWebHistory} from 'vue-router'
import Home from './page/Home.vue'
import About from './page/About.vue'
import User from './page/user.vue'
import Contact from './page/Contact.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', redirect: 'home'},
        {path:'/home', component:Home},
        {path: '/about', component:About},
        {path: '/contact', component:Contact},
        {path: '/user', component: User}
    ]
})
export default router;