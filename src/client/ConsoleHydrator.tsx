'use client';

import { parse } from 'flatted';
import { useEffect } from 'react';

type Props = {
  /**
   * Timeout (in milliseconds) before hydrating logs on the client.
   *
   * This should be **slightly greater than** the `timeout` used in `LogScript`,
   * to ensure the server logs are fully injected into the HTML before reading them.
   *
   * default: `1000ms`
   */
  timeout?: number;
};

export function ConsoleHydrator({ timeout = 1000 }: Props) {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const timeoutId = setTimeout(() => {
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
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
