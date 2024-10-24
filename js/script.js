// # functions

function randomNum(min, max) {
  let num = Math.floor(Math.random() * (max - min + 1)) + min;

  return num;
}

// # data

const numBox = document.getElementById("num-box-container");
const button = document.getElementById("button");
// * computer nums
const generatedNums = [];
// * user nums
const userNumsList = [];

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
}, 30000);

// # user input numbers collection

let userResult = document.getElementById("user-result-box");

button.addEventListener("click", () => {
  for (let i = 0; i < generatedNums.length; i++) {
    let generatedNumInput = document.getElementById(`numBox${i}`);
    userNumsList.push(parseInt(generatedNumInput.value));

    console.log(userNumsList);
  }

  const matchingNums = userNumsList.filter((num) =>
    generatedNums.includes(num)
  );

  userResult.innerHTML = `
        <h3>Hai ricordato ${matchingNums.length} numeri correttamente!
        </h3>
        <p>I tuoi numeri corretti sono: ${matchingNums.join(`, `)}.</p>`;

  console.log(matchingNums, matchingNums.length);
});
