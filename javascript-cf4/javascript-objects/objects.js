const teacher = {
  id: 1,
  ssn: "12345",
  firstname: "Jord",
  lastname: "Pap."
};

// console.log(teacher);

const point3D = new Object();
point3D.x = 1;
point3D.y = 2;
point3D.z = 3;

// console.log(point3D);

const obj = Object.create(Object.prototype);
obj.url = "https://github.com/jordanpapaditsas/landing-page/blob/main/index.html";
obj.img = "https://www.aueb.gr/sites/default/files/aueb/Antoniadou-f1.jpg";
obj.tmp = "tmp";

delete obj.tmp;

let xDim = point3D.x;
let xDim2 = point3D['x'];
let {x: myX, y, z} = point3D;

for (const property in point3D) {
  console.log(`${property} : ${point3D[property]}`);
}
