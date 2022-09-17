declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEV: string;
      TOKEN: string;
    }
  }
}

export {};
