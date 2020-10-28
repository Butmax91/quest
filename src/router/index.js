import Vue from 'vue'
import VueRouter from 'vue-router'
import Quiz from '../views/Quiz.vue'

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/next_step',
    name: 'NextStep',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NextStep.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router
