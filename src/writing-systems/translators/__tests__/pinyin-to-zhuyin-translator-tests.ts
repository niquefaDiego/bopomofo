import { PinyinTextParser } from "../../../writing-systems/text-parsers";
import { PinyinToZhuyinTranslator } from "../pinyin-to-zhuyin-translator";

describe("PinyinToZhuyinTranslator", () => {
  var parser = new PinyinTextParser();
  var translator = new PinyinToZhuyinTranslator();

  function runTestCase(inputText: string, expected: string) {
    var pinyinText = parser.parse(inputText);
    var translatedText = translator.translate(pinyinText);
    expect(translatedText.toString()).toEqual(expected);
  }

  it("correctly translates pinyin to zhuyin", () => {
    runTestCase("ni3hao3", "ㄋ一ˇㄏㄠˇ");
    runTestCase("wo3 jue2de ni3 hen3 piao4liang4", "ㄨㄛˇ ㄐㄩㄝˊㄉㄜ˙ ㄋ一ˇ ㄏㄣˇ ㄆ一ㄠˋㄌ一ㄤˋ");
    runTestCase("wo3 xi3huan1 chi1 la4 de0 cai4", "ㄨㄛˇ ㄒ一ˇㄏㄨㄢ ㄔ一 ㄌㄚˋ ㄉㄜ˙ ㄘㄞˋ");
    runTestCase("ni3 ke3yi3 shuo1 man4 yi1 dian3 ma?", "ㄋ一ˇ ㄎㄜˇ一ˇ ㄕㄨㄛ ㄇㄢˋ 一 ㄉ一ㄢˇ ㄇㄚ˙?" );
  });
});