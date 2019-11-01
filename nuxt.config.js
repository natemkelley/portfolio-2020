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
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/nklogosvg.ico" }]
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
      return ["script", "style", "font"].includes(type);
    }
  },
  plugins: [
    { src: "@/node_modules/materialize-css/js/waves.js"}
  ],
  /*
  , src: "~/plugins/snap" 
  { src: '@/node_modules/materialize-css/dist/js/materialize.min.js'}
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa", "@nuxtjs/svg", "@nuxtjs/svg-sprite"],
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
