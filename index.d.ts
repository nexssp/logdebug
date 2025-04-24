import { bold, yellow, red, green, blue, underscore, white, magenta, cyan, grey } from '@nexssp/ansi';

interface LogFunction {
  (...args: any[]): void;
}

interface NexssLogDebug {
  defaultConsoleType: 'log' | 'error';
  dbg: LogFunction;
  d: LogFunction;
  dy: LogFunction;
  dr: LogFunction;
  dg: LogFunction;
  dc: LogFunction;
  dm: LogFunction;
  db: LogFunction;
  di: LogFunction;
  du: LogFunction;
  warn: LogFunction;
  error: LogFunction;
  info: LogFunction;
  success: LogFunction;
  important: LogFunction;
  ok: LogFunction;
  trace: LogFunction;
  header: LogFunction;
  isErrorPiped: boolean;
  isDebug: boolean;
  isQuiet: boolean;
  nexssLog: (consoleType: 'log' | 'error') => (pre: string) => (color?: (text: string) => string) => LogFunction;
}

// Default export
declare const logDebug: NexssLogDebug;
export default logDebug;

// Named exports
export const defaultConsoleType: NexssLogDebug['defaultConsoleType'];
export const dbg: NexssLogDebug['dbg'];
export const d: NexssLogDebug['d'];
export const dy: NexssLogDebug['dy'];
export const dr: NexssLogDebug['dr'];
export const dg: NexssLogDebug['dg'];
export const dc: NexssLogDebug['dc'];
export const dm: NexssLogDebug['dm'];
export const db: NexssLogDebug['db'];
export const di: NexssLogDebug['di'];
export const du: NexssLogDebug['du'];
export const warn: NexssLogDebug['warn'];
export const error: NexssLogDebug['error'];
export const info: NexssLogDebug['info'];
export const success: NexssLogDebug['success'];
export const important: NexssLogDebug['important'];
export const ok: NexssLogDebug['ok'];
export const trace: NexssLogDebug['trace'];
export const header: NexssLogDebug['header'];
export const isErrorPiped: NexssLogDebug['isErrorPiped'];
export const isDebug: NexssLogDebug['isDebug'];
export const isQuiet: NexssLogDebug['isQuiet'];
export const nexssLog: NexssLogDebug['nexssLog'];
