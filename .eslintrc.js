"use strict";

module.exports = {
    extends: [
        "fluid",
        "plugin:yml/standard"
    ],
    ignorePatterns: ["_site/", "src/_locales/messages.js", "!.*.cjs", "!.*.js", "!.github/"],
    env: {
        amd: true,
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 2020
    }
};
