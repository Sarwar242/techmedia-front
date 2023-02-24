import { createWebHistory, createRouter} from 'vue-router';
import Home from './components/Home.vue';
import Home2 from './components/Home2.vue';
import LifeCycle from './components/LifeCycle.vue';
import SimpleForm from './components/SimpleForm.vue';
import Profile from './components/Profile.vue';
import PageNotFound from './components/PageNotFound.vue';
const routes =[
    {
        name: 'home',
        path: '/',
        component: Home
    },    {
        name: 'home2',
        path: '/home2',
        component: Home2
    },    {
        name: 'lifecycle',
        path: '/lifecycle',
        component: LifeCycle
    },    {
        name: 'form',
        path: '/form',
        component: SimpleForm
    },  {
        name: 'profile',
        path: '/profile/:name',
        component: Profile
    },  {
        name: 'notfound',
        path: '/:pathMatch(.*)*',
        component: PageNotFound
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;