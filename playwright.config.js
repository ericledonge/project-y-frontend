console.log(process.env.PLAYWRIGHT_TEST_BASE_URL);

const config = {
  testDir: "tests/e2e",
  timeout: 2000,
  use: {
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000",
  },
};

module.exports = config;
