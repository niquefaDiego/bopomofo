function fail(reason: string): never {
  throw new Error(reason);
}

global.fail = fail;
