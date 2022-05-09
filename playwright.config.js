const config = {
  testDir: "tests/e2e",
  timeout: 2000,
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL,
  },
};

module.exports = config;
