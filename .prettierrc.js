/**
 * @type {import('prettier').Config}
 */
module.exports = {
  useTabs: false,
  tabWidth: 2,
  printWidth: 100,
  plugins: [require.resolve("prettier-plugin-organize-attributes")],
  attributeGroups: [
    "$ANGULAR_STRUCTURAL_DIRECTIVE",
    "$ANGULAR_ELEMENT_REF",
    "$ID",
    "$DEFAULT",
    "$CLASS",
    "^\\[class\\.",
    "$ANGULAR_ANIMATION",
    "$ANGULAR_ANIMATION_INPUT",
    "$ANGULAR_INPUT",
    "$ANGULAR_TWO_WAY_BINDING",
    "$ANGULAR_OUTPUT",
  ],
  overrides: [
    {
      files: ["*.html"],
      options: { parser: "html" },
    },
    {
      files: ["*.component.html", "*.template.html"],
      options: { parser: "angular" },
    },
  ],
};
