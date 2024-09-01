import { PinyinSyllable, PinyinText, PinyinTextToken, PinyinTone } from "../models/pyinin";
import { ZhuyinFinal, ZhuyinInitial, ZhuyinSyllable, ZhuyinText, ZhuyinTextToken, ZhuyinTone } from "../models/zhuyin";
import { AssertionError } from "../../utils/errors";


const initials: {[key: string]: ZhuyinInitial} = {
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


const finals: {[key: string]: ZhuyinFinal} = {
  "a": "ㄚ",
  "ai": "ㄞ",
  "an": "ㄢ",
  "ao": "ㄠ",
  "ang": "ㄤ",
  "e": "ㄜ",
  "en": "ㄣ",
  "eng": "ㄥ",
  "ei": "ㄟ",
  "er": "ㄦ",
  "i": "一",
  "ia": "一ㄚ",
  "ian": "一ㄢ",
  "iang": "一ㄤ",
  "iao": "一ㄠ",
  "ie": "一ㄝ",
  "in": "一ㄣ",
  "ing": "一ㄥ",
  "io": "一ㄛ",
  "iong": "ㄩㄥ",
  "iu": "一ㄡ",
  "o": "ㄛ",
  "ong": "ㄨㄥ",
  "u": "ㄨ",
  "ou": "ㄡ",
  "ua": "ㄨㄚ",
  "uan": "ㄨㄢ",
  "uang": "ㄨㄤ",
  "uai": "ㄨㄞ",
  "ui": "ㄨㄟ",
  "uo": "ㄨㄛ",
  "un": "ㄨㄣ",
  "v": "ㄩ",
  "ve": "ㄩㄝ",
  "van": "ㄩㄢ",
  "vn": "ㄩㄣ"
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

  private translateTone(pinyinTone: PinyinTone): ZhuyinTone {
    if (pinyinTone == null) return "˙"; // neutral tone (Zhuyin has no tone markers)
    if (pinyinTone == 1) return null; // zhuyin has no simbol for tone 1
    if (pinyinTone == 2) return "ˊ";
    if (pinyinTone == 3) return "ˇ";
    if (pinyinTone == 4) return "ˋ";
    throw new AssertionError(`Unexpected pinyin tone '${pinyinTone}`);
  }

  private translateSyllable(pinyinSyllable: PinyinSyllable): ZhuyinSyllable {
    var initial: ZhuyinInitial = null;
    var final: ZhuyinFinal = null;
    if (pinyinSyllable.initial == "y") {
      final = finals[(pinyinSyllable.final == "i" ? "" : "i") + pinyinSyllable.final];
      if (final == null) throw new AssertionError(`Unexpected pinyin final for initial 'y': '${pinyinSyllable.final}'`);
    } else if (pinyinSyllable.initial == "w") {
      final = finals["u" + pinyinSyllable.final];
      if (final == null) throw new AssertionError(`Unexpected pinyin final for initial 'w': '${pinyinSyllable.final}'`);
    } else if (pinyinSyllable.initial != null) {
      initial = initials[pinyinSyllable.initial];
      if (initial == null)
        throw new AssertionError(`Unexpected pinyin initial '${pinyinSyllable.initial}.`);
    }

    if (final == null) {
      final = finals[pinyinSyllable.final];
      if (final == null) throw new AssertionError(`Unexpected pinyin final: '${pinyinSyllable.final}'`);
    }

    var tone: ZhuyinTone = this.translateTone(pinyinSyllable.tone);
    return new ZhuyinSyllable(initial, final, tone);
  }
}

export { PinyinToZhuyinTranslator };