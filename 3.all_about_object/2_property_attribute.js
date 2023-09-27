/**
 *  property_attribute
 *
 *  1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 *  2) 엑세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나 설정할때 호출되는 함수로 구성된 프로퍼티 예) getter setter
 *
 */
const yujin = {
  name: "안유진",
  year: 2003,
};

console.log(Object.getOwnPropertyDescriptor(yujin, "year"));
/**
 *  1) value - 실제 프로퍼티 값
 *
 *  2) writable - 값을 수정할 수 있는지 여부 , false로 설정하면 프로터피 값을 수정못함
 *
 *  3) enumerable - 열거가 가능한지 여부 for ...in 룹 등을 사용할 수 있으면  true반환
 *
 *  4) configurable - 프로퍼티 어트리뷰트의 재정의가 가능한지 여부를 판단한다.
 *                    false일 경우 프로퍼티 삭제나 어트리뷰터 변경이 금지된다. 단 , writable이 true일 경우
 *                    값 변경과  writable을 변경하는건 가능하다.
 */
console.log(Object.getOwnPropertyDescriptor(yujin, "name"));

console.log(Object.getOwnPropertyDescriptors(yujin));

const yujin2 = {
  name: "안유진",
  year: 2003,

  get age() {
    return new Date().getFullYear() - this.year;
  },

  set age(age) {
    this.year = new Date().getFullYear() - age;
  },
};

console.log(yujin2);
console.log(yujin2.age);

yujin2.age = 32;
console.log(yujin2.age);
console.log(yujin2.year);

console.log(Object.getOwnPropertyDescriptor(yujin2, "age"));

Object.defineProperty(yujin2, "height", {
  value: 172,
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(yujin2);
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));

yujin2.height = 180;
console.log(yujin2);

Object.defineProperty(yujin2, "height", {
  writable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));
console.log("-----------------------------------------------");
yujin2.height = 172;
console.log(yujin2);

/**
 * enumerable
 */
console.log(Object.keys(yujin2));
for (let key in yujin2) {
  console.log(key);
}

Object.defineProperty(yujin2, "name", {
  enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(yujin2, "name"));

console.log(Object.keys(yujin2));

for (let key in yujin2) {
  console.log(key);
}
console.log(yujin2);
console.log(yujin2.name);

/**
 * configurable
 */
Object.defineProperty(yujin2, "height", {
  writable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));

// Object.defineProperty(yujin2, "height", {
//   enumerable: false,
// });

Object.defineProperty(yujin2, "height", {
  value: 172,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));

Object.defineProperty(yujin2, "height", {
  writable: false,
});

Object.defineProperty(yujin2, "height", {
  writable: true,
});
console.log(Object.getOwnPropertyDescriptor(yujin2, "height"));
