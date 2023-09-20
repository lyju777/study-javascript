/**
 * Object 객체
 */

// key: value pair
let yujin = {
  name: "안유진",
  group: "아이브",
  dance: function () {
    return `${this.name}이 춤을 춥니다`;
  },
};

console.log(yujin);
console.log(yujin.name);
console.log(yujin["name"]);

const key = "name";
console.log(yujin[key]);

console.log(yujin.dance());

const nameKey = "name";
const nameValue = "안유진";

const groupKey = "group";
const groupValue = "아이브";

const yujin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name}이 춤을 춥니다`;
  },
};
console.log(yujin2);
console.log(yujin2.dance());

yujin2["group"] = "코드팩토리";
console.log(yujin2);

yujin2["engLishNmae"] = "An Yu Jin";
console.log(yujin2);

delete yujin2["engLishNmae"];
console.log(yujin2);

/**
 * 객체의 특징
 *
 * 1) const로 선언할경우 객체 자체를 변경 할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경 할 수 있다.
 */

const wonYoung = {
  name: "장원영",
  group: "아이브",
};

console.log(wonYoung);

// wonYoung = {};

wonYoung["group"] = "코드팩토리";
console.log(wonYoung);

/**
 *  모든 키값 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 *  모든 벨류값 가져오기
 */
console.log(Object.values(wonYoung));

const name = "안유진";

const yujin3 = {
  name,
};
console.log(yujin3);
