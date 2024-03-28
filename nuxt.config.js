// https://nuxt.com/docs/api/configuration/nuxt-config
// defineNuxtConfig好像是ts專有變數
// export default defineNuxtConfig({
//   devtools: { enabled: true }
// }) 
import { fileURLToPath, URL } from "node:url";


export default {
  devtools: { enabled: true },
  alias: {
    "@": fileURLToPath(new URL("./src", import.meta.url)),
  },
  router:{
    base:'/personal_web/'
  },
  generate:{
    dir:'dist'
  },

  modules: ["@nuxtjs/eslint-module"],
};