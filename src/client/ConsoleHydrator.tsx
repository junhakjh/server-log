'use client';

import { parse } from 'flatted';
import { useEffect } from 'react';

export function ConsoleHydrator() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const script = document.getElementById('__SERVER_LOGS__');
    if (!script) return;

    try {
      const logs = JSON.parse(script.textContent || '[]');
      logs.forEach(({ level, message }: any) => {
        const args = parse(message);
        switch (level) {
          case 'log':
            console.log(...args);
            break;
          case 'dir':
            console.dir(...args);
            break;
          case 'debug':
            console.debug(...args);
            break;
          case 'info':
            console.info(...args);
            break;
          case 'warn':
            console.warn(...args);
            break;
          case 'error':
            console.error(...args);
            break;
        }
      });
    } catch (e) {
      console.error('[ConsoleHydrator] Failed to parse server logs', e);
    }
  }, []);

  return null;
}
