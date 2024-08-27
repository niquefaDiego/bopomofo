import { AssertionError, ValidationError } from "../../utils/errors";
import { PinyinFinal, PinyinInitial, PinyinSyllable, PinyinText, PinyinTextToken, PinyinTone } from "../models/pyinin";
import { TextParser } from "./text-parser";

class PinyinTextParser implements TextParser<PinyinText>
{
  parse(text: string): PinyinText {
    text = text.toLowerCase();
    text = text.replaceAll("ue", "ve");
    var tokens = new Array<PinyinTextToken>();
    
    var i: number = 0;
    while (i < text.length) {
      var ch: string = text.charAt(i);

      if (!this.isPinyinCharacter(ch))
      {
        tokens.push(ch);
        i++;
        continue;
      }

      
      var initial: PinyinInitial = null;
      if (!"aeiouv".includes(ch))
      {
        var ch2: string = i+1 >= text.length ? "" : ch + text.charAt(i+1);
        if ("ch" == ch2 || "sh" == ch2 || "zh" == ch2) {
          initial = ch2;
          i += 2;
        } else if ("bcdfghjklmnpqrstwxyz".includes(ch)) {
          initial = ch as PinyinInitial;
          i++;
        } else {
          throw new AssertionError(`Could not parse character '${ch}' at position ${i} of "${text}"`);
        }

        if (i >= text.length) {
          throw new ValidationError(`Unexpected end of PinyinText: "${text}"`);
        }
        ch = text.charAt(i);
      }

      var final: PinyinFinal | "" = "";
      
      var possibleFinals: Array<PinyinFinal> = this.finalsStartingWithCharacter[ch];
      if (possibleFinals == null) {
        throw new AssertionError(`Unexpected character '${ch}' at position ${i} while parsing final. Text = "${text}" (Initial = "${initial}")`);
      } else {
        for (var possibleFinal of possibleFinals) {
          if (text.substring(i, i + possibleFinal.length) == possibleFinal && possibleFinal.length > final.length) {
            final = possibleFinal;
          }
        }
      }

      if (final == "") {
        throw new ValidationError(`Could not parse final at position ${i}. Text = "${text}"`);
      }
      i += final.length;

      var tone: PinyinTone = null;

      if (i < text.length && "01234".includes(text.charAt(i))) {
        var toneInt = parseInt(text.charAt(i));
        tone = toneInt == 0 ? null : toneInt as PinyinTone;
        i++;
      }

      tokens.push(new PinyinSyllable(initial, final, tone));
    }

    return new PinyinText(tokens);
  }

  private finalsStartingWithCharacter: {[key: string]: Array<PinyinFinal> } = {
    "a": ["a","ai","an","ang","ao"],
    "e": ["e","en","eng","ei","er"],
    "i": ["i","ia","ian","iang","iao","ie","in","ing","io","iong","iu"],
    "o": ["o","ong","ou"],
    "u": ["u","ua","uan","uang","uai","ui","uo","un"],
    "v": ["v","ve","van","vn"]
  };

  private isPinyinCharacter(char: string): boolean {
    return /^[a-z0-4]$/.test(char);
  }
}

export { PinyinTextParser };