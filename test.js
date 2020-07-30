var arr = [
  "martlock",
  "celeail",
  "some%20other%20placew",
  "something",
  "will%20be%20added",
];

let obj = [
  { Unq: "martlock" },
  { Unq: "celeail" },
  { Unq: "some%20other%20placew" },
  { Unq: "something" },
  { Unq: "will%20be%20added" },
];

const handleAddSearchItem = (boolen, value) => {
  console.log(arr);
};


handleAddSearchItem(true, )


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
