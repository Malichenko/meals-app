import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import boundariesPlugin from "eslint-plugin-boundaries";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  {
    ignores: [
      "node_modules/**",
      "*.config.js",
      "*.config.ts",
      "metro.config.js",
      "babel.config.js",
      "jest.config.js",
      "eslint.config.js",
    ],
  },
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      boundaries: boundariesPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
      "boundaries/elements": [
        { type: "app", pattern: "@app/*" },
        { type: "screens", pattern: "@screens/*" },
        { type: "widgets", pattern: "@widgets/*" },
        { type: "features", pattern: "@features/*" },
        { type: "entities", pattern: "@entities/*" },
        { type: "shared", pattern: "@shared/*" },
        // Also recognize relative/project-root based paths
        { type: "app", pattern: "src/app/*" },
        { type: "screens", pattern: "src/screens/*" },
        { type: "widgets", pattern: "src/widgets/*" },
        { type: "features", pattern: "src/features/*" },
        { type: "entities", pattern: "src/entities/*" },
        { type: "shared", pattern: "src/shared/*" },
      ],
      "boundaries/ignore": ["**/*.test.*", "**/*.spec.*"],
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
        node: {
          extensions: [".ts", ".tsx", ".js", ".jsx"],
        },
      },
    },
    rules: {
      ...tsPlugin.configs["recommended"].rules,
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            {
              from: "app",
              allow: ["screens", "widgets", "features", "entities", "shared"],
            },
            {
              from: "screens",
              allow: ["widgets", "features", "entities", "shared"],
            },
            {
              from: "widgets",
              allow: ["features", "entities", "shared"],
            },
            {
              from: "features",
              allow: ["entities", "shared"],
            },
            {
              from: "entities",
              allow: ["shared"],
            },
            {
              from: "shared",
              allow: ["shared"],
            },
          ],
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: [
                "@screens/*/*",
                "@widgets/*/*",
                "@features/*/*",
                "@entities/*/*",
                "src/screens/*/*",
                "src/widgets/*/*",
                "src/features/*/*",
                "src/entities/*/*",
              ],
              message:
                "Import from the layer public API (its index.ts) instead of deep paths.",
            },
            {
              group: [
                "../entities/*",
                "../../entities/*",
                "../features/*",
                "../../features/*",
                "../widgets/*",
                "../../widgets/*",
                "../screens/*",
                "../../screens/*",
              ],
              message:
                "Use path aliases to access other layers through their public API.",
            },
          ],
        },
      ],
      "prettier/prettier": "error",
    },
  },
  {
    files: ["src/**/*.test.{ts,tsx}", "src/**/*.spec.{ts,tsx}"],
    rules: {
      "boundaries/element-types": "off",
    },
  },
  // Forbid same-layer imports via path aliases (allow only relative intra-slice imports)
  {
    files: ["src/widgets/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@widgets/*", "src/widgets/*"],
              message:
                "FSD: Widgets must not import other widgets via aliases. Use relative imports within the same widget only.",
            },
            {
              group: ["@app/*", "src/app/*"],
              message:
                "FSD: Widgets must not import from app layer. Widgets are lower than app in the FSD hierarchy.",
            },
            {
              group: ["@screens/*", "src/screens/*"],
              message:
                "FSD: Widgets must not import from screens layer. Widgets are lower than screens in the FSD hierarchy.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/features/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@features/*", "src/features/*"],
              message:
                "FSD: Features must not import other features via aliases. Use relative imports within the same feature only.",
            },
            {
              group: ["@app/*", "src/app/*"],
              message:
                "FSD: Features must not import from app layer. Features are lower than app in the FSD hierarchy.",
            },
            {
              group: ["@screens/*", "src/screens/*"],
              message:
                "FSD: Features must not import from screens layer. Features are lower than screens in the FSD hierarchy.",
            },
            {
              group: ["@widgets/*", "src/widgets/*"],
              message:
                "FSD: Features must not import from widgets layer. Features are lower than widgets in the FSD hierarchy.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/screens/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@screens/*", "src/screens/*"],
              message:
                "FSD: Screens must not import other screens via aliases. Use relative imports within the same screen only.",
            },
            {
              group: ["@app/*", "src/app/*"],
              message:
                "FSD: Screens must not import from app layer. Screens are lower than app in the FSD hierarchy.",
            },
          ],
        },
      ],
    },
  },
  {
    files: ["src/entities/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@entities/*", "src/entities/*"],
              message:
                "FSD: Entities must not import other entities via aliases. Use relative imports within the same entity only.",
            },
            {
              group: ["@app/*", "src/app/*"],
              message:
                "FSD: Entities must not import from app layer. Entities are lower than app in the FSD hierarchy.",
            },
            {
              group: ["@screens/*", "src/screens/*"],
              message:
                "FSD: Entities must not import from screens layer. Entities are lower than screens in the FSD hierarchy.",
            },
            {
              group: ["@widgets/*", "src/widgets/*"],
              message:
                "FSD: Entities must not import from widgets layer. Entities are lower than widgets in the FSD hierarchy.",
            },
            {
              group: ["@features/*", "src/features/*"],
              message:
                "FSD: Entities must not import from features layer. Entities are lower than features in the FSD hierarchy.",
            },
          ],
        },
      ],
    },
  },
  // Forbid re-exporting from the same layer using targeted overrides
  {
    files: ["src/widgets/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportNamedDeclaration[source.value='@widgets']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export widgets from widgets.",
        },
        {
          selector: "ExportNamedDeclaration[source.value^='@widgets/']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export widgets from widgets.",
        },
        {
          selector: "ExportAllDeclaration[source.value='@widgets']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export widgets from widgets.",
        },
        {
          selector: "ExportAllDeclaration[source.value^='@widgets/']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export widgets from widgets.",
        },
      ],
    },
  },
  {
    files: ["src/features/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportNamedDeclaration[source.value='@features']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export features from features.",
        },
        {
          selector: "ExportNamedDeclaration[source.value^='@features/']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export features from features.",
        },
        {
          selector: "ExportAllDeclaration[source.value='@features']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export features from features.",
        },
        {
          selector: "ExportAllDeclaration[source.value^='@features/']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export features from features.",
        },
      ],
    },
  },
  {
    files: ["src/screens/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportNamedDeclaration[source.value='@screens']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export screens from screens.",
        },
        {
          selector: "ExportNamedDeclaration[source.value^='@screens/']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export screens from screens.",
        },
        {
          selector: "ExportAllDeclaration[source.value='@screens']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export screens from screens.",
        },
        {
          selector: "ExportAllDeclaration[source.value^='@screens/']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export screens from screens.",
        },
      ],
    },
  },
  {
    files: ["src/entities/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportNamedDeclaration[source.value='@entities']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export entities from entities.",
        },
        {
          selector: "ExportNamedDeclaration[source.value^='@entities/']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export entities from entities.",
        },
        {
          selector: "ExportAllDeclaration[source.value='@entities']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export entities from entities.",
        },
        {
          selector: "ExportAllDeclaration[source.value^='@entities/']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export entities from entities.",
        },
      ],
    },
  },
  {
    files: ["src/shared/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "ExportNamedDeclaration[source.value='@shared']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export shared from shared.",
        },
        {
          selector: "ExportNamedDeclaration[source.value^='@shared/']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export shared from shared.",
        },
        {
          selector: "ExportAllDeclaration[source.value='@shared']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export shared from shared.",
        },
        {
          selector: "ExportAllDeclaration[source.value^='@shared/']",
          message:
            "Re-exporting from the same layer is forbidden by FSD: do not re-export shared from shared.",
        },
      ],
    },
  },
];
