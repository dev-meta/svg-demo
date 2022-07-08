module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "react-app",
        "plugin:jsx-a11y/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    "rules": {
        "no-unused-vars": 1,
        'react/jsx-first-prop-new-line': [1, 'multiline'],
        'react/jsx-max-props-per-line': [
            1,
            {
                maximum: 1,
            },
        ],
    }
}
