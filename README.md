# serverlog-to-browser

A real-time logging library for server-side and client-side logs, supporting various log levels. Designed for seamless integration with React and Next.js, it enables server logs to be embedded in HTML and displayed directly in the browser console.

## ✨ Features

- Log server messages to the browser console

- Support for log, debug, info, warn, error, dir levels

- Works in both server and client environments

- Seamless integration with React / Next.js

- Development mode log injection only

## 📦 Installation

```bash
npm install serverlog-to-browser
# or
yarn add serverlog-to-browser
```

> Requires: react >=18.2.0, react-dom >=18.2.0

## 🚀 Usage

### Before use, set layout.tsx

```tsx
import { ConsoleHydrator } from 'serverlog-to-browser/client';
import { LogScript } from 'serverlog-to-browser/server';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
        <LogScript />
        <ConsoleHydrator />
      </body>
    </html>
  );
}
```

### On the server

```ts
import { serverDir } from 'serverlog-to-browser/server';

serverDir('This will be sent to the client console');
serverError('This error will show up as a red message');
```

## 🧾 Logging Methods

The library provides several server-side logging functions that mirror browser console methods. These methods inject logs into HTML during SSR (server-side rendering), allowing the client browser to display them in the developer console.

| **Function**  | **Log Level** | **Console Method on Client** | **Description**                                                                |
| ------------- | ------------- | ---------------------------- | ------------------------------------------------------------------------------ |
| `serverLog`   | `log`         | `console.log`                | General purpose logging. Use for standard output or debugging.                 |
| `serverDebug` | `debug`       | `console.debug`              | Detailed debug messages. Not shown in some browsers unless devtools are open.  |
| `serverInfo`  | `info`        | `console.info`               | Informational messages, often highlighted with an info icon.                   |
| `serverWarn`  | `warn`        | `console.warn`               | Warning messages. Rendered with yellow highlight in most browsers.             |
| `serverError` | `error`       | `console.error`              | Error messages. Rendered with red highlight, used for exceptions or failures.  |
| `serverDir`   | `dir`         | `console.dir`                | Displays objects as an interactive tree. Useful for inspecting data structure. |

> These methods are only injected in development mode to avoid polluting production output.

## 🧪 Development

This library uses tsup for bundling and supports both CommonJS and ES Module formats.

## 🔗 Links

- [GitHub Repository](https://github.com/junhakjh/serverlog-to-browser)
- [Issue Tracker](https://github.com/junhakjh/serverlog-to-browser/issues)

## 📄 License

MIT © [junhakjh](junhakjh@ajou.ac.kr)
