import { Suspense } from 'react';
import { LogScript as LogScriptInjection } from './LogScript';

type Props = {
  timeout?: number;
};

export function LogScript({ timeout = 500 }: Props) {
  return (
    <Suspense>
      <LogScriptInjection timeout={timeout} />
    </Suspense>
  );
}
