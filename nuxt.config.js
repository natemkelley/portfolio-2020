export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
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
  css: [
    "materialize-css/dist/css/materialize.min.css",
    "material-icons/iconfont/material-icons.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  bundleRenderer: {
    shouldPreload: (file, type) => {
      return ["script", "style", "font"].includes(type);
    }
  },
  plugins: [],
  /*
  { src: '@/node_modules/materialize-css/dist/js/materialize.min.js'}
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/pwa"],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));
 
      svgRule.test = /\.(png|jpe?g|gif|webp)$/;
 
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
      });
    }
  }
};
