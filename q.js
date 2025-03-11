function cook(i1, i2, i3) {
    console.log(`${this.name} is having a meal with ${i1}, ${i2}, and ${i3}`);
}


const rakshan = { name: "rakshan"};

cook.call(rakshan, "rice", "chicken", "water");

cook.apply(rakshan, ["rice", "beans", "wine"]);

const cookforRakshan = cook.bind(rakshan, "rice", "chicken", "water");

cookforRakshan();

