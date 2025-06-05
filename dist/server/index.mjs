// src/shared/logBuffer.ts
var logs = [];
function pushLog(level, message) {
  logs.push({ level, message });
}
function flushLogs() {
  const flushed = [...logs];
  logs = [];
  return flushed;
}

// src/server/LogScript.tsx
import { jsx } from "react/jsx-runtime";
async function LogScript() {
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

// src/server/serverLogger.ts
import { stringify } from "flatted";
function serialize(args) {
  return stringify(args);
}
var serverLog = (...args) => pushLog("log", serialize(args));
var serverDir = (...args) => pushLog("dir", serialize(args));
var serverDebug = (...args) => pushLog("debug", serialize(args));
var serverInfo = (...args) => pushLog("info", serialize(args));
var serverWarn = (...args) => pushLog("warn", serialize(args));
var serverError = (...args) => pushLog("error", serialize(args));
export {
  LogScript,
  serverDebug,
  serverDir,
  serverError,
  serverInfo,
  serverLog,
  serverWarn
};
