module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es2021: true,
        jquery: true,
    },
    extends: [
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020
    },
    rules: {
        indent: ['warn', 4],
        semi: 0,
        quotes: 0,
        'comma-dangle': ['warn', 'only-multiline'],
        'no-param-reassign': 'warn',
        'no-throw-literal': 'warn',
        'max-len': 'off',
        'no-plusplus': [
            'warn',
            {
                allowForLoopAfterthoughts: true
            }
        ],
        'no-alert': 'off',
        'func-names': 'off',
        'no-use-before-define': 'off',
        'space-before-function-paren': ['warn', 'always'],
        'no-unused-vars': 'warn',
        'consistent-return': 'off',
        'no-promise-executor-return': 'off',
        'linebreak-style': ['warn', 'windows'],
        'import/extensions': 'off',
        'eqeqeq': 'warn',
        'object-shorthand': 'off',
        'class-methods-use-this': 'off',
        'no-return-assign': 'off',
        'prefer-spread': 'off',
        'dot-notation': 'warn',
        'quote-props': 'warn',
        'brace-style': ['warn', 'stroustrup']
    }
}
