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
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://natemkelley.github.io/portfolio.png',
        type:'image',
        url:'https://natemkelley.github.io/'
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
  buildModules: ['@nuxtjs/google-analytics'],
  googleAnalytics: {
    id: 'UA-70637517-3'
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/svg", "@nuxtjs/svg-sprite", "nuxt-seo"],
  seo: {
    // Module options
    name: 'Nate Kelley Portfolio 2020',
    title: 'Nate Kelley Portfolio 2020',
    templateTitle: '%title%',
    description: "This is the portfolio of Nate Kelley. This interactive experience showcases Nate's work up until the year 2020.",
    image:'https://natemkelley.github.io/portfolio.png',
    image:{url:'https://natemkelley.github.io/portfolio.png',alt:'Portfolio Intro Image'},
    og:{image:{url:'https://natemkelley.github.io/portfolio.png'}}
    //...
},

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
