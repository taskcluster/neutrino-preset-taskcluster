'use strict';

module.exports = {
  cwd: process.cwd(),
  useEslintrc: false,
  root: true,
  plugins: ['babel', 'mocha'],
  env: {
    es6: true,
    node: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      objectLiteralDuplicateProperties: false,
      generators: true,
      impliedStrict: true
    }
  },
  settings: {},
  globals: {
    process: true
  },
  rules: {
    // Disallow spacing inside array brackets
    'array-bracket-spacing': 'off', // handled by babel rules
    'babel/array-bracket-spacing': ['error', 'never'],

    // Enforce one true brace style
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // Enforce trailing commas in multiline object literals
    'comma-dangle': ['error', 'always-multiline'],

    // Enforce a space after and not before a comma
    'comma-spacing': ['error', { before: false, after: true }],

    // Allow a relatively low cyclomatic complexity
    complexity: ['error', 50],

    // Disallow padding inside computed properties
    'computed-property-spacing': ['error', 'never'],

    // Enforce consistent naming when capturing the current execution context
    'consistent-this': ['warn', 'that'],

    // Enforce usage of curly braces for all control statements
    curly: ['error', 'all'],

    // Enforce default case in switch statements
    'default-case': 'error',

    // Enforce 2-space indentation
    indent: ['error', 2, { SwitchCase: 1 }],

    // Enforce a space before and after certain keywords
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true }
      }
    }],

    // Specify the maximum length of a line, ignoring URLs
    'max-len': ['error', 120, 2, { ignoreUrls: true }],

    // Allow calling new against non-capitalized constructors
    'new-cap': 'off', // handled by babel rules
    'babel/new-cap': 'off',

    // Enforce comparisons to null with strict equality operations
    'no-eq-null': 'error',

    // Disallow unnecessary parentheses
    'no-extra-parens': 'error',

    // Disallow the use of leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'error',

    // Disallow if as the only statement in an else block
    'no-lonely-if': 'error',

    // Disallow multiple empty lines and only one newline at the end of a file
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],

    // Disallow nested ternary expressions
    'no-nested-ternary': 'error',

    // Disallow certain syntax forms
    'no-restricted-syntax': [
      'error',
      'ForInStatement', // Replaces taskcluster/no-for-in
      'LabeledStatement',
      'WithStatement',
    ],

    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': 'error',

    // Enforce throwing with Error instances only
    'no-throw-literal': 'error',

    // Allow dangling underscores in identifiers
    'no-underscore-dangle': 'off',

    // Disallow padding inside curly braces
    'object-curly-spacing': 'off', // handled by babel rules
    'babel/object-curly-spacing': ['error', 'never'],

    // Enforce assignment operator shorthand where possible
    'operator-assignment': ['error', 'always'],

    // Allow quotes around object literal property names only when necessary
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // Enforce single quote strings
    // Allow using different quotes to avoid escaping
    // Allow template literals in non-template strings, e.g. useful for creating bash commands
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],

    // require use of the second argument for parseInt()
    radix: 'error',

    // Enforce use of semicolons instead of ASI
    semi: ['error', 'always'],

    // Enforce a space before block opening braces
    'space-before-blocks': ['error', 'always'],

    // Disallow space before function opening parenthesis
    'space-before-function-paren': ['error', 'never'],

    // Disallow spaces inside parentheses
    'space-in-parens': ['error', 'never'],

    'strict': ['error', 'global'],

    // Disallow yoda conditionals, e.g. 3 === a
    'yoda': ['error', 'never']
  }
};
