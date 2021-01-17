"use strict";

import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";

import pkg from "./package.json"

export default {
    input: "src/main.js",
    output: {
        file: `public/${pkg.name}.js`,
        format: "iife",
        globals: {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    },
    plugins: [
        babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
        // We need to convert the CommonJS modules used by Node to ES6
        commonjs(),
        // Resolve Node modules
        nodeResolve(),
        replace({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ],
    watch: {
        exclude: ['node_modules/**']
    }
};