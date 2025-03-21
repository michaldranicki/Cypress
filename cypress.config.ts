const { defineConfig } = require("cypress");
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      config.env = {
        BASE_URL : process.env.CYPRESS_BASE_URL,
        USERNAME : process.env.SAUCE_DEMO_USERNAME,
        PASSWORD : process.env.SAUCE_DEMO_PASSWORD
      }
      
      return config;
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}"
  },
});
