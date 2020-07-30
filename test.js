var arr = [
  "martlock",
  "celeail",
  "some%20other%20placew",
  "something",
  "will%20be%20added",
];

let obj = { addMe: ":)" };

let obj1 = [
  { Unq: "martlock", number: "3232" },
  { Unq: "celeail", number: "3232" },
  { Unq: "some%20other%20placew", number: "3232" },
  { Unq: "something", number: "3232" },
  { Unq: "will%20be%20added", number: "3232" },
];

Object.values(obj1).map((elm, index, y) => {
  console.log((elm.me = obj.addMe));
  console.log(elm);
});

// for (var index in obj) {
//   // console.log(arr[index]);
//   if (Object.values(obj[index]).indexOf("m") > -1) {
//     console.log("has test1");
//   }
// }

// console.log(arr.indexOf("martlock"));

// var checked = {
//   martlock: false,
//   celeail: false,
//   d: false,
//   i: true,
//   sothighn: true,
// };

// var arr = [];
// var str = "";

// arr.forEach((e, i) => {
//   if (Object.values(checked)[i] === true) {
//     str = str + e + "%2C";

//     arr.push(e);

//     if (i === arr.length - 1) {
//       console.log("fetch", str);
//     }
//   }
// });
