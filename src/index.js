// const name = "じゃけえ";
// const age = 28;

// const message1 = "私の名前は" + name + "です。" + "年齢は" + age + "です。";
// //テンプレート文字列
// const message2 = `私の名前は${name} です。年齢は${age}です。`;
// console.log(message1);
// console.log(message2);

//従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

//アロー関数
// const func2 = (str) => {
//   return str
// }
// const func2 = (str) => str;
// console.log(func2("func2です。"));
// const func3 = (num1, num2) => num1 + num2

// console.log(func3(10, 20))

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけぇ",
//   age: 28
// };
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);
// const myProfile = ['しえ', 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
// console.log(message3);
// //配列の分割代入
// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message4);

/**
 * スプレッド構文
 */

//  const arr1 = [1, 2];
//  console.log(arr1);
//  console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2)
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["山田", "田中", "じゃけえ"];
// for(let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`)
// }
// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2)

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`))

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけえ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })

// console.log(newNumArr);

/**
 * 三項演算子
 */
// const val1 = 1 > 0 ? 'true' : 'false;

// const num = 1300;
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const num2 = "1300";
// const formattedNum2 =
//   typeof num2 === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum2);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えてます!!" : "許容範囲内です";
};
console.log(checkSum(50, 60));
console.log(checkSum(50, 45));
