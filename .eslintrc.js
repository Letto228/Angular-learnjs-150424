/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["plugin:prettier/recommended"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
    requireConfigFile: false,
  },
  plugins: ["file-progress", "@babel"],
  rules: {
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    "no-use-before-define": [
      "error",
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    "func-name-matching": "off",
    "global-require": "off",
    "class-methods-use-this": "off",
    "no-continue": "off",
    "no-restricted-syntax": "off",
    "guard-for-in": "off",
    "default-case": "off",
    "no-plusplus": "off",
    "func-names": "off",
    "consistent-return": "warn",
    "vars-on-top": "warn",
    "no-var": "warn",
    camelcase: [
      "warn",
      {
        allow: ["^UNSAFE_"],
        ignoreDestructuring: false,
        properties: "never",
      },
    ],
    "func-style": [
      "error",
      "declaration",
      {
        allowArrowFunctions: true,
      },
    ],
    "max-depth": "off",
    "max-params": "off",
    "max-classes-per-file": ["error", 4],
    complexity: ["error", 25],
    "max-statements": ["error", 25],
    "no-underscore-dangle": "off",
    "no-return-assign": ["error", "except-parens"],
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "spaced-comment": ["error", "always", { exceptions: ["*"] }],
    "max-nested-callbacks": ["error", 4],
    "no-bitwise": "warn",
    "no-useless-escape": "warn",
    "file-progress/activate": 1,
  },
  settings: {
    progress: {
      hide: false,
      successMessage: "Lint done...",
    },
  },
  overrides: [
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        errorOnUnknownASTType: true,
        errorOnTypeScriptSyntacticAndSemanticIssues: true,
        warnOnUnsupportedTypeScriptVersion: false,
        ecmaVersion: 6,
        project: "tsconfig.json",
      },
      plugins: ["@typescript-eslint", "rxjs", "unicorn", "import", "eslint-plugin-import"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:rxjs/recommended",
        "prettier",
      ],
      settings: {
        "import/parsers": { "@typescript-eslint/parser": [".ts"] },
        "import/resolver": {
          "eslint-import-resolver-typescript": true,
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        "import/no-commonjs": "off",
        "import/unambiguous": "off",
        "import/no-deprecated": "warn",
        "import/prefer-default-export": "off",
        "import/default": "error",
        "import/extensions": [
          "error",
          "always",
          {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
          },
        ],
        "import/order": ["warn", { groups: [["builtin", "external", "internal"]] }],
        "import/no-extraneous-dependencies": "off",
        "import/no-cycle": "error",
        "import/first": "error",
        "import/exports-last": "off",
        "import/no-default-export": "off",
        "import/newline-after-import": ["error", { count: 1 }],
        "@typescript-eslint/no-duplicate-imports": "error",
        "@typescript-eslint/consistent-type-imports": "off",
        "no-param-reassign": "off",
        "no-case-declarations": "error",
        "no-console": ["error", { allow: ["info", "assert", "warn", "error"] }],
        "no-implicit-coercion": ["error", { allow: ["!!"] }],
        "no-return-assign": ["error", "always"],
        "no-useless-rename": [
          "error",
          {
            ignoreDestructuring: true,
            ignoreImport: false,
            ignoreExport: false,
          },
        ],
        eqeqeq: ["error", "always"],
        "no-useless-concat": "error",
        "prefer-template": "error",
        curly: ["error", "all"],
        "prefer-destructuring": "off",
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": ["error"],
        "@typescript-eslint/no-inferrable-types": ["error", { ignoreParameters: true }],
        "@typescript-eslint/prefer-readonly": ["error"],
        "@typescript-eslint/explicit-member-accessibility": [
          "error",
          { accessibility: "no-public" },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "@typescript-eslint/array-type": [
          "error",
          { default: "array-simple", readonly: "array-simple" },
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: "app",
            style: "camelCase",
          },
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: "app",
            style: "kebab-case",
          },
        ],
        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": [
          "error",
          "always",
          { exceptAfterSingleLine: true, exceptAfterOverload: true },
        ],
        "padding-line-between-statements": "off",
        "@typescript-eslint/padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: "*", next: "block" },
          { blankLine: "always", prev: "block", next: "*" },
          { blankLine: "always", prev: "*", next: "block-like" },
          { blankLine: "always", prev: "block-like", next: "*" },
          { blankLine: "always", prev: "*", next: "return" },
          { blankLine: "always", prev: "directive", next: "*" },
          { blankLine: "always", prev: "*", next: ["interface", "type"] },
          { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
          {
            blankLine: "any",
            prev: ["const", "let", "var", "export"],
            next: ["const", "let", "var", "export"],
          },
          { blankLine: "any", prev: "*", next: ["case", "default"] },
          { blankLine: "any", prev: ["case", "default"], next: "*" },
          { blankLine: "any", prev: "*", next: "class" },
          { blankLine: "any", prev: "class", next: "*" },
          { blankLine: "any", prev: "directive", next: "directive" },
        ],
        "rxjs/no-compat": "error",
        "rxjs/no-connectable": "error",
        "rxjs/no-ignored-observable": "error",
        "rxjs/no-topromise": "error",
        "unicorn/prefer-string-slice": "error",
        "unicorn/no-array-push-push": "error",
        "unicorn/require-number-to-fixed-digits-argument": "error",
        "unicorn/no-empty-file": "error",
        "unicorn/new-for-builtins": "error",
        "unicorn/no-unsafe-regex": "error",
        "unicorn/filename-case": [
          "error",
          {
            case: "kebabCase",
          },
        ],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["camelCase", "PascalCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: "variable",
            format: ["camelCase", "PascalCase", "UPPER_CASE"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: "typeLike",
            format: ["PascalCase", "UPPER_CASE"],
          },
          {
            selector: "property",
            format: ["camelCase", "PascalCase"],
          },
          {
            selector: [
              "classProperty",
              "objectLiteralProperty",
              "typeProperty",
              "classMethod",
              "objectLiteralMethod",
              "typeMethod",
              "accessor",
              "enumMember",
            ],
            format: null,
            modifiers: ["requiresQuotes"],
          },
        ],
        "@typescript-eslint/ban-ts-comment": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            functions: false,
            classes: false,
            variables: true,
            enums: true,
            typedefs: true,
          },
        ],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["warn"],
        "sort-class-members/sort-class-members": "off",
        "@typescript-eslint/member-ordering": [
          "error",
          {
            default: [
              "signature",
              /**
               * static fields
               * [sort: public -> protected -> private]
               **/
              "public-static-field",
              "protected-static-field",
              "private-static-field",

              /**
               * abstract fields
               * [sort: public -> protected -> private]
               **/
              "public-abstract-field",
              "protected-abstract-field",

              /**
               * instance fields
               * [sort: private -> protected -> public]
               * [sort: decorated -> non-decorated]
               **/
              "private-decorated-field",
              "private-instance-field",
              "protected-decorated-field",
              "protected-instance-field",
              "public-decorated-field",
              "public-instance-field",

              /**
               * constructors
               * [sort: public -> protected -> private]
               **/
              "public-constructor",
              "protected-constructor",
              "private-constructor",

              /**
               * static methods
               * [sort: public -> protected -> private]
               **/
              "public-static-method",
              "protected-static-method",
              "private-static-method",

              /**
               * abstract
               * [sort: public -> private -> protected]
               **/
              "public-abstract-get",
              "public-abstract-set",
              "protected-abstract-get",
              "protected-abstract-set",
              "public-abstract-method",
              "protected-abstract-method",

              /**
               * methods
               * [sort: public -> protected -> private]
               * [sort: decorated -> non-decorated]
               **/
              "public-decorated-method",
              "public-instance-method",
              "protected-decorated-method",
              "protected-instance-method",
              "private-decorated-method",
              "private-instance-method",
            ],
          },
        ],
      },
    },
    {
      files: ["*.spec.ts"],
      rules: {
        "unicorn/no-empty-file": "off",
      },
    },
    {
      files: ["*.html"],
      plugins: ["@html-eslint"],
      parser: "@html-eslint/parser",
      rules: {
        "spaced-comment": "off",
        "@html-eslint/no-duplicate-attrs": "error",
        "@html-eslint/no-duplicate-id": "error",
        "@html-eslint/no-inline-styles": "error",
        "@html-eslint/no-obsolete-tags": "error",
        "@html-eslint/no-target-blank": "error",
        "@html-eslint/require-button-type": "off",
        "@html-eslint/require-closing-tags": [
          "error",
          { selfClosing: "always", allowSelfClosingCustom: false },
        ],
        "@html-eslint/require-li-container": "error",
        "@html-eslint/no-multiple-h1": "error",
        "@html-eslint/require-lang": "error",
        "@html-eslint/require-title": "error",
        "@html-eslint/no-abstract-roles": "error",
        "@html-eslint/no-accesskey-attrs": "error",
        "@html-eslint/no-aria-hidden-body": "error",
        "@html-eslint/no-non-scalable-viewport": "error",
        "@html-eslint/no-positive-tabindex": "error",
        "@html-eslint/require-frame-title": "error",
        "@html-eslint/require-img-alt": ["error", { substitute: ["[alt]", "[attr.alt]"] }],
        "@html-eslint/require-meta-viewport": "error",
        "@html-eslint/id-naming-convention": ["error", "kebab-case"],
        "@html-eslint/element-newline": "error",
        "@html-eslint/no-extra-spacing-attrs": ["error", { enforceBeforeSelfClose: true }],
        "@html-eslint/no-multiple-empty-lines": "error",
        "@html-eslint/no-trailing-spaces": "error",
        "@html-eslint/quotes": "error",
      },
    },
    {
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
    },
  ],
};
