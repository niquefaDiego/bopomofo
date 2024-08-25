
describe("PininTextParser", () => {
  it("Correctly parses pinyin", () => {
    expect(2).toEqual(1+1);
    // TODO: test with the follwing cases
    //"ni3hao3"
    //"wo3jue2de0ni3hen3piao4liang4"
    //"wo3xi3huan1chi1la4de0cai4"
    //"ni3 ke3yi3 shuo1man4yi4dian3 ma?"
  });
  it("Correctly throws exception for invalid pinyin", () => {
    expect(2).toEqual(1+1);
    // TODO
  });
});