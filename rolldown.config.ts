import { defineConfig } from "rolldown";

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        format: "esm",
        file: "dist/esm/index.js",
        exports: "named",
      },
      {
        format: "cjs",
        file: "dist/cjs/index.cjs",
        exports: "named",
      },
    ],
  },
]);
