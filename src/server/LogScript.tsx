import { flushLogs } from '../shared/logBuffer';

type Props = {
  timeout: number;
};

export async function LogScript({ timeout }: Props) {
  await new Promise((resolve) => setTimeout(resolve, timeout));
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
