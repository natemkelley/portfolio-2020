const path = require('path')
const cleanupIDs = require('svgo/plugins/cleanupIDs')
const removeAttrs = require('svgo/plugins/removeAttrs')
const removeDimensions = require('svgo/plugins/removeDimensions')
const removeViewBox = require('svgo/plugins/removeViewBox')
const inlineStyles = require('svgo/plugins/inlineStyles')
const inlineDefs = require('@nuxtjs/svg-sprite/lib/plugins/inlineDefs.js')

function defaultPlugins () {
  // Enable removeAttrs plugin
  // Remove id attribute to prevent conflict with our id
  removeAttrs.active = true
  removeAttrs.params.attrs = 'svg:id'

  // Disable removeViewBox plugin and enable removeDimensions
  // Keep viewBox and remove width & height attribute
  removeViewBox.active = true
  removeDimensions.active = true

  // Make all styles inline
  // By definition, a defs sprite is not usable as a CSS sprite
  inlineStyles.active = true
  inlineStyles.params.onlyMatchedOnce = false

  return [
    removeDimensions,
    cleanupIDs,
    removeAttrs,
    removeViewBox,
    inlineStyles,
    { inlineDefs } // NOTE: it's important to pass custom plugins as object.
  ]
}

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Nate Kelley Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "Nate Kelley",
        content:
          "Portfolio of Nate Kelley 2020" || process.env.npm_package_description
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  router: { base: "/" },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  bundleRenderer: {
    shouldPreload: (file, type) => {
      return ["script", "font"].includes(type);
    }
  },
  /*
   bundleRenderer: {
    shouldPreload: (file, type) => {
      return ["script", "style", "font"].includes(type);
    }
  }
  */
  plugins: [],
  /*

  src: "~/plugins/snap" 

   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/svg", "@nuxtjs/svg-sprite"],
  svgSprite: {
    // pass costum config 
    svgoConfig () {
      return {
        plugins: defaultPlugins()
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
