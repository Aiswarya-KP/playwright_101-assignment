import { defineConfig } from '@playwright/test';

const USERNAME = 'aiswaryakpapputty';
const ACCESS_KEY = 'LT_63BvR5vD502W372l9eQyu6001l7zOntGCcupAvDAgzMdk9s';

const getWsEndpoint = (browser: 'Chrome' | 'pw-firefox') =>
  `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
    JSON.stringify({
      browserName: browser,
      browserVersion: 'latest',
      'LT:Options': {
        user: USERNAME,
        accessKey: ACCESS_KEY,
        platform: 'Windows 11',
        build: 'Playwright 101 Certification',
        name: `${browser} Assessment`,
        network: true,
        console: true,
        video: true,
        visual: true,
      },
    })
  )}`;

export default defineConfig({
  testDir: './tests',

  projects: [
    {
      name: 'chromium',
      use: {
        connectOptions: {
          wsEndpoint: getWsEndpoint('Chrome'),
        },
      },
    },
    {
      name: 'firefox',
      use: {
        connectOptions: {
          wsEndpoint: getWsEndpoint('pw-firefox'),
        },
      },
    },
  ],
});