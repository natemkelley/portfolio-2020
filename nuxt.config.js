export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: "Nate Kelley Portfolio",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=0px, initial-scale=1" },
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
