import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import Work from '../components/Work.vue';
import Products from '../components/Products.vue';
import Docs from '../components/Docs.vue';
import Contact from '../components/Contact.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
    {
		path: '/work',
		name: 'Work',
		component: Work,
	},
    {
		path: '/products',
		name: 'Products',
		component: Products,
	},
    {
		path: '/docs',
		name: 'Docs',
		component: Docs,
	},
    {
		path: '/contact',
		name: 'Contact',
		component: Contact,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;