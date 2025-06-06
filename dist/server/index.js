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

// src/server/index.ts
var index_exports = {};
__export(index_exports, {
  LogScript: () => LogScript2,
  serverDebug: () => serverDebug,
  serverDir: () => serverDir,
  serverError: () => serverError,
  serverInfo: () => serverInfo,
  serverLog: () => serverLog,
  serverWarn: () => serverWarn
});
module.exports = __toCommonJS(index_exports);

// src/server/LogScript.container.tsx
var import_react = require("react");

// src/shared/logBuffer.ts
var logs = [];
var pushLog = (level, message) => {
  logs.push({ level, message });
};
var flushLogs = () => {
  const flushed = [...logs];
  logs = [];
  return flushed;
};

// src/server/LogScript.tsx
var import_jsx_runtime = require("react/jsx-runtime");
async function LogScript({ timeout }) {
  await new Promise((resolve) => setTimeout(resolve, timeout));
  const logs2 = flushLogs();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "script",
    {
      id: "__SERVER_LOGS__",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify(logs2)
      }
    }
  );
}

// src/server/LogScript.container.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function LogScript2({ timeout = 500 }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react.Suspense, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LogScript, { timeout }) });
}

// src/server/serverLogger.ts
var import_flatted = require("flatted");
var serialize = (args) => {
  return (0, import_flatted.stringify)(args);
};
var serverLog = (...args) => pushLog("log", serialize(args));
var serverDir = (...args) => pushLog("dir", serialize(args));
var serverDebug = (...args) => pushLog("debug", serialize(args));
var serverInfo = (...args) => pushLog("info", serialize(args));
var serverWarn = (...args) => pushLog("warn", serialize(args));
var serverError = (...args) => pushLog("error", serialize(args));
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  LogScript,
  serverDebug,
  serverDir,
  serverError,
  serverInfo,
  serverLog,
  serverWarn
});
