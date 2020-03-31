module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
    },
    ignorePatterns: ['node_modules/'],

    settings: {
        react: {
            version: 'detect',
        },
    },
};
