
const currentYear = new Date().getFullYear();
let time = new Date(currentYear, 0, 1).getTime();
const yearHolder = document.querySelector("#yearHolder");
const wrapper = document.querySelector("#wrapper");


function appendContainer() {
  const monthContainer = document.createElement("div");
  monthContainer.className = "monthContainer";
  wrapper.appendChild(monthContainer);
}

function appendHeading(number) {
  let month;

  switch (new Date(time).getMonth()) {
  case 0:
    month = "January";
    break;
  case 1:
    month = "February";
    break;
  case 2:
    month = "March";
    break;
  case 3:
    month = "April";
    break;
  case 4:
    month = "May";
    break;
  case 5:
    month = "June";
    break;
  case 6:
    month = "July";
    break;
  case 7:
    month = "August";
    break;
  case 8:
    month = "September";
    break;
  case 9:
    month = "October";
    break;
  case 10:
    month = "November";
    break;
  case 11:
    month = "December";
    break;
  default:
    month = "Unknown";
  }

  const monthHeader = document.createElement("h2");
  monthHeader.className = "monthHeader";
  monthHeader.textContent = month;
  const monthContainers = document.querySelectorAll(".monthContainer");
  monthContainers[number].appendChild(monthHeader);
}

function appendUl(number) {
  const monthDaysContainer = document.createElement("ul");
  monthDaysContainer.className = "monthDaysContainer";
  monthDaysContainer.innerHTML = "<li class='dayNames'>Mo</li> <li class='dayNames'>Tu</li> <li class='dayNames'>We</li> <li class='dayNames'>Th</li> <li class='dayNames'>Fr</li> <li class='dayNames'>Sa</li> <li class='dayNames'>Su</li>";
  const monthContainers = document.querySelectorAll(".monthContainer");
  monthContainers[number].appendChild(monthDaysContainer);
}

function getLastDayOfMonth(year, month) {
  const innerDate = new Date(year, month + 1, 0);
  return innerDate.getDate();
}

function monthMilliseconds() {
  const innerDate = new Date(time);
  return (getLastDayOfMonth(innerDate.getFullYear(), innerDate.getMonth()) * 86400000);
}

function appendDates(number) {
  const monthDaysContainer = document.querySelectorAll(".monthDaysContainer")[number];
  const innerDate = new Date(time);
  let innerTime = time;
  const numberDaysInMonth = getLastDayOfMonth(innerDate.getFullYear(), innerDate.getMonth());

  if (innerDate.getDay() === 2) {
    monthDaysContainer.innerHTML += "<li> </li>";
  } else if (innerDate.getDay() === 3) {
    monthDaysContainer.innerHTML += "<li> </li> <li> </li>";
  } else if (innerDate.getDay() === 4) {
    monthDaysContainer.innerHTML += "<li> </li> <li> </li> <li> </li>";
  } else if (innerDate.getDay() === 5) {
    monthDaysContainer.innerHTML += "<li> </li> <li> </li> <li> </li> <li> </li>";
  } else if (innerDate.getDay() === 6) {
    monthDaysContainer.innerHTML += "<li> </li> <li> </li> <li> </li> <li> </li> <li> </li>";
  } else if (innerDate.getDay() === 0) {
    monthDaysContainer.innerHTML += "<li> </li> <li> </li> <li> </li> <li> </li> <li> </li> <li> </li>";
  }

  for (let i = 0; i < numberDaysInMonth; i += 1) {
    const newDate = new Date(innerTime);
    let li = `<li> ${newDate.getDate()} </li>`;

    if (newDate.getDay() === 0) {
      li = `<li style="color: red"> ${newDate.getDate()} </li>`;
      monthDaysContainer.innerHTML += li;
    } else {
      monthDaysContainer.innerHTML += li;
    }

    innerTime += 86400000;
  }
}

function createYear(year) {
  wrapper.innerHTML = "";

  if (year) {
    time = new Date(year, 0, 1).getTime();
  }

  yearHolder.textContent = new Date(time).getFullYear();

  for (let j = 0; j < 12; j += 1) {
    appendContainer();
    appendHeading(j);
    appendUl(j);
    appendDates(j);
    time += monthMilliseconds();
  }
}

createYear();


// input
const inputYear = document.querySelector(".inputContainer input");
inputYear.addEventListener("invalid", () => {
    inputYear.dataset.touched = true;
  })
inputYear.addEventListener("blur", () => {
  if (inputYear.value !== "") inputYear.dataset.touched = true;
});

document.querySelector("#submitYear").onclick = () => {
  inputValue = inputYear.value;
  if (inputValue.length == 4) {
    createYear(inputValue);
  }
};
