type LogLevel = 'log' | 'dir' | 'debug' | 'info' | 'warn' | 'error';

type LogEntry = {
  level: LogLevel;
  message: string;
};

let logs: LogEntry[] = [];

export const pushLog = (level: LogLevel, message: string) => {
  logs.push({ level, message });
};

export const flushLogs = (): LogEntry[] => {
  const flushed = [...logs];
  logs = [];
  return flushed;
};
