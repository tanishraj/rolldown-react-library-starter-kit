import { defineConfig } from "rolldown";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
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
    plugins: [
      typescript({
        tsconfig: "./tsconfig.json",
        useTsconfigDeclarationDir: true,
        clean: true,
        check: true,
      }),
      terser(),
    ],
    external: ["react", "react-dom", "react/jsx-runtime"],
  },
]);
