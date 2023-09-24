/**
 * getter and setter
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  /**
   * 1)데이터를 가공해서 새로운 데이터를 반환할때
   * 2) private한 값을 반환할때
   */
  get nameAndYear() {
    return `${this.name} - ${this.year}`;
  }

  set setName(name) {
    this.name = name;
  }
}

const yujin = new IdolModel("안유진", 2003);
console.log(yujin);
console.log(yujin.nameAndYear);

yujin.setName = `장원영`;
console.log(yujin);

class IdolModel2 {
  #name;
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yujin2 = new IdolModel2("안유진", 2003);
console.log(yujin2);
console.log(yujin2.name);

yujin2.name = "코드팩토리";
console.log(yujin2.name);
