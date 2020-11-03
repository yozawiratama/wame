const assert = require("assert");

const wame = require("../index");

describe("Simple test", () => {
  it("should return in good url", () => {
    let result = wame.generate("6287883138099", "Hello, My Name is Yoza");
    assert.equal(
      result,
      `https://api.whatsapp.com/send?phone=6287883138099&text=Hello,%20My%20Name%20is%20Yoza`
    );
  });
});

describe("HTML test", () => {
  describe("BOLD", () => {
    it("should return bold - b", () => {
      let result = wame.generate(
        "6287883138099",
        "Hello, My Name is <b>Yoza</b>"
      );
      assert.equal(
        result,
        `https://api.whatsapp.com/send?phone=6287883138099&text=Hello,%20My%20Name%20is%20*Yoza*`
      );
    });
    it("should return bold - strong", () => {
      let result = wame.generate(
        "6287883138099",
        "Hello, My Name is <strong>Yoza</strong>"
      );
      assert.equal(
        result,
        `https://api.whatsapp.com/send?phone=6287883138099&text=Hello,%20My%20Name%20is%20*Yoza*`
      );
    });
  });

  describe("ITALIC", () => {
    it("should return italic - i", () => {
      let result = wame.generate(
        "6287883138099",
        "Hello, My Name is <i>Yoza</i>"
      );
      assert.equal(
        result,
        `https://api.whatsapp.com/send?phone=6287883138099&text=Hello,%20My%20Name%20is%20_Yoza_`
      );
    });
    it("should return italic - em", () => {
      let result = wame.generate(
        "6287883138099",
        "Hello, My Name is <em>Yoza</em>"
      );
      assert.equal(
        result,
        `https://api.whatsapp.com/send?phone=6287883138099&text=Hello,%20My%20Name%20is%20_Yoza_`
      );
    });
  });

  describe("STRIKETROUGH", () => {
    it("should return strike - s", () => {
      let result = wame.generate(
        "6287883138099",
        "Hello, My Name is <s>Yoza</s>"
      );
      assert.equal(
        result,
        `https://api.whatsapp.com/send?phone=6287883138099&text=Hello,%20My%20Name%20is%20~Yoza~`
      );
    });
    it("should return strike - strike", () => {
      let result = wame.generate(
        "6287883138099",
        "Hello, My Name is <strike>Yoza</strike>"
      );
      assert.equal(
        result,
        `https://api.whatsapp.com/send?phone=6287883138099&text=Hello,%20My%20Name%20is%20~Yoza~`
      );
    });
  });

  describe("BREAK", () => {
    it("should return break to newline", () => {
      let result = wame.generate(
        "6287883138099",
        "Hello,<br />My Name is Yoza"
      );
      assert.equal(
        result,
        `https://api.whatsapp.com/send?phone=6287883138099&text=Hello,%0AMy%20Name%20is%20Yoza`
      );
    });
  });

  describe("LIST", () => {
    it("should return break to newline", () => {
      let result = wame.generate(
        "6287883138099",
        `<ul>
<li>Test 1</li>
<li>Test 2</li>
</ul>`
      );
      assert.equal(
        result,
        `https://api.whatsapp.com/send?phone=6287883138099&text=-%20Test%201%0A-%20Test%202%0A%0A`
      );
    });
  });
});

describe("Full HTML from WYSHTML5 Editor", () => {
  it("should success", () => {
      let result = wame.generate(
          '6287883138099',
          `<h1><b>Hello,</b></h1> My Name is <b>Yoza Wiratama.</b><br>I have some hobby, for examples :<br><ul><li><b>BOLD</b></li><li><i>ITALIC</i></li><li><s>STRIKE</s></li></ul><br>Thank you very much.`
      )
      assert.equal(
        result,
        `https://api.whatsapp.com/send?phone=6287883138099&text=*Hello,*%20My%20Name%20is%20*Yoza%20Wiratama.*%0AI%20have%20some%20hobby,%20for%20examples%20:%0A-%20*BOLD*%0A-%20_ITALIC_%0A-%20~STRIKE~%0A%0A%0AThank%20you%20very%20much.`
      );
  });
});
