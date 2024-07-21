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
    const radiusDiv = elementCreator("div", "inputs", { id: "unit-radius" });
    const innerRadiusDiv = elementCreator("div", "input-wrapper", {});
    const label = elementCreator("label", null, {}, "Radius");
    const input = elementCreator("input", null, {
      type: "text",
      placeholder: "Enter radius",
      id: "radius",
    });

    innerRadiusDiv.append(label);
    innerRadiusDiv.append(input);
    radiusDiv.append(innerRadiusDiv);
    inputFields.append(radiusDiv);
  } else if (measureUnit.value === "l-shape") {
    inputFields.innerHTML = "";

    // creates the first height input
    const height = elementCreator("div", "input-wrapper", {
      id: "unit-height",
    });
    const labelHeight = elementCreator("label", null, {}, "Height (ft):");
    const inputHeight = elementCreator("input", null, {
      type: "text",
      placeholder: "Enter height",
      id: "height",
    });

    height.append(labelHeight);
    height.append(inputHeight);
    inputFields.append(height);

    // creates the first width input
    const width = elementCreator("div", "input-wrapper", { id: "unit-width" });
    const labelWidth = elementCreator("label", null, {}, "Width (ft):");
    const inputWidth = elementCreator("input", null, {
      type: "text",
      placeholder: "Enter width",
      id: "width",
    });

    width.append(labelWidth);
    width.append(inputWidth);
    inputFields.append(width);

    // creates second height input
    const height2 = elementCreator("div", "input-wrapper", {
      id: "unit-height2",
    });

    const labelHeight2 = elementCreator("label", null, {}, "Height 2 (ft):");

    const inputHeight2 = elementCreator("input", null, {
      type: "text",
      placeholder: "Enter height 2",
      id: "height2",
    });

    height2.append(labelHeight2);
    height2.append(inputHeight2);
    inputFields.append(height2);

    // creates second width input
    const width2 = elementCreator("div", "input-wrapper", {
      id: "unit-width2",
    });
    const labelwidth2 = elementCreator("label", null, {}, "Width 2 (ft):");
    const inputWidth2 = elementCreator("input", null, {
      type: "text",
      placeholder: "Enter width 2",
      id: "width2",
    });

    width2.append(labelwidth2);
    width2.append(inputWidth2);
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
      id: "height",
    });
    heightDiv.append(heightInput);
    inputFields.append(heightDiv);

    // creates width element
    const widthDiv = elementCreator("div", "input-wrapper", {
      id: "unit-width",
    });
    const myLabel = elementCreator(
      "label",
      null,
      { type: "text", placeholder: "Enter width" },
      "Width (ft):",
    );
    const widthInput = elementCreator("input", null, {
      type: "text",
      placeholder: "Enter width",
      id: "width",
    });
    widthDiv.append(myLabel);
    widthDiv.append(widthInput);
    inputFields.append(widthDiv);
  }
});

calculateBtn.addEventListener("click", () => {
  // function that calculates the paint
  if (measureUnit.value === "round") {
    console.log(output.textContent);
    const radius = document.getElementById("radius").value;
    if (parseInt(radius) > 0 && !isNaN(radius)) {
      const area = Math.pow(radius, 2);
      const gallons = area / 350;
      console.log(gallons);
      if (gallons > 0) {
        output.innerHTML = `You need ${Math.ceil(gallons)} gallons of paint`;
      } else {
        output.innerHTML = `You need ${Math.ceil(gallons)} gallon of paint`;
      }
    }
  } else if (measureUnit.value === "l-shape") {
    console.log(output.textContent);
    const height = document.getElementById("height").value;
    const width = document.getElementById("width").value;
    const height2 = document.getElementById("height2").value;
    const width2 = document.getElementById("width2").value;
  }
  // const measureValue = measureUnit.value;
  // if (measureValue == "round") {
  //   const radius = document.getElementByID("unit-radius").value;
  //   if (radius > 0 && isNaN(radius)) {
  //     const area = PI * Math.pow(radius, 2);
  //     const gallons = area / 350;
  //     output.innerHTML = `You need ${gallons} gallons of paint`;
  //   }
  //   // TODO: implement error handler for invalid input
  // }
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
