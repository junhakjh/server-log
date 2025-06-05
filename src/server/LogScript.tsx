import { flushLogs } from '../shared/logBuffer';

export async function LogScript() {
  const logs = flushLogs();

  return (
    <script
      id='__SERVER_LOGS__'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(logs),
      }}
    />
  );
}
