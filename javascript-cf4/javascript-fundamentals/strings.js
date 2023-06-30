let s1 = "Coding";
let s2 = "Factory";
let s3 = `${s1} ${s2}`;       // Template literals.

let s4 = `<div>
              <span>Hello</span>
          </div>`;

let s5 = String(1);     // string
let s6 = new String(7);   // Object

let s7 = s3.substring(1, 8);    // endIndex - 1  C oding Factory
let s8 = s3.slice(1, 5);      // endIndex - 1
let s9 = s3.slice(-7);

let arr = s3.split(" ");

let ch = s3.charAt(1);     // o
let cp = s3.codePointAt(1);    // 67  ASCII number.

let position = s3.indexOf(o, 3);      // 1;
let pos2 = s3.lastIndexOf(o);

s3.replace("Coding", "Code");
s3.toLowerCase();
s3.toUpperCase();


if (s1 === s3) {
  console.log("Sensitively equal");
}

if (s1.toUpperCase() === s2.toUpperCase()) {
  console.log("Insensitively equal");
}

let cf = "  Coding  ";
cf.trim();