/**
 *  Super and override
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  sayHello() {
    return `안녕하세요 ${this.name}입니다.`;
  }
}

class FemaleIdolModel extends IdolModel {
  part;

  constructor(name, year, part) {
    super(name, year);
    this.part = part;
  }

  sayHello() {
    // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고 있습니다.`;
    return `${super.sayHello()}${this.part}(을)를 맡고 있습니다.`;
  }
}

const yujin = new FemaleIdolModel("안유진", 2003, "보컬");
console.log(yujin);

const wonYoung = new IdolModel("장원영", 2002);
console.log(wonYoung);
console.log(wonYoung.sayHello());
console.log(yujin.sayHello());
