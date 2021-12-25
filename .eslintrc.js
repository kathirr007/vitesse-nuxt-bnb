module.exports = {
  extends: '@antfu',
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-syntax': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
