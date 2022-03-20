declare module 'simple-stdout-logger' {
  export class stdout {
    static info (message: string): void;
    static warn (message: string): void;
    static error (message: string): void;
    static debug (message: string): void;
  }
}
