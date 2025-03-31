module.exports = {
  extends: 'next/core-web-vitals',
  rules: {
    // Disable the no-explicit-any rule to allow using 'any' type
    '@typescript-eslint/no-explicit-any': 'off',
    // Other rules you might want to disable
    '@typescript-eslint/ban-ts-comment': 'off'
  }
};