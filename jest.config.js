/** @type {import('jest').Config} */
const config = {
    testEnvironment: "jsdom",
    "testEnvironmentOptions": {
        "browsers": [
          "chrome",
          "firefox",
          "safari"
        ]
      },
    verbose: true,
    "transform": {
        '^.+\\.(js|jsx)$': 'babel-jest',
       "^.+\\.svg$": "<rootDir>/svgTransform.js" 
    },
    testMatch: [
      "**/__tests__/**/*.test.[jt]s?(x)"
    ],
    reporters: [
        'default',
        ['jest-ctrf-json-reporter', {outputFile: 'unitTests.json'}],
      ],
  };
  
  module.exports = config;