// src/server/LogScript.container.tsx
import { Suspense } from "react";

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
import { jsx } from "react/jsx-runtime";
async function LogScript({ timeout }) {
  await new Promise((resolve) => setTimeout(resolve, timeout));
  const logs2 = flushLogs();
  return /* @__PURE__ */ jsx(
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
import { jsx as jsx2 } from "react/jsx-runtime";
function LogScript2({ timeout = 500 }) {
  return /* @__PURE__ */ jsx2(Suspense, { children: /* @__PURE__ */ jsx2(LogScript, { timeout }) });
}

// src/server/serverLogger.ts
import { stringify } from "flatted";
var serialize = (args) => {
  return stringify(args);
};
var serverLog = (...args) => pushLog("log", serialize(args));
var serverDir = (...args) => pushLog("dir", serialize(args));
var serverDebug = (...args) => pushLog("debug", serialize(args));
var serverInfo = (...args) => pushLog("info", serialize(args));
var serverWarn = (...args) => pushLog("warn", serialize(args));
var serverError = (...args) => pushLog("error", serialize(args));
export {
  LogScript2 as LogScript,
  serverDebug,
  serverDir,
  serverError,
  serverInfo,
  serverLog,
  serverWarn
};
