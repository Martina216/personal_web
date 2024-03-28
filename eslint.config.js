module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
      // 在這裡添加你的自訂規則
    },
};