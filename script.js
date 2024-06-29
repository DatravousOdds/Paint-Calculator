// assume one gallon covers 350 sq ft
// area of L-Shape room (length1 * width1) + (length2 * width2)
// area of an circle is pi * r^2
const PI = 3.14159;
const roomShape = prompt("What shape is your room? R = round, S = square, L = L-shaped").toLowerCase();
if (roomShape == "r" && isNaN(roomShape)) {
  const roomRadius = prompt("What is the radius of your room?");
  if (roomRadius > 0 && !isNaN(roomRadius)) {
    const area = PI * Math.pow(roomRadius, 2);
    const gallons = area / 350;
    if (gallons > 0) {
      console.log(`You will need ${Math.ceil(gallons)} gallons of paint to cover ${area} square feet.`);
    } else {
      console.log(`You will need ${Math.ceil(gallons)} gallon of paint to cover ${area} square feet.`);
    }
  } else {
    console.log("Invalid input. Please enter a positive number for the radius.");
  }
} else if (roomShape == "l" && isNaN(roomShape)) {
  const length1 = parseInt(prompt("What is the length of the first rectangle?"))
  const width1 = parseInt(prompt("What is the width of the first rectangle?"));
  const length2 = parseInt(prompt("What is the length of the second rectangle?"));
  const width2 = parseInt(prompt("What is the width of the second rectangle?"));
  if (length1 > 0 && width1 > 0 && length2 > 0 && width2 > 0 && !isNaN(length1) && !isNaN(width1) && !isNaN(length2)) {
    const area1 = length1 * width1;
    const area2 = length2 * width2;
    const area = area1 + area2;
    gallons = area / 350;
    if (gallons > 0) {
      console.log(`You will need ${Math.ceil(gallons)} gallons of paint to cover ${area} square feet.`);
    } else {
      console.log(`You will need ${Math.ceil(gallons)} gallon of paint to cover ${area} square feet.`);
    }

  } else {
    console.log("Invalid input. Please enter positive numbers for the lengths and widths of the rectangles.");
  }

} else if (roomShape == "s" && isNaN(roomShape)) {
  const length = parseInt(prompt("Enter length of room in feet: "));
  const width = parseInt(prompt("Enter width of room in feet: "));
  if (length > 0 && width > 0 && !isNaN(length) && !isNaN(width)) {
    const area = length * width;
    const gallons = area / 350;
    if (gallons > 0) {
      console.log(`You will need ${Math.ceil(gallons)} gallons of paint to cover ${area} square feet.`);
    } else {
      console.log(`You will need ${Math.ceil(gallons)} gallon of paint to cover ${area} square feet.`);
    }

  } else {
    console.log("Invalid input. Please enter positive numbers for the length and width of the room.");
  }

}



// isNotVaild = true;
// while (isNotVaild) {
//   const length = parseInt(prompt("Enter length of room in feet: "));
//   const width = parseInt(prompt("Enter width of room in feet: "));
//   if(!isNaN(length) || !isNaN(width)) {
//     const area = length * width;
//     const gallons = area / 350;
//     console.log(`You will need ${Math.ceil(gallons)} gallons of paint to cover ${area} square feet.`);
//     isNotVaild = false;
//   }

// }