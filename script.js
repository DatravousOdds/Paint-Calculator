const output = document.getElementById("output");
const measureUnit = document.getElementById("measure-unit");
const resultsContainer = document.getElementById("result-container");
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
    const radius = document.getElementById("radius").value;
    if (parseInt(radius) > 0 && !isNaN(radius)) {
      const area = Math.pow(radius, 2);
      const gallons = area / 350;
      console.log(gallons);
      if (gallons <= 1) {
        output.textContent = "You need 1 gallon of paint";
      } else {
        output.textContent = `You need ${Math.ceil(gallons)} gallons of paint`;
        resultsContainer.style.backgroundColor = "";
      }
    } else {
      output.textContent = "Please enter a valid radius!";
      resultsContainer.style.backgroundColor = "red";
    }
  } else if (measureUnit.value === "l-shape") {
    const height = document.getElementById("height").value;
    const width = document.getElementById("width").value;
    const height2 = document.getElementById("height2").value;
    const width2 = document.getElementById("width2").value;
    if (
      parseInt(height) > 0 &&
      !isNaN(height) &&
      parseInt(width) > 0 &&
      !isNaN(width) &&
      parseInt(height2) > 0 &&
      !isNaN(height2) &&
      parseInt(width2) > 0 &&
      isNaN(width2)
    ) {
      const area = height * width + height2 * width2;
      const gallons = area / 350;
      console.log(gallons);
      if (gallons <= 1) {
        output.textContent = "You need 1 gallon of paint";
      } else {
        output.textContent = `You need ${Math.ceil(gallons)} gallons of paint`;
      }
      resultsContainer.style.backgroundColor = "";
    } else {
      output.textContent =
        "Please enter a valid height and width for both inputs!";
      resultsContainer.style.backgroundColor = "red";
    }
  } else if (measureUnit.value === "square") {
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    if (width > 0 && !isNaN(width) && height > 0 && !isNaN(height)) {
      const area = width * height;
      const gallons = area / 350;
      if (gallons <= 1) {
        output.textContent = "You need 1 gallons of paint";
      } else {
        output.textContent = `You need ${Math.ceil(gallons)} gallon of paint`;
      }
    }

    output.textContent = "Please enter a valid height and width!";
    resultsContainer.style.backgroundColor = "red";
  }
});

const clearInputs = () => {
  // function that clears the inputs
  if (measureUnit.value === "round") {
    document.getElementById("radius").value = "";
  } else if (measureUnit.value === "l-shape") {
    document.getElementById("height").value = "";
    document.getElementById("width").value = "";
    document.getElementById("height2").value = "";
    document.getElementById("width2").value = "";
  } else if (measureUnit.value === "square") {
    document.getElementById("height").value = "";
    document.getElementById("width").value = "";
  }
};

clearBtn.addEventListener("click", clearInputs);
