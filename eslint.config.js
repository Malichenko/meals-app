import tsParser from "@typescript-eslint/parser"
import tsPlugin from "@typescript-eslint/eslint-plugin"
import boundariesPlugin from "eslint-plugin-boundaries"
import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"

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
        },
        settings: {
            react: {
                version: "detect",
            },
            // Map both TS path aliases and direct src/ paths to FSD layers
            "boundaries/elements": [
                {type: "app", pattern: "@app/*"},
                {type: "screens", pattern: "@screens/*"},
                {type: "widgets", pattern: "@widgets/*"},
                {type: "features", pattern: "@features/*"},
                {type: "entities", pattern: "@entities/*"},
                {type: "shared", pattern: "@shared/*"},
                // Also recognize relative/project-root based paths
                {type: "app", pattern: "src/app/*"},
                {type: "screens", pattern: "src/screens/*"},
                {type: "widgets", pattern: "src/widgets/*"},
                {type: "features", pattern: "src/features/*"},
                {type: "entities", pattern: "src/entities/*"},
                {type: "shared", pattern: "src/shared/*"},
            ],
            "boundaries/ignore": ["**/*.test.*", "**/*.spec.*"],
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
                            from: 'app',
                            allow: ['screens', 'widgets', 'features', 'entities', 'shared'],
                        },
                        {
                            from: 'screens',
                            allow: ['widgets', 'features', 'entities', 'shared'],
                        },
                        {
                            from: 'widgets',
                            allow: ['features', 'entities', 'shared'],
                        },
                        {
                            from: 'features',
                            allow: ['entities', 'shared'],
                        },
                        {
                            from: 'entities',
                            allow: ['shared'],
                        },
                        {
                            from: 'shared',
                            allow: ['shared'],
                        },
                    ],
                },
            ],
            // Re-export ban is configured below per-layer using file overrides
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
        { selector: "ExportNamedDeclaration[source.value='@features']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export features from features." },
        { selector: "ExportNamedDeclaration[source.value^='@features/']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export features from features." },
        { selector: "ExportAllDeclaration[source.value='@features']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export features from features." },
        { selector: "ExportAllDeclaration[source.value^='@features/']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export features from features." },
      ],
    },
  },
  {
    files: ["src/screens/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        { selector: "ExportNamedDeclaration[source.value='@screens']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export screens from screens." },
        { selector: "ExportNamedDeclaration[source.value^='@screens/']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export screens from screens." },
        { selector: "ExportAllDeclaration[source.value='@screens']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export screens from screens." },
        { selector: "ExportAllDeclaration[source.value^='@screens/']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export screens from screens." },
      ],
    },
  },
  {
    files: ["src/entities/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        { selector: "ExportNamedDeclaration[source.value='@entities']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export entities from entities." },
        { selector: "ExportNamedDeclaration[source.value^='@entities/']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export entities from entities." },
        { selector: "ExportAllDeclaration[source.value='@entities']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export entities from entities." },
        { selector: "ExportAllDeclaration[source.value^='@entities/']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export entities from entities." },
      ],
    },
  },
  {
    files: ["src/shared/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        { selector: "ExportNamedDeclaration[source.value='@shared']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export shared from shared." },
        { selector: "ExportNamedDeclaration[source.value^='@shared/']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export shared from shared." },
        { selector: "ExportAllDeclaration[source.value='@shared']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export shared from shared." },
        { selector: "ExportAllDeclaration[source.value^='@shared/']", message: "Re-exporting from the same layer is forbidden by FSD: do not re-export shared from shared." },
      ],
    },
  },
];

