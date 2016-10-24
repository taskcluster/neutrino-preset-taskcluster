'use strict';

module.exports = {
  extends: [
    require.resolve('neutrino-preset-node/src/eslint')
  ],
  rules: {
    // Don't force class methods to use `this`. Some methods just don't need it,
    // but should still be instance methods
    'class-methods-use-this': 'off',

    // Reduce code complexity by capping the amount of cyclomatic complexity allowed to 50
    complexity: ['error', 50],

    // Allow using `return;` in functions that also return a value
    'consistent-return': 'off',

    // Use curly braces for all block statements
    curly: ['error', 'all'],

    // Enforce a maximum line length of 120 spaces, ignoring long URLs
    'max-len': ['error', { code: 120, tabWidth: 2, ignoreUrls: true }],

    // Allow using arrow functions with ternary statements as their return value
    'no-confusing-arrow': 'off',

    // Disallow unnecessary parentheses
    'no-extra-parens': 'error',

    // Allow mixing operators in expressions without parentheses, e.g. a + b + c + d
    'no-mixed-operators': 'off',

    // Allow using variable++
    'no-plusplus': 'off',

    // Allow using assignment during return, e.g. return a = 3;
    // TODO: Evaluate if this really needs to be disabled
    'no-return-assign': 'off',

    // Allow functions to create variables with the same name as variables in an outer scope
    'no-shadow': 'off',

    // Allow using a template interpolation in non-template strings.
    // Used for writing bash commands with normal strings.
    'no-template-curly-in-string': 'off',

    // Allow dangling underscores in variable names
    'no-underscore-dangle': 'off',

    // Require assignment operator shorthand where possible
    'operator-assignment': ['error', 'always']
  }
};
