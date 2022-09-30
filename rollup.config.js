import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import svgr from "@svgr/rollup";
import babel from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/lib/index.ts",
  output: {
    file: "dist/index.js",
    format: "cjs",
    sourcemap: true,
    inlineDynamicImports: true,
  },

  plugins: [
    commonjs(),
    json(),
    resolve(),
    svgr(),
    image(),
    peerDepsExternal(),
    babel({ exclude: "node_modules/**" }),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
