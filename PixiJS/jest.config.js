export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.ts$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
  },
  testMatch: ["**/tests/**/*.ts", "**/?(*.)+(spec|test).ts"],
};
