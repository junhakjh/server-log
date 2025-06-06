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
declare function ConsoleHydrator({ timeout }: Props): null;

export { ConsoleHydrator };
