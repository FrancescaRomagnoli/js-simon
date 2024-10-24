// # functions

function randomNum(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
}

// # data

const generatedNums = [];

const numBox = document.getElementById("num-box");

for (let i = 0; generatedNums.length < 5; i++) {
  let newNum = randomNum(1, 99);
  generatedNums.push(newNum);

  numBox.innerHTML += `<div>
    ${newNum}
  </div>`;
}

console.log(generatedNums);

const timer = setInterval(() => {
  numBox.innerHTML = "";

  for (let i = 0; i < generatedNums.length; i++) {
    numBox.innerHTML += `<div>
      <input type="text">
    </div>`;
  }
  clearInterval(timer);
}, 3000);
