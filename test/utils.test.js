const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });
  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
  test('returns 118.8 when passed 99', () => {
      expect (utils.addVAT(99)).toBe(118.8);
  });
});

describe("utils.getFullName", () => {
  test("returns Susan Jason when passed Susan and Jason", () => {
    expect(utils.getFullName("Susan", "Jason")).toBe("Susan Jason");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns 50 when price is 100", () => {
    expect(utils.makeHalfPrice(100)).toBe(50);
  });
});
describe('utils.countBooks', () =>{
  test( " return the amounts of books in the array", () => {
    expect (utils.countBooks(['Harry Potter', 'Hunger Games','LOTR'])).toBe(3);
  });
});

describe('utils.isInStock', () => {
  test('If book in stock, true is returned', () => {
    const book = {
      title: 'Harry Potter and the Philospher Stone',
      author: ' J K Rowling', 
      yearOfPublication: 1999,
      quantity: 6 }; 

      expect(utils.isInStock (book)).toBe(true);
    }); 

  test('If book is out of stock, false is returned', () => {
    const book = {
      title: 'Northern Lights',
      author: 'Phillip Pullman',
      yearOfPublication: 1995,
      quantity: 0 };

      expect(utils.isInStock (book)).toBe(false);
  });    
});

describe('utils.getTotalOrderPrice', () => {
  test ('If item £20, total is £24 including VAT', () => {
    expect(utils.getTotalOrderPrice(20,1)).toBe(24);
  });
});