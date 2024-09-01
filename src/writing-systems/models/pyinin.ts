
type PinyinInitial =
  null|"b"|"c"|"ch"|"d"|"f"|"g"|"h"|"j"|"k"|"l"|"m"|"n"|"p"|"q"|"r"|"sh"|"s"|"t"|"w"|"x"|"y"|"z"|"zh";

type PinyinFinal =
  "a"|"ai"|"an"|"ang"|"ao"|
  "e"|"en"|"eng"|"ei"|"er"|
  "i"|"ia"|"ian"|"iang"|"iao"|"ie"|"in"|"ing"|"io"|"iong"|"iu"|
  "o"|"ong"|"ou"|
  "u"|"ua"|"uan"|"uang"|"uai"|"ui"|"uo"|"un"|
  "v"|"ve"|"van"|"vn";

type PinyinTone = null|1|2|3|4;

class PinyinSyllable
{
  initial: PinyinInitial;
  final: PinyinFinal;
  tone: PinyinTone;

  public toString(): string {
    // TODO: Make it "hǎo" instead of "hao3"
    return (this.initial ?? "") + this.final + (this.tone ?? "");
  }

  constructor (initial: PinyinInitial, final: PinyinFinal, tone: PinyinTone)
  {
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