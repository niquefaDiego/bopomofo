import { ValidationError } from "../../../utils/errors";
import { PinyinTextParser } from "../";
import { PinyinText, PinyinSyllable, PinyinFinal, PinyinInitial, PinyinTone } from "../../models";

describe("PinyinTextParser", () => {
  
  var parser = new PinyinTextParser();

  function runParserTestCase(inputText: string, expected: PinyinText) {
    var result = parser.parse(inputText);
    if (result.tokens.length != expected.tokens.length) {
      fail(`parsing "${inputText}" resulted in ${result.tokens.length} tokens instead of ${expected.tokens.length}.`);
    }
    for (var i = 0; i < expected.tokens.length; i++) {
      var parsedToken = result.tokens[i];
      var expectedToken =  expected.tokens[i];
      if (typeof(parsedToken) != typeof(expectedToken)) {
        fail(`parsing "${inputText}" failed at token ${i}. `
          + `Expected token of type ${typeof(expectedToken)} but got ${typeof(parsedToken)}.`);
      }
      if (typeof(parsedToken) == "string" && typeof(expectedToken) == "string") {
        if (parsedToken != expectedToken) {
          fail(`parsing "${inputText}" failed at token ${i}. Expected "${expectedToken}" but got "${parsedToken}.`);
        }
      } else if (parsedToken instanceof PinyinSyllable && expectedToken instanceof PinyinSyllable) {
        if (parsedToken.initial != parsedToken.initial
          || parsedToken.final != parsedToken.final
          || parsedToken.tone != expectedToken.tone) {
          fail(`parsing "${inputText}" failed at token ${i}. Expected ${parsedToken} but got ${expectedToken}.`);
        }
      } else {
        fail(`parsing "${inputText}" failed at token ${i}. Unexpected type ${typeof(parsedToken)}, `
          + `should be either string or PinyinSyllable.`);
      }
    }
  }

  function s(initial: PinyinInitial, final: PinyinFinal, tone: PinyinTone): PinyinSyllable {
    return new PinyinSyllable(initial, final, tone);
  }

  it("Correctly parses pinyin", () => {
    runParserTestCase("ni3hao3", new PinyinText([
      s("n", "i", 3), s("h", "ao", 3)
    ]));
    runParserTestCase("wo3 jue2de ni3 hen3 piao4liang4", new PinyinText([
      s("w", "o", 3), " ", s("j", "ve", 2), s("d", "e", null), " ", s("n", "i", 3),
      " ", s("h", "en", 3), " ", s("p", "iao", 4), s("l", "iang", 4),
    ]));
    runParserTestCase("wo3 xi3huan1 chi1 la4 de0 cai4", new PinyinText([
      s("w", "o", 3), " ", s("x", "i", 3), s("h", "uan", 1), " ", s("ch", "i", 1),
      " ", s("l", "a", 4), " ", s("d", "e", null), " ", s("c", "ai", 4),
    ]));
    runParserTestCase("ni3 ke3yi3 shuo1 man4 yi1 dian3 ma?", new PinyinText([
      s("n", "i", 3), " ", s("k", "e", 3), s("y", "i", 3), " ", s("sh", "uo", 1),
      " ", s("m", "an", 4), " ", s("y", "i", 1), " ", s("d", "ian", 3), " ", s("m", "a", null), "?"
    ]));
  });

  it("Correctly throws exception for invalid pinyin", () => {
    var emptyPinyin = new PinyinText([]);
    expect(() => runParserTestCase("ni6", emptyPinyin)).toThrow(ValidationError);
    expect(() => runParserTestCase("ni3hhao3", emptyPinyin)).toThrow(ValidationError);
  });
});