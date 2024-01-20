module.exports = {
    preset: 'react-app',
    transform: {
        '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js",
        "^axios$": "axios/dist/node/axios.cjs"
    },
    moduleFileExtensions: ["js", "json", "jsx"]

};