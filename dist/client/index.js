"use client"
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.ts
var index_exports = {};
__export(index_exports, {
  ConsoleHydrator: () => ConsoleHydrator
});
module.exports = __toCommonJS(index_exports);

// src/client/ConsoleHydrator.tsx
var import_flatted = require("flatted");
var import_react = require("react");
function ConsoleHydrator() {
  (0, import_react.useEffect)(() => {
    if (process.env.NODE_ENV !== "development") return;
    const script = document.getElementById("__SERVER_LOGS__");
    if (!script) return;
    try {
      const logs = JSON.parse(script.textContent || "[]");
      logs.forEach(({ level, message }) => {
        const args = (0, import_flatted.parse)(message);
        switch (level) {
          case "log":
            console.log(...args);
            break;
          case "dir":
            console.dir(...args);
            break;
          case "debug":
            console.debug(...args);
            break;
          case "info":
            console.info(...args);
            break;
          case "warn":
            console.warn(...args);
            break;
          case "error":
            console.error(...args);
            break;
        }
      });
    } catch (e) {
      console.error("[ConsoleHydrator] Failed to parse server logs", e);
    }
  }, []);
  return null;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ConsoleHydrator
});
