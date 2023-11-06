// jest.config.js
module.exports = {
  // other configuration...
  moduleNameMapper: {
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
  setupFiles: ["./jest.setup.js"],
  testEnvironment: "jsdom",
};
