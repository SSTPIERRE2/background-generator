const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const sideOrCorner = document.querySelector(".sideOrCorner");
const angle = document.querySelector(".angle");
const toTop = document.querySelector(".toTop");
const toBottom = document.querySelector(".toBottom");
const toRight = document.querySelector(".toRight");
const toLeft = document.querySelector(".toLeft");
const degrees = document.querySelector(".degrees");

const changeBackground = () => {
  let direction = "to right";

  if (sideOrCorner.checked) {
    direction = 'to ' + getRadioValue(toTop) + getRadioValue(toBottom);
    if (toRight.checked || toLeft.checked) {
      direction += ' ' + getRadioValue(toLeft) + getRadioValue(toRight)
    }
  }

  if (angle.checked) {
    direction = degrees.value + 'deg';
  }

  body.style.background = 
    "linear-gradient("
    + direction
    + ", " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

  css.textContent = body.style.background + ";";
};

const getRadioValue = (element) => {
  return element.checked
    ? element.value
    : '';
};

const toggleDisableElement = (element) => {
  element.disabled = !element.disabled;
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);

sideOrCorner.addEventListener("input", () => {
  toggleDisableElement(toTop);
  toggleDisableElement(toBottom);
  toggleDisableElement(toRight);
  toggleDisableElement(toLeft);
});
angle.addEventListener("input", () => toggleDisableElement(degrees));

toTop.addEventListener("input", changeBackground);
toBottom.addEventListener("input", changeBackground);
toRight.addEventListener("input", changeBackground);
toLeft.addEventListener("input", changeBackground);
degrees.addEventListener("input", changeBackground);