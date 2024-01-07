import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  verbose: true,
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/*.stories.tsx"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/jest-runtime/build/index.js"]
};

export default jestConfig;
