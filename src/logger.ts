import { createLogger, format, transports } from 'winston';

/**
 * Returns a logger instance with the given label.
 * @param label The label for your logger
 */
export function getLogger(label: string) {
  return createLogger({
    transports: [new transports.Console()],
    level: 'silly',
    format: format.combine(
      format.simple(),
      format.colorize({ all: true }),
      format.timestamp({ format: '📅 YYYY-MM-DD ⌚ HH:mm:ss.SSS' }),
      format.label({ label, message: false }),
      format.ms(),
      format.printf((info) => `${info.timestamp} ${info.ms} [${info.label}] \t${info.level}: \t${info.stack ? info.stack : info.message}`),
    ),
  });
}

/**
 * A default logger instance with no label.
 */
export const logger = getLogger('<No label provided>');
