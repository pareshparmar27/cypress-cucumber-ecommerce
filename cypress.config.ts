import { defineConfig } from 'cypress'
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor'
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild'

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config)

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  )

  // Make sure to return the config object as it might have been modified by the plugin.
  return config
}

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  pageLoadTimeout: 120000,
  defaultCommandTimeout: 10000,
  responseTimeout: 60000,
  video: false,
  screenshotOnRunFailure: false,
  watchForFileChanges: false,
  chromeWebSecurity: false,
  e2e: {
    specPattern: '**/*.feature',
    setupNodeEvents,
  },
})
