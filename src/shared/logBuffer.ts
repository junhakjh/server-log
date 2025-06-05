type LogLevel = 'log' | 'dir' | 'debug' | 'info' | 'warn' | 'error';

export interface LogEntry {
  level: LogLevel;
  message: string;
}

let logs: LogEntry[] = [];

export function pushLog(level: LogLevel, message: string) {
  logs.push({ level, message });
}

export function flushLogs(): LogEntry[] {
  const flushed = [...logs];
  logs = [];
  return flushed;
}
