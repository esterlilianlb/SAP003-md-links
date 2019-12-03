const mdLinks = require("../index.js");

describe (mdLinks, () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
});

test("returns array with objects", () => {
  return mdLinks("lib/__tests__/testmd.md").then((result) => {
    expect(result).toEqual([{ text: ' Regex', href: 'https://regex101.com/)' }, { text: ' Google', href: 'https://google.com/)' }]);
  });
});

test("return error", () => {
  return mdLinks("empty").catch((error) => {
    expect(error).toBe("MD file not found");
  });
});