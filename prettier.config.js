module.exports = {
  overrides: [
    {
      files: '*.html',
      options: {
        printWidth: 80,
      },
    },
  ],

  // JW standard
  printWidth: 120,

  // 2 spaces
  tabWidth: 2,
  useTabs: false,

  // Single quotes as JS default
  singleQuote: true,

  // Semicolons required
  semi: true,

  trailingComma: 'es5',
  bracketSpacing: true,
  jsxBracketSameLine: false,

  // To improve typing
  arrowParens: 'always',

  // No guessing from CSS please
  htmlWhitespaceSensitivity: 'strict',
};
