let bag = new Set();

bag.add("Athens");
bag.add("Paris");
bag.delete("Paris");


if (bag.has("Paris")) {
  console.log("Has Paris");
}

console.log("Size: " + bag.size);
console.log(bag);