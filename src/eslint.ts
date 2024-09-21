import type { ESLint, Linter } from "eslint";

export const mergeResults = (
  results: ESLint.LintResult[],
): ESLint.LintResult[] => {
  const mergedResults: Record<string, ESLint.LintResult> = {};

  for (const result of results) {
    const filePath = result.filePath;
    if (!mergedResults[filePath]) {
      mergedResults[filePath] = { ...result };
      continue;
    }

    const existingResult = mergedResults[filePath];

    existingResult.fatalErrorCount += result.fatalErrorCount;
    existingResult.errorCount += result.errorCount;
    existingResult.warningCount += result.warningCount;
    existingResult.fixableErrorCount += result.fixableErrorCount;
    existingResult.fixableWarningCount += result.fixableWarningCount;

    existingResult.suppressedMessages = [
      ...existingResult.suppressedMessages,
      ...result.suppressedMessages,
    ];

    existingResult.messages = [...existingResult.messages, ...result.messages];
    existingResult.usedDeprecatedRules = [
      ...existingResult.usedDeprecatedRules,
      ...result.usedDeprecatedRules,
    ];

    existingResult.output = result.output ?? existingResult.output;
    existingResult.source = result.source ?? existingResult.source;
    existingResult.stats = result.stats ?? existingResult.stats;
  }

  return Object.values(mergedResults);
};

export const overrideConfig: Linter.Config<Linter.RulesRecord>[] = [
  {
    rules: {
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      curly: "off",
      "no-unexpected-multiline": "off",
      "space-unary-word-ops": "off",
      "generator-star": "off",
      "no-comma-dangle": "off",
      "no-reserved-keys": "off",
      "no-space-before-semi": "off",
      "no-wrap-func": "off",
      "space-after-function-name": "off",
      "space-before-function-parentheses": "off",
      "space-in-brackets": "off",
      "no-arrow-condition": "off",
      "space-after-keywords": "off",
      "space-before-keywords": "off",
      "space-return-throw-case": "off",
      "no-spaced-func": "off",
      "indent-legacy": "off",
      "array-bracket-newline": "off",
      "array-bracket-spacing": "off",
      "array-element-newline": "off",
      "arrow-parens": "off",
      "arrow-spacing": "off",
      "block-spacing": "off",
      "brace-style": "off",
      "comma-dangle": "off",
      "comma-spacing": "off",
      "comma-style": "off",
      "computed-property-spacing": "off",
      "dot-location": "off",
      "eol-last": "off",
      "func-call-spacing": "off",
      "function-call-argument-newline": "off",
      "function-paren-newline": "off",
      "generator-star-spacing": "off",
      "implicit-arrow-linebreak": "off",
      indent: "off",
      "jsx-quotes": "off",
      "key-spacing": "off",
      "keyword-spacing": "off",
      "linebreak-style": "off",
      "lines-around-comment": "off",
      "max-len": "off",
      "max-statements-per-line": "off",
      "multiline-ternary": "off",
      "new-parens": "off",
      "newline-per-chained-call": "off",
      "no-confusing-arrow": "off",
      "no-extra-parens": "off",
      "no-extra-semi": "off",
      "no-floating-decimal": "off",
      "no-mixed-operators": "off",
      "no-mixed-spaces-and-tabs": "off",
      "no-multi-spaces": "off",
      "no-multiple-empty-lines": "off",
      "no-tabs": "off",
      "no-trailing-spaces": "off",
      "no-whitespace-before-property": "off",
      "nonblock-statement-body-position": "off",
      "object-curly-newline": "off",
      "object-curly-spacing": "off",
      "object-property-newline": "off",
      "one-var-declaration-per-line": "off",
      "operator-linebreak": "off",
      "padded-blocks": "off",
      "quote-props": "off",
      quotes: "off",
      "rest-spread-spacing": "off",
      semi: "off",
      "semi-spacing": "off",
      "semi-style": "off",
      "space-before-blocks": "off",
      "space-before-function-paren": "off",
      "space-in-parens": "off",
      "space-infix-ops": "off",
      "space-unary-ops": "off",
      "switch-colon-spacing": "off",
      "template-curly-spacing": "off",
      "template-tag-spacing": "off",
      "wrap-iife": "off",
      "wrap-regex": "off",
      "yield-star-spacing": "off",
      "constructor-super": "off",
      "default-case-last": "off",
      "default-param-last": "off",
      "dot-notation": "off",
      eqeqeq: "off",
      "for-direction": "off",
      "getter-return": "off",
      "no-async-promise-executor": "off",
      "no-case-declarations": "off",
      "no-class-assign": "off",
      "no-compare-neg-zero": "off",
      "no-cond-assign": "off",
      "no-const-assign": "off",
      "no-constant-condition": "off",
      "no-constructor-return": "off",
      "no-control-regex": "off",
      "no-debugger": "off",
      "no-delete-var": "off",
      "no-dupe-args": "off",
      "no-dupe-class-members": "off",
      "no-dupe-keys": "off",
      "no-duplicate-case": "off",
      "no-else-return": "off",
      "no-empty": "off",
      "no-empty-character-class": "off",
      "no-empty-pattern": "off",
      "no-eval": "off",
      "no-ex-assign": "off",
      "no-extra-boolean-cast": "off",
      "no-extra-label": "off",
      "no-fallthrough": "off",
      "no-func-assign": "off",
      "no-global-assign": "off",
      "no-import-assign": "off",
      "no-inner-declarations": "off",
      "no-label-var": "off",
      "no-labels": "off",
      "no-lone-blocks": "off",
      "no-loss-of-precision": "off",
      "no-misleading-character-class": "off",
      "no-new-native-nonconstructor": "off",
      "no-new-symbol": "off",
      "no-nonoctal-decimal-escape": "off",
      "no-obj-calls": "off",
      "no-param-reassign": "off",
      "no-prototype-builtins": "off",
      "no-redeclare": "off",
      "no-regex-spaces": "off",
      "no-return-assign": "off",
      "no-self-assign": "off",
      "no-self-compare": "off",
      "no-sequences": "off",
      "no-setter-return": "off",
      "no-shadow-restricted-names": "off",
      "no-sparse-array": "off",
      "no-this-before-super": "off",
      "no-unneeded-ternary": "off",
      "no-unreachable": "off",
      "no-unsafe-finally": "off",
      "no-unsafe-negation": "off",
      "no-unsafe-optional-chaining": "off",
      "no-unused-labels": "off",
      "no-use-before-define": "off",
      "no-useless-catch": "off",
      "no-useless-computed-key": "off",
      "no-useless-constructor": "off",
      "no-useless-rename": "off",
      "no-var": "off",
      "no-with": "off",
      "one-var": "off",
      "prefer-const": "off",
      "prefer-exponentiation-operator": "off",
      "prefer-numeric-literals": "off",
      "prefer-regex-literals": "off",
      "prefer-rest-params": "off",
      "prefer-template": "off",
      "require-yield": "off",
      "use-isnan": "off",
      "valid-typeof": "off",

      "@mysticatea/eslint-plugin/no-this-in-static": "off",

      "@typescript-eslint/ban-types": "off",
      "@typescript-eslint/consistent-type-exports": "off",
      "@typescript-eslint/consistent-type-imports": "off",
      "@typescript-eslint/default-param-last": "off",
      "@typescript-eslint/dot-notation": "off",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-dupe-class-members": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-extra-non-null-assertion": "off",
      "@typescript-eslint/no-extraneous-class": "off",
      "@typescript-eslint/no-import-type-side-effects": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-invalid-void-type": "off",
      "@typescript-eslint/no-loss-of-precision": "off",
      "@typescript-eslint/no-misused-new": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-redeclare": "off",
      "@typescript-eslint/no-this-alias": "off",
      "@typescript-eslint/no-unnecessary-type-arguments": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "off",
      "@typescript-eslint/no-unsafe-declaration-merging": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-useless-constructor": "off",
      "@typescript-eslint/no-useless-empty-export": "off",
      "@typescript-eslint/no-useless-template-literals": "off",
      "@typescript-eslint/prefer-as-const": "off",
      "@typescript-eslint/prefer-enum-initializers": "off",
      "@typescript-eslint/prefer-function-type": "off",
      "@typescript-eslint/prefer-literal-enum-member": "off",
      "@typescript-eslint/prefer-namespace-keyword": "off",
      "@typescript-eslint/prefer-optional-chain": "off",
      "@typescript-eslint/lines-around-comment": "off",
      "@typescript-eslint/quotes": "off",
      "@typescript-eslint/block-spacing": "off",
      "@typescript-eslint/brace-style": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/comma-spacing": "off",
      "@typescript-eslint/func-call-spacing": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/key-spacing": "off",
      "@typescript-eslint/keyword-spacing": "off",
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/no-extra-parens": "off",
      "@typescript-eslint/no-extra-semi": "off",
      "@typescript-eslint/object-curly-spacing": "off",
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/space-before-blocks": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/space-infix-ops": "off",
      "@typescript-eslint/type-annotation-spacing": "off",

      "jest/max-nested-describe": "off",
      "jest/no-duplicate-hooks": "off",
      "jest/no-export": "off",
      "jest/no-focused-tests": "off",

      "jsx-a11y/alt-text": "off",
      "jsx-a11y/anchor-has-content": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/aria-activedescendant-has-tabindex": "off",
      "jsx-a11y/aria-props": "off",
      "jsx-a11y/aria-proptypes": "off",
      "jsx-a11y/aria-role": "off",
      "jsx-a11y/aria-unsupported-elements": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/heading-has-content": "off",
      "jsx-a11y/html-has-lang": "off",
      "jsx-a11y/iframe-has-title": "off",
      "jsx-a11y/img-redundant-alt": "off",
      "jsx-a11y/interactive-supports-focus": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "jsx-a11y/lang": "off",
      "jsx-a11y/media-has-caption": "off",
      "jsx-a11y/mouse-events-have-key-events": "off",
      "jsx-a11y/no-access-key": "off",
      "jsx-a11y/no-aria-hidden-on-focusable": "off",
      "jsx-a11y/no-autofocus": "off",
      "jsx-a11y/no-distracting-elements": "off",
      "jsx-a11y/no-interactive-element-to-noninteractive-role": "off",
      "jsx-a11y/no-noninteractive-element-to-interactive-role": "off",
      "jsx-a11y/no-noninteractive-tabindex": "off",
      "jsx-a11y/no-redundant-roles": "off",
      "jsx-a11y/role-has-required-aria-props": "off",
      "jsx-a11y/scope": "off",
      "jsx-a11y/tabindex-no-positive": "off",

      "react/button-has-type": "off",
      "react/jsx-key": "off",
      "react/jsx-no-comment-textnodes": "off",
      "react/jsx-no-duplicate-props": "off",
      "react/jsx-no-target-blank": "off",
      "react/jsx-no-useless-fragment": "off",
      "react/no-array-index-key": "off",
      "react/no-children-prop": "off",
      "react/no-danger": "off",
      "react/no-danger-with-children": "off",
      "react/void-dom-elements-no-children": "off",
      "react/jsx-child-element-spacing": "off",
      "react/jsx-closing-bracket-location": "off",
      "react/jsx-closing-tag-location": "off",
      "react/jsx-curly-newline": "off",
      "react/jsx-curly-spacing": "off",
      "react/jsx-equals-spacing": "off",
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-indent": "off",
      "react/jsx-indent-props": "off",
      "react/jsx-max-props-per-line": "off",
      "react/jsx-newline": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-multi-spaces": "off",
      "react/jsx-tag-spacing": "off",
      "react/jsx-wrap-multilines": "off",
      "react/jsx-space-before-closing": "off",

      "react-hooks/exhaustive-deps": "off",

      "simple-import-sort/imports": "off",

      "style/jsx-self-closing-comp": "off",
      "style/array-bracket-newline": "off",
      "style/array-bracket-spacing": "off",
      "style/array-element-newline": "off",
      "style/arrow-parens": "off",
      "style/arrow-spacing": "off",
      "style/babel/object-curly-spacing": "off",
      "style/babel/quotes": "off",
      "style/babel/semi": "off",
      "style/block-spacing": "off",
      "style/brace-style": "off",
      "style/comma-dangle": "off",
      "style/comma-spacing": "off",
      "style/comma-style": "off",
      "style/computed-property-spacing": "off",
      "style/curly": "off",
      "style/dot-location": "off",
      "style/eol-last": "off",
      "style/func-call-spacing": "off",
      "style/function-call-argument-newline": "off",
      "style/function-paren-newline": "off",
      "style/generator-star-spacing": "off",
      "style/implicit-arrow-linebreak": "off",
      "style/indent": "off",
      "style/jsx-child-element-spacing": "off",
      "style/jsx-closing-bracket-location": "off",
      "style/jsx-closing-tag-location": "off",
      "style/jsx-curly-newline": "off",
      "style/jsx-curly-spacing": "off",
      "style/jsx-equals-spacing": "off",
      "style/jsx-first-prop-new-line": "off",
      "style/jsx-indent": "off",
      "style/jsx-indent-props": "off",
      "style/jsx-max-props-per-line": "off",
      "style/jsx-newline": "off",
      "style/jsx-one-expression-per-line": "off",
      "style/jsx-props-no-multi-spaces": "off",
      "style/jsx-quotes": "off",
      "style/jsx-tag-spacing": "off",
      "style/jsx-wrap-multilines": "off",
      "style/key-spacing": "off",
      "style/keyword-spacing": "off",
      "style/linebreak-style": "off",
      "style/lines-around-comment": "off",
      "style/max-len": "off",
      "style/max-statements-per-line": "off",
      "style/member-delimiter-style": "off",
      "style/multiline-comment-style": "off",
      "style/multiline-ternary": "off",
      "style/new-parens": "off",
      "style/newline-per-chained-call": "off",
      "style/no-confusing-arrow": "off",
      "style/no-extra-parens": "off",
      "style/no-extra-semi": "off",
      "style/no-floating-decimal": "off",
      "style/no-mixed-operators": "off",
      "style/no-mixed-spaces-and-tabs": "off",
      "style/no-multi-spaces": "off",
      "style/no-multiple-empty-lines": "off",
      "style/no-tabs": "off",
      "style/no-trailing-spaces": "off",
      "style/no-unexpected-multiline": "off",
      "style/no-whitespace-before-property": "off",
      "style/nonblock-statement-body-position": "off",
      "style/object-curly-newline": "off",
      "style/object-curly-spacing": "off",
      "style/object-property-newline": "off",
      "style/one-var-declaration-per-line": "off",
      "style/operator-linebreak": "off",
      "style/padded-blocks": "off",
      "style/quote-props": "off",
      "style/quotes": "off",
      "style/rest-spread-spacing": "off",
      "style/semi": "off",
      "style/semi-spacing": "off",
      "style/semi-style": "off",
      "style/space-before-blocks": "off",
      "style/space-before-function-paren": "off",
      "style/space-in-parens": "off",
      "style/space-infix-ops": "off",
      "style/space-unary-ops": "off",
      "style/standard/array-bracket-even-spacing": "off",
      "style/standard/computed-property-even-spacing": "off",
      "style/standard/object-curly-even-spacing": "off",
      "style/switch-colon-spacing": "off",
      "style/template-curly-spacing": "off",
      "style/template-tag-spacing": "off",
      "style/type-annotation-spacing": "off",
      "style/wrap-iife": "off",
      "style/wrap-regex": "off",
      "style/yield-star-spacing": "off",

      "stylistic/jsx-self-closing-comp": "off",
      "stylistic/array-bracket-newline": "off",
      "stylistic/array-bracket-spacing": "off",
      "stylistic/array-element-newline": "off",
      "stylistic/arrow-parens": "off",
      "stylistic/arrow-spacing": "off",
      "stylistic/babel/object-curly-spacing": "off",
      "stylistic/babel/quotes": "off",
      "stylistic/babel/semi": "off",
      "stylistic/block-spacing": "off",
      "stylistic/brace-style": "off",
      "stylistic/comma-dangle": "off",
      "stylistic/comma-spacing": "off",
      "stylistic/comma-style": "off",
      "stylistic/computed-property-spacing": "off",
      "stylistic/curly": "off",
      "stylistic/dot-location": "off",
      "stylistic/eol-last": "off",
      "stylistic/func-call-spacing": "off",
      "stylistic/function-call-argument-newline": "off",
      "stylistic/function-paren-newline": "off",
      "stylistic/generator-star-spacing": "off",
      "stylistic/implicit-arrow-linebreak": "off",
      "stylistic/indent": "off",
      "stylistic/jsx-child-element-spacing": "off",
      "stylistic/jsx-closing-bracket-location": "off",
      "stylistic/jsx-closing-tag-location": "off",
      "stylistic/jsx-curly-newline": "off",
      "stylistic/jsx-curly-spacing": "off",
      "stylistic/jsx-equals-spacing": "off",
      "stylistic/jsx-first-prop-new-line": "off",
      "stylistic/jsx-indent": "off",
      "stylistic/jsx-indent-props": "off",
      "stylistic/jsx-max-props-per-line": "off",
      "stylistic/jsx-newline": "off",
      "stylistic/jsx-one-expression-per-line": "off",
      "stylistic/jsx-props-no-multi-spaces": "off",
      "stylistic/jsx-quotes": "off",
      "stylistic/jsx-tag-spacing": "off",
      "stylistic/jsx-wrap-multilines": "off",
      "stylistic/key-spacing": "off",
      "stylistic/keyword-spacing": "off",
      "stylistic/linebreak-style": "off",
      "stylistic/lines-around-comment": "off",
      "stylistic/max-len": "off",
      "stylistic/max-statements-per-line": "off",
      "stylistic/member-delimiter-style": "off",
      "stylistic/multiline-comment-style": "off",
      "stylistic/multiline-ternary": "off",
      "stylistic/new-parens": "off",
      "stylistic/newline-per-chained-call": "off",
      "stylistic/no-confusing-arrow": "off",
      "stylistic/no-extra-parens": "off",
      "stylistic/no-extra-semi": "off",
      "stylistic/no-floating-decimal": "off",
      "stylistic/no-mixed-operators": "off",
      "stylistic/no-mixed-spaces-and-tabs": "off",
      "stylistic/no-multi-spaces": "off",
      "stylistic/no-multiple-empty-lines": "off",
      "stylistic/no-tabs": "off",
      "stylistic/no-trailing-spaces": "off",
      "stylistic/no-unexpected-multiline": "off",
      "stylistic/no-whitespace-before-property": "off",
      "stylistic/nonblock-statement-body-position": "off",
      "stylistic/object-curly-newline": "off",
      "stylistic/object-curly-spacing": "off",
      "stylistic/object-property-newline": "off",
      "stylistic/one-var-declaration-per-line": "off",
      "stylistic/operator-linebreak": "off",
      "stylistic/padded-blocks": "off",
      "stylistic/quote-props": "off",
      "stylistic/quotes": "off",
      "stylistic/rest-spread-spacing": "off",
      "stylistic/semi": "off",
      "stylistic/semi-spacing": "off",
      "stylistic/semi-style": "off",
      "stylistic/space-before-blocks": "off",
      "stylistic/space-before-function-paren": "off",
      "stylistic/space-in-parens": "off",
      "stylistic/space-infix-ops": "off",
      "stylistic/space-unary-ops": "off",
      "stylistic/standard/array-bracket-even-spacing": "off",
      "stylistic/standard/computed-property-even-spacing": "off",
      "stylistic/standard/object-curly-even-spacing": "off",
      "stylistic/switch-colon-spacing": "off",
      "stylistic/template-curly-spacing": "off",
      "stylistic/template-tag-spacing": "off",
      "stylistic/type-annotation-spacing": "off",
      "stylistic/wrap-iife": "off",
      "stylistic/wrap-regex": "off",
      "stylistic/yield-star-spacing": "off",

      "unicorn/new-for-builtins": "off",
      "unicorn/no-unnecessary-polyfills": "off",
      "unicorn/expiring-todo-comments": "off",
      "unicorn/escape-case": "off",
      "unicorn/prefer-module": "off",
      "unicorn/catch-error-name": "off",
      "unicorn/no-useless-undefined": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/no-instanceof-array": "off",
      "unicorn/no-static-only-class": "off",
      "unicorn/no-thenable": "off",
      "unicorn/no-typeof-undefined": "off",
      "unicorn/no-useless-switch-case": "off",
      "unicorn/prefer-array-flat-map": "off",
      "unicorn/prefer-node-protocol": "off",
      "unicorn/prefer-number-properties": "off",
      "unicorn/template-indent": "off",
      "unicorn/empty-brace-spaces": "off",
      "unicorn/no-nested-ternary": "off",
      "unicorn/number-literal-case": "off",

      "jsdoc/check-access": "off",
      "jsdoc/no-multi-asterisks": "off",
      "jsdoc/check-property-names": "off",
      "jsdoc/require-property-description": "off",
      "jsdoc/no-undefined-types": "off",
      "jsdoc/empty-tags": "off",
      "jsdoc/check-types ": "off",
      "jsdoc/check-tag-names ": "off",
      "jsdoc/require-property-name ": "off",
      "jsdoc/require-property ": "off",
      "jsdoc/check-values ": "off",
      "jsdoc/tag-lines": "off",
      "jsdoc/valid-types": "off",
      "jsdoc/require-property-type": "off",

      "@babel/object-curly-spacing": "off",
      "@babel/semi": "off",

      "babel/object-curly-spacing": "off",
      "babel/semi": "off",

      "flowtype/boolean-style": "off",
      "flowtype/delimiter-dangle": "off",
      "flowtype/generic-spacing": "off",
      "flowtype/object-type-curly-spacing": "off",
      "flowtype/object-type-delimiter": "off",
      "flowtype/quotes": "off",
      "flowtype/semi": "off",
      "flowtype/space-after-type-colon": "off",
      "flowtype/space-before-generic-bracket": "off",
      "flowtype/space-before-type-colon": "off",
      "flowtype/union-intersection-spacing": "off",

      "standard/array-bracket-even-spacing": "off",
      "standard/computed-property-even-spacing": "off",
      "standard/object-curly-even-spacing": "off",

      "vue/array-bracket-newline": "off",
      "vue/array-bracket-spacing": "off",
      "vue/array-element-newline": "off",
      "vue/arrow-spacing": "off",
      "vue/block-spacing": "off",
      "vue/block-tag-newline": "off",
      "vue/brace-style": "off",
      "vue/comma-dangle": "off",
      "vue/comma-spacing": "off",
      "vue/comma-style": "off",
      "vue/dot-location": "off",
      "vue/func-call-spacing": "off",
      "vue/html-closing-bracket-newline": "off",
      "vue/html-closing-bracket-spacing": "off",
      "vue/html-end-tags": "off",
      "vue/html-indent": "off",
      "vue/html-quotes": "off",
      "vue/key-spacing": "off",
      "vue/keyword-spacing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/multiline-html-element-content-newline": "off",
      "vue/multiline-ternary": "off",
      "vue/mustache-interpolation-spacing": "off",
      "vue/no-extra-parens": "off",
      "vue/no-multi-spaces": "off",
      "vue/no-spaces-around-equal-signs-in-attribute": "off",
      "vue/object-curly-newline": "off",
      "vue/object-curly-spacing": "off",
      "vue/object-property-newline": "off",
      "vue/operator-linebreak": "off",
      "vue/quote-props": "off",
      "vue/script-indent": "off",
      "vue/singleline-html-element-content-newline": "off",
      "vue/space-in-parens": "off",
      "vue/space-infix-ops": "off",
      "vue/space-unary-ops": "off",
      "vue/template-curly-spacing": "off",

      "tailwindcss/classnames-order": "off",

      "node/no-unpublished-import": "off",

      "import/no-duplicates": "off",
      "import/order": "off",
      "import/no-self-import": "off",
      "import/no-import-module-exports": "off",
      "import/no-unresolved": "off",
      "import/extensions": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-named-as-default": "off",

      "prettier/prettier": "off",
    },
  },
];
