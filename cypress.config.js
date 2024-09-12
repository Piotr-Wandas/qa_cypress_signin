const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 1000,
  viewportWidth: 2000,
  e2e: {
    baseUrl: 'https://www.sinsay.com/pl/pl/customer/account/login/#login',
    setupNodeEvents(on, config) {
    }
  }
});
