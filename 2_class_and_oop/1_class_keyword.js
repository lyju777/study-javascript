/**
 * Class Keyword
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayName() {
    return `안녕하세요 저는 ${this.name}입니다.`;
  }
}

// constructor : 생성자

const yujin = new IdolModel("안유진", "2003");
console.log(yujin);

const gaeul = new IdolModel("가을", "2002");
console.log(gaeul);

console.log(yujin.name);
console.log(yujin.year);

console.log(yujin.sayName());
console.log(gaeul.sayName());

console.log(typeof IdolModel);
console.log(typeof yujin);
