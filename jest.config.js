/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  // https://github.com/kulshekhar/ts-jest/issues/1173#issuecomment-1404142039
  transform: {
    '^.+\\.(ts|tsx)?$': ['ts-jest', {diagnostics: {ignoreCodes: ['TS151001']}}],
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};
