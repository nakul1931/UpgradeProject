const name = document.getElementById("name");
const number = document.getElementById("number");
const email = document.getElementById("email");
const showtable = document.getElementById("showtable");
const tbody = document.getElementById("tbody");

let deleted = 0;

function handleSubmit(event) {
  event.preventDefault();

  if (name.value.length < 3) {
    alert("Name must have atleast 3 characters");
    return false;
  }
  if (number.value.length != 10) {
    alert("Number must be of 10 length");
    return false;
  }
  if (
    !email.value.endsWith("@gmail.com") &&
    !email.value.endsWith("@hotmail.com")
  ) {
    alert("Invalid email");
    return false;
  }

  showData(name.value, number.value, email.value);
}

// showData("name", 1231231231, "asdf@gmail.com");
function showData(s1, s2, s3) {
  showtable.className = "showtable";
  const index = tbody.rows.length;
  const newRow = tbody.insertRow(index);
  newRow.id = "tr" + index;

  const btn2 = `<button type="button" class="btn2" onclick="handleDelete(${index})">Delete</button>`;
  const htmlContent = `<td>${s1}</td><td>${s2}</td><td>${s3}</td><td>${btn2}</td>`;
  newRow.innerHTML = htmlContent;
}

function handleDelete(index) {
  const rowToBeDel = document.getElementById("tr" + index);
  tbody.removeChild(rowToBeDel);

  if (tbody.rows.length === 0) {
    showtable.className = "hidetable";
  }
}
