import { defineConfig } from "rolldown";
import packageJson from "./package.json";

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        exports: "named",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        exports: "named",
        sourcemap: true,
      },
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
]);
