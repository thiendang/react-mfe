import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run tenable-io-host:serve',
        production: 'nx run tenable-io-host:preview',
      },
      ciWebServerCommand: 'nx run tenable-io-host:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
