const output = document.getElementById("output");
const measureUnit = document.getElementById("measure-unit");
const unitHeight = document.getElementById("unit-height");
const unitFeet = document.getElementById("unit-feet");
const length = document.getElementById("length");
const height = document.getElementById("height");
const calculateBtn = document.getElementById("calutate-btn");
const clearBtn = document.getElementById("clear-btn");
const fields = document.getElementById("fields");
const inputFields = document.getElementById("inputs_fields");

const PI = 3.14159;

// function that creates DOM elements
const elementCreator = (
  ele,
  className = null,
  attributes = {},
  optionalText = null,
) => {
  // TODO: implement

  const variableName = document.createElement(ele);
  if (className) {
    variableName.classList.add(className);
  }
  for (const [attr, value] of Object.entries(attributes)) {
    variableName.setAttribute(attr, value);
  }
  if (optionalText) {
    const text = document.createTextNode(optionalText);
    variableName.append(text);
  }
  return variableName;
};

measureUnit.addEventListener("change", () => {
  console.log(measureUnit.value);
  if (measureUnit.value === "round") {
    inputFields.innerHTML = "";

    // create an new element for radius input
    const radiusDiv = elementCreator("div","inputs", {"id": "unit-radius"})
    // const div = document.createElement("div");
    // div.classList.add("inputs");
    // div.setAttribute("id", "unit-radius");
    const innerRadiusDiv = elementCreator("div","input-wrapper", {})
    // const innerDiv = document.createElement("div");
    // innerDiv.classList.add("input-wrapper");
    const label = elementCreator("label",null,{},"Radius")
    // const label = document.createElement("label");
    // const newContent = document.createTextNode("Radius");
    const input = elementCreator("input", {"type": "text", "placeholder":"Enter radius"})
    // const inputField = document.createElement("input");
    // inputField.setAttribute("type", "text");
    // inputField.setAttribute("placeholder", "Enter radius");
    innerDiv.append(label);
    innerDiv.append(inputField);
    radiusDiv.append(innerDiv);
    inputFields.append(div);
  } else if (measureUnit.value === "l-shape") {
    inputFields.innerHTML = "";

    // creates height 2 input
    const height = document.createElement("div");
    height.classList.add("input-wrapper");
    height.setAttribute("id", "unit-height");
    const labelheight = document.createElement("label");
    const labelForheight = document.createTextNode("Height (ft):");
    labelheight.append(labelForheight);
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("placeholder", "Enter height");
    height.append(labelheight);
    height.append(inputElement);
    inputFields.append(height);

    // creates width 2 input
    const width = document.createElement("div");
    width.classList.add("input-wrapper");
    width.setAttribute("id", "unit-width");
    const labelwidth = document.createElement("label");
    const labelForwidth = document.createTextNode("Width (ft):");
    labelwidth.append(labelForwidth);
    const inputElement_2 = document.createElement("input");
    inputElement_2.setAttribute("type", "text");
    inputElement_2.setAttribute("placeholder", "Enter width");
    width.append(labelwidth);
    width.append(inputElement_2);
    inputFields.append(width);

    // creates height 2 input
    const height2 = document.createElement("div");
    height2.classList.add("input-wrapper");
    height2.setAttribute("id", "unit-height2");
    const labelheight2 = document.createElement("label");
    const labelForheight2 = document.createTextNode("Height (ft):");
    labelheight2.append(labelForheight2);
    const inputElement_3 = document.createElement("input");
    inputElement_3.setAttribute("type", "text");
    inputElement_3.setAttribute("placeholder", "Enter height 2");
    height2.append(labelheight2);
    height2.append(inputElement_3);
    inputFields.append(height2);

    // creates width 2 input
    const width2 = document.createElement("div");
    width2.classList.add("input-wrapper");
    width2.setAttribute("id", "unit-width2");
    const labelwidth2 = document.createElement("label");
    const labelForwidth2 = document.createTextNode("Width (ft):");
    labelwidth2.append(labelForwidth2);
    const inputElement2 = document.createElement("input");
    inputElement2.setAttribute("type", "text");
    inputElement2.setAttribute("placeholder", "Enter width 2");
    width2.append(labelwidth2);
    width2.append(inputElement2);
    inputFields.append(width2);
  } else if (measureUnit.value === "square") {
    inputFields.innerHTML = "";

    // creates height element
    const heightDiv = elementCreator("div", "input-wrapper", {
      id: "unit-height",
    });
    const heightLabel = elementCreator("label", null, {}, "Height (ft):");
    heightDiv.append(heightLabel);
    const heightInput = elementCreator("input", null, {
      type: "text",
      placeholder: "Enter height",
    });
    heightDiv.append(heightInput);
    inputFields.append(heightDiv);
    // creates width element
    const widthDiv = elementCreator("div", "input-wrapper", {
      id: "unit-width",
    });
    const myLabel = elementCreator("label", null, {"type": "text","placeholder":"Enter width"}, "Width (ft):");
    const inputElement_2 = elementCreator("input", null, settingAttributes);
    widthDiv.append(myLabel);
    widthDiv.append(inputElement_2);
    inputFields.append(widthDiv);
  }
});

calculateBtn.addEventListener("click", () => {
  // function that calculates the paint
  const measureValue = measureUnit.value;
  if (measureValue == "round") {
    const radius = document.getElementByID("unit-radius").value;
    if (radius > 0 && isNaN(radius))
      const area = PI * Math.pow(radius, 2);
      const gallons = area / 350;
      output.innerHTML = `You need ${gallons} gallons of paint`;
    }
    // TODO: implement error handler for invalid input
  } else if (measureValue == "l-shape") {
    
  } else if (measureValue == "square") {
    
  }
});

clearBtn.addEventListener("click", () => {
  // function that clears the inputs
  
});

const clearInputs = () => {
  // function that clears the inputs
};

// assume one gallon covers 350 sq ft
// area of L-Shape room (length1 * width2) + (length2 * width2)
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
//     const width2 = parseInt(prompt("What is the width of the first rectangle?"));
//     const length2 = parseInt(prompt("What is the length of the second rectangle?"));
//     const width2 = parseInt(prompt("What is the width of the second rectangle?"));
//     if (length1 > 0 && width2 > 0 && length2 > 0 && width2 > 0 && !isNaN(length1) && !isNaN(width2) && !isNaN(length2)) {
//       const area1 = length1 * width2;
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
