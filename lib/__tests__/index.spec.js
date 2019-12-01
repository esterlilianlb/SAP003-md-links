const mdLinks = require("../index");

const links = [ { text: " online version of the Alexa app",
  href: "http://alexa.amazon.com)" },
{ text: " Amazon developer console account",
  href: "https://developer.amazon.com/)" },
{ text: " Amazon Web Services account",
  href: "https://aws.amazon.com/)" } ];

describe (mdLinks, () => {
  it("should be a function", () => {
    expect(typeof mdLinks).toBe("function");
  });
});

