
interface TextParser<T> {
  parse(text: string): T;
}

export type { TextParser };