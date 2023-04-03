let n = 10;
let index = 1;
while (index <= n) {
  console.log(index);
  index += 1;
}
//2. sondgoi
index = 1;
while (index <= n) {
  console.log(index);
  index += 2;
}
//3. tegsh
index = 2;
while (index <= n) {
  console.log(index);
  index += 2;
}
//4. 100 hurtelh tooni niilber
n = 100;
index = 1;
let sum = 0;
while (index < n) {
  sum = sum + index;
  index++;
}
console.log(sum);

//5. n too hurtelh tooni niilber
let a = Number(prompt("N toog bichne uu"));
while (index < a) {
  sum = sum + index;
  console.log(index);
  index++;
}
console.log("n too hurtelh natural iin niilber too", sum);

//6. anhni too eseh
let isPrime = true;
if (a == 2) {
  isPrime = false;
}
let i = 2;
while (i < a) {
  if (a % i === 0) {
    isPrime = false;
    break;
  }
  i++;
}
if (isPrime) {
  console.log(a + "is prime");
} else {
  console.log(a + "is not prime");
}

//7. interval

let interNumbStart = Number(prompt("interval tooni ehleliig bichne uu"));
let interNumbEnd = Number(prompt("interval tooni tugsgulig bichne uu"));

while (interNumbStart <= interNumbEnd) {
  let isPrime = true;
  if (interNumbStart <= 1) {
    isPrime = false;
  }
  for (let i = 2; i <= Math.sqrt(interNumbStart); i++) {
    if (interNumbStart % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(interNumbStart);
  }
  interNumbStart++;
}

//8. faktoral
let Fsum = 1;
let Findex = 1;
while (Findex <= a) {
  Fsum = Fsum * Findex;
  Findex++;
}
console.log("faktoral" + sum);

//9 .Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич

let B = Number(prompt("duriin olon orontoi tsiper ee oruulna uu"));
let TSsum = 0;

while (B > 0) {
  TSsum += B % 10;
  B = Math.floor(B / 10);
}
console.log("ugugdsun tooni tsifruudin niilber " + TSsum);

// jich N toog garaas avchik blohch dundan n toon dre hed hdn uurchlult hiihgd bharn
//  bharn shuud utgiin ugchihlu. Bas prompt oos avsn utgaa umnuh ymnuud deer ashiglaj
// chdj bga blhor enen deer nehh yalgaa garku gj bdson

//10. N хүртэлх тооны сондгой тоо хэвлэх
index = 1;
let SondgoiSum = 0;
while (index <= 10) {
  console.log(index);
  SondgoiSum += index;
  index += 2;
}
console.log("n too hurtelh tooni sondgoin niilber" + SondgoiSum);
//11.N хүртэлх тооны тэгш тоо хэвлэх
let TegshSum = 0;
index = 2;
while (index <= 10) {
  console.log(index);
  TegshSum += index;
  index += 2;
}
console.log("n too hurtelj tooni tegshiin niilber" + TegshSum);

//12.Өгөгдсөн  эерэг тооны урвууг хэвлэх
let C = 123;

let reversed = 0;

while (C > 0) {
  const digit = C % 10;
  reversed = reversed * 10 + digit;
  C = Math.floor(C / 10);
}
console.log("ugugdsun too " + C);
console.log("reverse hiisen " + reversed);

//13. Өгөдсөн тооны цифрүүдийг үгээр хэвлэх
let d = 53453;
let D = d;

const digits = {
  0: "тэг",
  1: "нэг",
  2: "хоёр",
  3: "гурав",
  4: "дөрөв",
  5: "тав",
  6: "зургаа",
  7: "долоо",
  8: "найм",
  9: "ес",
  10: "арав",
};

let NumWords = "";

while (D > 0) {
  const digit = D % 10;
  NumWords = digits[digit] + " " + NumWords;
  D = Math.floor(D / 10);
}

console.log(d + " toog ug ruun horvuuled " + NumWords);
