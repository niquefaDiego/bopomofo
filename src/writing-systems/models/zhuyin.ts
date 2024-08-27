import { validateIsTrue } from "../../utils/validations-utils";

type ZhuyinInitial = null|"ㄅ"|"ㄘ"|"ㄔ"|"ㄉ"|"ㄈ"|"ㄍ"|"ㄏ"|"ㄐ"|"ㄎ"|"ㄌ"|"ㄇ"|"ㄋ"|"ㄆ"|"ㄑ"|"ㄖ"|"ㄙ"|"ㄕ"|"ㄊ"|"ㄒ"|"ㄗ"|"ㄓ";
type ZhuyinFinal = null|"ㄚ"|"ㄞ"|"ㄠ"|"ㄢ"|"ㄜ"|"ㄝ"|"ㄟ"|"ㄥ"|"ㄦ"|"一"|"ㄣ"|"ㄛ"|"ㄨ"|"ㄤ"|"ㄡ"|"ㄩ";
type ZhuyinTone = null|"˙"|"ˊ"|"ˇ"|"ˋ";

class ZhuyinSyllable
{
  initial: ZhuyinInitial;
  final: ZhuyinFinal;
  tone: ZhuyinTone;

  public toString(): string {
    return (this.initial ?? "") + (this.final ?? "") + (this.tone ?? "");
  }

  constructor(initial: ZhuyinInitial, final: ZhuyinFinal, tone: ZhuyinTone) {
    validateIsTrue(initial != null || final != null, "Either initial or final must be non-null in a zhuyin sillable");
    this.initial = initial;
    this.final = final;
    this.tone = tone;
  }
}

type ZhuyinTextToken = ZhuyinSyllable | string;


class ZhuyinText
{
  tokens: Array<ZhuyinTextToken>;
  constructor (tokens: Array<ZhuyinTextToken> = []) {
    this.tokens = tokens;
  }
}

export type { ZhuyinInitial, ZhuyinFinal, ZhuyinTone, ZhuyinTextToken };
export { ZhuyinSyllable, ZhuyinText };

