const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = 
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const createEsbuildPlugin = 
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin

const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
// const allureWriter = require("@shelex/cypress-allure-plugin/writer");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on("file:preprocessor", createBundler({
//       plugins: [createEsbuildPlugin.default(config)],
//     })
//   );
  
//   // allureWriter(on, config);

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

module.exports = defineConfig({
  e2e: {

    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)]
      })
      on("file:preprocessor", bundler);

      await preprocessor.addCucumberPreprocessorPlugin(on, config);
  
      return config;
    },
  
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://reqres.in",
    chromeWebSecurity: false
  },
});