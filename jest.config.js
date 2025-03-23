module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"], // Ensures setup runs before tests
  moduleNameMapper: {
    "@innovaccer/design-system/css": "../__mocks__/designSystemMock.js",
  },
  testEnvironment: "jsdom",
};
