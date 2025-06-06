import { Suspense } from 'react';
import { LogScript as LogScriptInjection } from './LogScript';

type Props = {
  /**
   * Timeout (in milliseconds) to wait before injecting logs into the HTML.
   *
   * This delay ensures all server-side logs are collected before rendering.
   *
   * default: `500ms`
   */
  timeout?: number;
};

export function LogScript({ timeout = 500 }: Props) {
  return (
    <Suspense>
      <LogScriptInjection timeout={timeout} />
    </Suspense>
  );
}
