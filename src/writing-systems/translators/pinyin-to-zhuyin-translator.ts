import { isBlankCharacter } from "@/utils/string-utils";
import { PinyinSyllable, PinyinText, PinyinTextToken } from "../models/pyinin";
import { ZhuyinSyllable, ZhuyinText, ZhuyinTextToken } from "../models/zhuyin";


const initials: {[key: string]: string} = {
  "b": "ㄅ",
  "c": "ㄘ",
  "ch": "ㄔ",
  "d": "ㄉ",
  "f": "ㄈ",
  "g": "ㄍ",
  "h": "ㄏ",
  "j": "ㄐ",
  "k": "ㄎ",
  "l": "ㄌ",
  "m": "ㄇ",
  "n": "ㄋ",
  "p": "ㄆ",
  "q": "ㄑ",
  "r": "ㄖ",
  "s": "ㄙ",
  "sh": "ㄕ",
  "t": "ㄊ",
  "x": "ㄒ",
  "z": "ㄗ",
  "zh": "ㄓ",
};

const toneMarkers: {[key: string]: string} = {
  "0": "˙", // neutral tone (Zhuyin has no tone markers)
  // zhuyin has no simbol for tone 1
  "2": "ˊ",
  "3": "ˇ",
  "4": "ˋ"
};

const finals: {[key: string]: string} = {
  "a": "ㄚ",
  "ai": "ㄞ",
  "ao": "ㄠ",
  "an": "ㄢ",
  "e": "ㄜㄝ", // special case, e in pinyin can be either ㄜ or ㄝ depending on context
  "ei": "ㄟ",
  "eng": "ㄥ",
  "er": "ㄦ",
  "i": "一",
  "n": "ㄣ",
  "o": "ㄛ",
  "u": "ㄨ",
  "ang": "ㄤ",
  "ou": "ㄡ",
  "v": "ㄩ",
};

class PinyinToZhuyinTranslator
{
  translate(pinyinText: PinyinText): ZhuyinText {
    return new ZhuyinText(pinyinText.tokens.map(token => this.translateToken(token)));
  }

  private translateToken(pinyinToken: PinyinTextToken): ZhuyinTextToken {
    if (pinyinToken instanceof PinyinSyllable) {
      return this.translateSyllable(pinyinToken);
    }
    return pinyinToken;
  }

  private translateSyllable(pinyinSyllable: PinyinSyllable): ZhuyinSyllable {
    return new ZhuyinSyllable(null, null, null); // TODO
  }
}

export { PinyinToZhuyinTranslator };