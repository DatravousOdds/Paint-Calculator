// assume one gallon covers 350 sq ft

// area of an circle is pi * r^2
const PI = 3.14159;

// const length = parseInt(prompt("Enter length of room in feet: "));
// const width = parseInt(prompt("Enter width of room in feet: "));
// const area = length * width;
// const gallons = area / 350;
// console.log(`You will need ${Math.ceil(gallons)} gallons of paint paint to cover ${area} square feet.`);


isNotVaild = true;
while (isNotVaild) {
  const length = parseInt(prompt("Enter length of room in feet: "));
  const width = parseInt(prompt("Enter width of room in feet: "));
  if(!isNaN(length) || !isNaN(width)) {
    const area = length * width;
    const gallons = area / 350;
    console.log(`You will need ${Math.ceil(gallons)} gallons of paint to cover ${area} square feet.`);
    isNotVaild = false;
  }
  
}