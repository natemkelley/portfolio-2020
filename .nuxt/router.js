import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _900eea18 = () => interopDefault(import('../pages/pages/CocaCola.vue' /* webpackChunkName: "pages/pages/CocaCola" */))
const _99266ada = () => interopDefault(import('../pages/pages/Intro.vue' /* webpackChunkName: "pages/pages/Intro" */))
const _84d26c12 = () => interopDefault(import('../pages/pages/ModalLarge.vue' /* webpackChunkName: "pages/pages/ModalLarge" */))
const _3e8c2e8a = () => interopDefault(import('../pages/pages/Test.vue' /* webpackChunkName: "pages/pages/Test" */))
const _01c62e24 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/pages/CocaCola",
    component: _900eea18,
    name: "pages-CocaCola"
  }, {
    path: "/pages/Intro",
    component: _99266ada,
    name: "pages-Intro"
  }, {
    path: "/pages/ModalLarge",
    component: _84d26c12,
    name: "pages-ModalLarge"
  }, {
    path: "/pages/Test",
    component: _3e8c2e8a,
    name: "pages-Test"
  }, {
    path: "/",
    component: _01c62e24,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
