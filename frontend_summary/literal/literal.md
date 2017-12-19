# 리터럴\(literal\)

프로그래밍 언어에서 값을 생성하는 가장 쉬운 방법은 리터럴\(literal\)을 사용하는 것이다.

리터럴은 값의 표기법으로, 프로그래밍 언어마다 값을 표현하는 여러가지 리터럴을 가지고 있다.

> 리터럴과 값\(Value\)이 어떻게 다른지, 표현식\(expression\) 과 문\(satement\)이 어떻게 다른지를 이해해야한다.

```js
1; // 정수 리터럴
2.5 // 부동 소수점 리터럴
'hello'; // 문자열 리터럴
true; // 진리값 리터럴
```

* 문자열 리터럴
* 불린 리터럴
* 정수 리터럴
* 부동 소수점 리터럴
* 배열 리터럴
* 객체 리터럴

---

## 1.배열 리터럴

* 배열 리터럴은 0개 이상의 표현식\(expression\) 목록이다.
* 대괄로\(\[ \]\)로 묶어 사용한다. 배열 리터럴을 사용하여 배열을 만들 때, 그 요소로 지정된 값으로 초기화되고, 그길이는 지정된 인수의 객수로 설정된다.
* 아래 예제는 요소가 3개로 길이\(length\)가 3인 coffees 배열을 만듭니다.

```js
var coffees = ["french Roast","Colombian", "Kona"];
```

> Note: 열 리터럴은 일종의 객체 이니셜라이져\(initialiizer\)입니다.
> 배열 리터럴은 배열 객체입니다.

## 2. 불린 리터럴

불린 형은 두 리터럴 값을 가집니다. \(true , false\)

원시 불린값 true 및 false 와 [Boolean 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Boolean)의 true 및 false 값을 혼동하지 말아야 한다.

Boolean 객체는 원시 불린 데이터 형을 감싸는 래퍼\(wrapper\)입니다.

# 3. 정수 리터럴

정수는 10진, 16진, 8진 및 2진수로 표현 될수 있습니다.

```js
0, 117 및 -345 (10진수)
015, 0001 및 -0o77 (8진수)
0x1123, 0x00111 및 -0xF1A7 (16진수)
0b11, 0b0011 및 -0b11 (2진수)
```

# 4. 부동 소수점 리터럴

부동 소수점 리터럴은 아래와 같은 부분으로 이루어 진다.

* 부호\("+" 나 "-"\)가 달릴 수 있는 10진 정수

* 소수점\("."\)

* 소수 \(또 다른 10진수\)

* 지수

# 5. 객체 리터럴

객체 리터럴은 중괄호{ }로 묵인 0개 이상인 객체의 속성명과 관련 값 쌍 목록입니다.
문의 시작에 객체 리터럴을 사용해서는 안됩니다.

```js
var sales = "Toyota";
function carTypes(name){
if(name === "Honda"){
return name;
}else{
}
return "Sorry, we don't sell" + name + ".";
}
var car = { myCar: "saturn", getCar: carTypes("honda"), special: sales};
console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```
* car 객체의 첫째 요소는 myCar 속성을 정의하고 문자열 "Saturn"을 할당 합니다.
* 둘째 요소인 getcar 속성은 function(carTypes("honda"))을 호출한 결과가 즉시 할당 합니다.
* 셋째 요소 special 속성은 기본 변수 sales를 사용합니다.
---
```js
var car = { manyCars: {a: "Saab", "b": "jeep"}, 7: "Mazda" };

console.log(car.manyCars.b); //jeep
console.log(car[7]); //Mazda
```
* 속성명으로 숫자나 문자열 리터럴을 사용하거나 또 다른 객체 리터럴 내부에 객체를 중첩할 수도 있습니다.
---
```js
var unusualPropertyNames = {
"": "An empty string",
"!": "Bang!"
}
console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
console.log(unusualPropertyNames[""]; // An empty string
console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token!
console.log(unusualPropertyNames["!"]); // Bang!
```
* 객체 속성명은 빈 문자열 포함 어떤 문자열도 될 수 있습니다.
* 속성명이 유효한 Javascript 식별자나 숫자가 아닌 경우, 따옴표로 묶어야 합니다.
* 유요한 식별자가 아닌 속성명은 점(.)속성으로 접근할 수 없습니다.
* 대신 벼열 같은 표기법("[ ]")으로 접근하고 값을 설정할 수 있습니다.
---
```js
var obj = {
// __proto__
--proto__: theProtoObj,
// 'handler: handler'의 단축 표기
handler,
// Methods
toString(){
// Super calls
return "d" + super.toString();
},
// Computed (dynamic) property names
[ 'prop_' + (() => 42)() ] : 42
};
```

* ES2015에서, 객체 리터럴은 구성에서 **포로토타입** 설정, **foo:foo 할당**을 위한 단축표기, **메서드정의**, super 클래스 호출 및 식으로 동적인 속성명 계산을 지원하기 위하 확장됬습니다.

```js
var foo = {a: "alpha", 2: "two"};
console.log(foo.a); // alpha
console.log(foo[2]); // two
console.log(foo["a"]); // alpha
console.log(foo["2"]); // two
// console.log(foo.2); // Error: missing ) after argument list
// console.log(foo[a]); // Error: a is not defined
```
---

## 정규식 리터럴
정규식 리터럴은 슬래시 사이에 감싸인 패턴입니다.

```js
var re = /ab+c/;
```

## 문자열 리터럴
문자열 리터럴은 큰따옴표("") 혹은 작은 따옴표('')로 묵인 0개 이상의 문자입니다.
```js
"foo"
'bar'
"1234"
"John's cat"
```
* 문자열 리터럴 값은 문자열 객체의 모든 메서드를 호출할 수 있습니다.
* Javascript는 자동으로 문자열 리터럴을 **임시 문자열 객체로 변환**, 메서드를 호출하고 나서 **임시 문자열 객체를 폐기** 합니다.

```js
console.log("John's cat".length);
// 공백을 포함한 문자열 내 심볼 갯수가 출력됩니다.
// 여기서는, 10
```









