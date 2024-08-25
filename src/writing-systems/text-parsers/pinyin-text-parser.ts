import { PinyinText } from "../models/pyinin";
import {TextParser } from "./text-parser";

class PinyinTextParser implements TextParser<PinyinText>
{
  parse(text: string): PinyinText {
    return new PinyinText([]); // TODO
  }
}

export { PinyinTextParser as PinyinParser };