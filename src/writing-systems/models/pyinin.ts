import { validateIsTrue } from "@/utils/validations-utils";


type PinyinInitial = null|"b"|"p"|"m"|"f"|"d"|"t"|"n"|"l"|"g"|"k"|"h"|"j"|"q"|"x"|"zh"|"ch"|"sh"|"r"|"z"|"c"|"s"|"w"|"y";
type PinyinFinal =  null|"a"|"ai"|"an"|"ang"|"ao"|"e"|"en"|"eng"|"ei"|"er"|"i"|"ia"|"ian"|"iang"|"iao"|"ie"|"in"|"ing"|"io"|"iong"|"iu"|"o"|"ong"|"ou"|"u"|"ua"|"uan"|"uang"|"uai"|"ui"|"uo"|"un"|"v"|"ve"|"van"|"vn";
type PinyinTone = null|1|2|3|4;

class PinyinSyllable
{
  initial: PinyinInitial;
  final: PinyinFinal;
  tone: PinyinTone;

  constructor (initial: PinyinInitial, final: PinyinFinal, tone: PinyinTone)
  {
    validateIsTrue(initial != null || final != null, "Either initial or final of PinyinSyllable must be non-null");
    this.initial = initial;
    this.final = final;
    this.tone = tone;
  }
}

type PinyinTextToken = PinyinSyllable | string;

class PinyinText
{
  tokens: Array<PinyinTextToken>;
  constructor (tokens: Array<PinyinTextToken> = []) {
    this.tokens = tokens;
  }
}

export type { PinyinInitial, PinyinFinal, PinyinTone, PinyinTextToken };
export { PinyinSyllable, PinyinText };