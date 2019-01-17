module.exports = {
  mode: "universal",

  head: {
    title: "test",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "test desc" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: { color: "#ff0000" },

  css: ["~assets/main.css"],

  plugins: ["@/plugins/global.js"],

  modules: ["@nuxtjs/axios"],

  axios: {},

  transition: {
    name: "page",
    mode: "out-in",
    beforeEnter(el) {
      console.log("Before enter...");
    },
    afterEnter(el) {
      console.log("After enter...");
    },
    afterLeave(el) {
      console.log("afterLeave...");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled...");
    }
  },

  build: {
    babel: {
      presets({ isServer }) {
        return [
          [
            "@nuxtjs/babel-preset-app",
            { targets: isServer ? { node: "10.3.0" } : { chrome: 69 } }
          ]
        ];
      }
    }
  }
};
