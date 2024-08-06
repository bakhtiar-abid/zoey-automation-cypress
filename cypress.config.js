const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video:true,
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    URL: "https://zoey-admin.netlify.app/register",
    loginUrl: "https://zoey-admin.netlify.app/login"
  }
});
