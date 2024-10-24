// # functions

function randomNum(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
}

// # data

const generatedNums = [];

const numBox = document.getElementById("num-box-container");
const button = document.getElementById("button");

// # nums generation

for (let i = 0; generatedNums.length < 5; i++) {
  let newNum = randomNum(1, 99);
  generatedNums.push(newNum);

  numBox.innerHTML += `<div>
    ${newNum}
  </div>`;
}

console.log(generatedNums);

// # game timer

const timer = setTimeout(() => {
  numBox.innerHTML = "";

  for (let i = 0; i < generatedNums.length; i++) {
    numBox.innerHTML += `<div>
      <input type="text" id="numBox${i}">
    </div>`;
  }
}, 3000);

// # user input numbers

const userNumsList = [];

button.addEventListener("click", () => {
  for (let i = 0; i < generatedNums.length; i++) {
    let generatedNumInput = document.getElementById(`numBox${i}`);
    userNumsList.push(parseInt(generatedNumInput.value));

    console.log(userNumsList);
  }

  const matchingNums = userNumsList.filter((num) =>
    generatedNums.includes(num)
  );

  console.log(matchingNums);
});
