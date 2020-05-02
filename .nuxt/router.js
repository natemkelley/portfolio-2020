import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c1ae8858 = () => interopDefault(import('../pages/accessible.vue' /* webpackChunkName: "pages/accessible" */))
const _426efb0a = () => interopDefault(import('../pages/pages/asu.vue' /* webpackChunkName: "pages/pages/asu" */))
const _fcdb6bf6 = () => interopDefault(import('../pages/pages/byu.vue' /* webpackChunkName: "pages/pages/byu" */))
const _ab5a5a98 = () => interopDefault(import('../pages/pages/cocacola.vue' /* webpackChunkName: "pages/pages/cocacola" */))
const _2ef6cbdf = () => interopDefault(import('../pages/pages/collegewebdev.vue' /* webpackChunkName: "pages/pages/collegewebdev" */))
const _2f836168 = () => interopDefault(import('../pages/pages/Github.vue' /* webpackChunkName: "pages/pages/Github" */))
const _bfbe0f22 = () => interopDefault(import('../pages/pages/graduateresearch.vue' /* webpackChunkName: "pages/pages/graduateresearch" */))
const _3bfaaab3 = () => interopDefault(import('../pages/pages/intro.vue' /* webpackChunkName: "pages/pages/intro" */))
const _c3b657fa = () => interopDefault(import('../pages/pages/khione.vue' /* webpackChunkName: "pages/pages/khione" */))
const _02ef088e = () => interopDefault(import('../pages/pages/leadership.vue' /* webpackChunkName: "pages/pages/leadership" */))
const _389b6c9e = () => interopDefault(import('../pages/pages/smrts.vue' /* webpackChunkName: "pages/pages/smrts" */))
const _77c2af02 = () => interopDefault(import('../pages/pages/studioux.vue' /* webpackChunkName: "pages/pages/studioux" */))
const _4640f6ca = () => interopDefault(import('../pages/pages/test.vue' /* webpackChunkName: "pages/pages/test" */))
const _01c62e24 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/accessible",
    component: _c1ae8858,
    name: "accessible"
  }, {
    path: "/pages/asu",
    component: _426efb0a,
    name: "pages-asu"
  }, {
    path: "/pages/byu",
    component: _fcdb6bf6,
    name: "pages-byu"
  }, {
    path: "/pages/cocacola",
    component: _ab5a5a98,
    name: "pages-cocacola"
  }, {
    path: "/pages/collegewebdev",
    component: _2ef6cbdf,
    name: "pages-collegewebdev"
  }, {
    path: "/pages/Github",
    component: _2f836168,
    name: "pages-Github"
  }, {
    path: "/pages/graduateresearch",
    component: _bfbe0f22,
    name: "pages-graduateresearch"
  }, {
    path: "/pages/intro",
    component: _3bfaaab3,
    name: "pages-intro"
  }, {
    path: "/pages/khione",
    component: _c3b657fa,
    name: "pages-khione"
  }, {
    path: "/pages/leadership",
    component: _02ef088e,
    name: "pages-leadership"
  }, {
    path: "/pages/smrts",
    component: _389b6c9e,
    name: "pages-smrts"
  }, {
    path: "/pages/studioux",
    component: _77c2af02,
    name: "pages-studioux"
  }, {
    path: "/pages/test",
    component: _4640f6ca,
    name: "pages-test"
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
