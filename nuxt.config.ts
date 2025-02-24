// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },

  runtimeConfig: {
    public: {
      pdfExport: "http://localhost:5000/download",
      //  pdfExport: "https://ticket-fake.liara.run/download",
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@formkit/nuxt"],

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
  },

  formkit: {
    autoImport: true,
  },
});
