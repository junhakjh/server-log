import { stringify } from 'flatted';
import { pushLog } from '../shared/logBuffer';

function serialize(args: any[]) {
  return stringify(args);
}

export const serverLog = (...args: any[]) => pushLog('log', serialize(args));
export const serverDir = (...args: any[]) => pushLog('dir', serialize(args));
export const serverDebug = (...args: any[]) => pushLog('debug', serialize(args));
export const serverInfo = (...args: any[]) => pushLog('info', serialize(args));
export const serverWarn = (...args: any[]) => pushLog('warn', serialize(args));
export const serverError = (...args: any[]) => pushLog('error', serialize(args));
