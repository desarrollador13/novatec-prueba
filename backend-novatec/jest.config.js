module.exports = {
    roots: ['<rootDir>/main/test'],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    globals: {
        "ts-jest": {
            tsConfig: "tsconfig.json"
         }
    },
    "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['main/**/*.{ts,js,jsx}'],
    coverageReporters: ["html", "text"] //lcov  text
}