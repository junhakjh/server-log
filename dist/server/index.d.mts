import * as react_jsx_runtime from 'react/jsx-runtime';

type Props = {
    timeout?: number;
};
declare function LogScript({ timeout }: Props): react_jsx_runtime.JSX.Element;

declare const serverLog: (...args: any[]) => void;
declare const serverDir: (...args: any[]) => void;
declare const serverDebug: (...args: any[]) => void;
declare const serverInfo: (...args: any[]) => void;
declare const serverWarn: (...args: any[]) => void;
declare const serverError: (...args: any[]) => void;

export { LogScript, serverDebug, serverDir, serverError, serverInfo, serverLog, serverWarn };
