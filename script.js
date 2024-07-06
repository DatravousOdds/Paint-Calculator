const output =  document.getElementById("output");
const measureUnit = document.getElementById("measure-unit");
const unitHeight = document.getElementById("unit-height");
const unitFeet = document.getElementById("unit-feet");
const length = document.getElementById("length");
const height = document.getElementById("height");
const calculateBtn = document.getElementById("calutate-btn");
const clearBtn = document.getElementById("clear-btn");
const fields = document.getElementById("fields");


const PI = 3.14159;



measureUnit.addEventListener('change', () => {
  console.log(measureUnit.value)
  if (measureUnit.value === "round") {
    unitHeight.style.display = "none";
    unitFeet.style.display = "none";

    // create an new element for radius input
    const div = document.createElement("div");
    div.classList.add("inputs");
    div.setAttribute("id", "unit-radius");
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("input-wrapper");
    const label = document.createElement("label");
    const newContent = document.createTextNode("Radius");
    label.append(newContent);
    const inputField = document.createElement("input");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", "Enter radius");
    innerDiv.append(label);
    innerDiv.append(inputField);
    div.append(innerDiv);
    fields.append(div);
    
  } else if (measureUnit.value === "l-shape") {
    unitHeight.style.display = "block";
    unitFeet.style.display = "block";
    const radiusDiv = document.getElementById("unit-radius");
    if(radiusDiv) {
      radiusDiv.remove();
    }
    // creates width 2 input
    const width1 = document.createElement("div");
    width1.classList.add("inputs");
    width1.setAttribute("id", "unit-width1");
    const innerWidth1 = document.createElement("div");
    innerWidth1.classList.add("input-wrapper");
    const labelWidth1 = document.createElement("label");
    const newContentWidth1 = document.createTextNode("Width 2");
    labelWidth1.append(newContentWidth1);
    const inputFieldWidth1 = document.createElement("input");
    inputFieldWidth1.setAttribute("type", "text");
    inputFieldWidth1.setAttribute("placeholder", "Enter width 2");
    innerWidth1.append(labelWidth1);
    innerWidth1.append(inputFieldWidth1);
    width1.append(innerWidth1);
    fields.append(width1);
    // creates height 2 input
    // const height1 = document.createElement("div");
    // height1.classList.add("inputs");
    // height1.setAttribute("id", "unit-height1");
    // const innerHeight1 = document.createElement("div");
    // innerHeight1.classList.add("input-wrapper");
    // const labelHeight1 = document.createElement("label");
    // const newContentHeight1 = document.createTextNode("Height 2");
    // labelHeight1.append(newContentHeight1);
    // const inputFieldHeight1 = document.createElement("input");
    // inputFieldHeight1.setAttribute("type", "text");
    // inputFieldHeight1.setAttribute("placeholder", "Enter height 2");
    // innerHeight1.append(labelWidth1);
    // innerHeight1.append(inputFieldWidth1);
    // height1.append(innerHeight1);
    // fields.append(height1);
    
  }
});

calculateBtn.addEventListener('click', () => {
  // function that calculates the paint 
  const measureValue = measureUnit.value;
  if (measureValue == "round") {
    if(roomRadius > 0 && isNaN(roomRadius)) {
      const area = PI * Math.pow(roomRadius, 2);
      const gallons = area / 350;
      output.innerHTML = `You need ${gallons} gallons of paint`;
    } 
    // TODO: implement error handler for invalid input
  } 
    
  
    
  
});

clearBtn.addEventListener("click", () => {
  // function that clears the inputs
});

const paintCalculator = (height1, width1, height2=0, width2=0) => {
  // function that calculates the paint needed
  
}

const clearInputs = () => {
  // function that clears the inputs
  
}


                              

// assume one gallon covers 350 sq ft
// area of L-Shape room (length1 * width1) + (length2 * width2)
// area of an circle is pi * r^2

// const roomShape = prompt("What shape is your room? R = round, S = square, L = L-shaped").toLowerCase();




// isNotValid = true;
// while (isNotValid) {
//   const roomShape = prompt("What shape is your room? R = round, S = square, L = L-shaped").toLowerCase();
//   if (roomShape == "r") {
//     const roomRadius = parseInt(prompt("What is the radius of your room?"));
//     if (roomRadius > 0 && !isNaN(roomRadius)) {
//       const area = PI * Math.pow(roomRadius, 2);
//       const gallons = area / 350;
//       isNotValid = false;
//       alert(`You will need ${Math.ceil(gallons)} gallon(s) of paint to cover ${area.toFixed(2)} square feet.`);
//     } else {
//       alert("Invalid input. Please enter a positive number for the radius.");
//     }
//   } else if (roomShape == "l") {
//     const length1 = parseInt(prompt("What is the length of the first rectangle?"))
//     const width1 = parseInt(prompt("What is the width of the first rectangle?"));
//     const length2 = parseInt(prompt("What is the length of the second rectangle?"));
//     const width2 = parseInt(prompt("What is the width of the second rectangle?"));
//     if (length1 > 0 && width1 > 0 && length2 > 0 && width2 > 0 && !isNaN(length1) && !isNaN(width1) && !isNaN(length2)) {
//       const area1 = length1 * width1;
//       const area2 = length2 * width2;
//       const area = area1 + area2;
//       gallons = area / 350;
//       isNotValid = false;
//       alert(`You will need ${Math.ceil(gallons)} gallons of paint to cover ${area.toFixed(2)} square feet.`);
//     } else {
//       alert("Invaild input. Please enter positive numbers for the length and width of the rectangles.");
//     }



//   } else if (roomShape == "s" && isNaN(roomShape)) {
//     const length = parseInt(prompt("Enter length of room in feet: "));
//     const width = parseInt(prompt("Enter width of room in feet: "));
//     if (length > 0 && width > 0 && !isNaN(length) && !isNaN(width)) {
//       const area = length * width;
//       const gallons = area / 350;
//       isNotVailad = false;
//       alert(`You will need ${Math.ceil(gallons)} gallons of paint to cover ${area.toFixed(2)} square feet.`);
//     } else {
//       alert("Invalid input. Please enter positive numbers for the lengths and widths of the rectangles.");
//     }

//   } else {
//     alert("Invalid shape. Please enter R for round, S for square, or L for L-shaped.");
//   }

// }

