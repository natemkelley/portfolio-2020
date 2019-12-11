import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _b4b0da2c = () => interopDefault(import('../pages/pages/Asu.vue' /* webpackChunkName: "pages/pages/Asu" */))
const _366a3c36 = () => interopDefault(import('../pages/pages/Byu.vue' /* webpackChunkName: "pages/pages/Byu" */))
const _900eea18 = () => interopDefault(import('../pages/pages/CocaCola.vue' /* webpackChunkName: "pages/pages/CocaCola" */))
const _18750082 = () => interopDefault(import('../pages/pages/CollegeWebDev.vue' /* webpackChunkName: "pages/pages/CollegeWebDev" */))
const _2f836168 = () => interopDefault(import('../pages/pages/Github.vue' /* webpackChunkName: "pages/pages/Github" */))
const _949cfea2 = () => interopDefault(import('../pages/pages/GraduateResearch.vue' /* webpackChunkName: "pages/pages/GraduateResearch" */))
const _99266ada = () => interopDefault(import('../pages/pages/Intro.vue' /* webpackChunkName: "pages/pages/Intro" */))
const _14f6b023 = () => interopDefault(import('../pages/pages/Khione.vue' /* webpackChunkName: "pages/pages/Khione" */))
const _719456a4 = () => interopDefault(import('../pages/pages/Leadership.vue' /* webpackChunkName: "pages/pages/Leadership" */))
const _84d26c12 = () => interopDefault(import('../pages/pages/ModalLarge.vue' /* webpackChunkName: "pages/pages/ModalLarge" */))
const _9fe4e704 = () => interopDefault(import('../pages/pages/Smrts.vue' /* webpackChunkName: "pages/pages/Smrts" */))
const _4af2ef42 = () => interopDefault(import('../pages/pages/StudioUx.vue' /* webpackChunkName: "pages/pages/StudioUx" */))
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
    path: "/pages/Asu",
    component: _b4b0da2c,
    name: "pages-Asu"
  }, {
    path: "/pages/Byu",
    component: _366a3c36,
    name: "pages-Byu"
  }, {
    path: "/pages/CocaCola",
    component: _900eea18,
    name: "pages-CocaCola"
  }, {
    path: "/pages/CollegeWebDev",
    component: _18750082,
    name: "pages-CollegeWebDev"
  }, {
    path: "/pages/Github",
    component: _2f836168,
    name: "pages-Github"
  }, {
    path: "/pages/GraduateResearch",
    component: _949cfea2,
    name: "pages-GraduateResearch"
  }, {
    path: "/pages/Intro",
    component: _99266ada,
    name: "pages-Intro"
  }, {
    path: "/pages/Khione",
    component: _14f6b023,
    name: "pages-Khione"
  }, {
    path: "/pages/Leadership",
    component: _719456a4,
    name: "pages-Leadership"
  }, {
    path: "/pages/ModalLarge",
    component: _84d26c12,
    name: "pages-ModalLarge"
  }, {
    path: "/pages/Smrts",
    component: _9fe4e704,
    name: "pages-Smrts"
  }, {
    path: "/pages/StudioUx",
    component: _4af2ef42,
    name: "pages-StudioUx"
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
