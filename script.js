const subtotals = new Array(23).fill(0);
const itemNames = [
  "Chamach",
  "Plate-small",
  "Plate-medium",
  "Steel-glass",
  "Choras plate S",
  "Choras plate M",
  "Paraat",
  "Jug",
  "Glass",
  "Service chamach",
  "Bowl",
  "Dish",
  "Kursi",
  "Chadar",
  "Kanaat",
  "Hamaam",
  "Tub",
  "Carpet",
  "Table",
  "Round table",
  "Stage table",
  "Tent",
  "Kupa",
];

const itemRates = [
   8,
  10,
  10,
  15,
  15,
  15,
  20,
  25,
  25,
  25,
  30,
  30,
  50,
 150,
 200,
 200,
 200,
 200,
 200,
 250,
 400,
 500,
12000,
];

function updateSubtotal(input, rate, index) {
  let qty = parseInt(input.value) || 0;
  let subtotal = qty * rate;
  subtotals[index] = subtotal;
  input.parentElement.nextElementSibling.textContent = subtotal;
}

function makeBill() {
  const tbody = document.querySelector("#billTable tbody");
  tbody.innerHTML = "";
  let grandTotal = 0;
  subtotals.forEach((sub, i) => {
    if (sub > 0) {
      let qty = document.querySelectorAll(".item-row input")[i].value;
      let row = `<tr>
                        <td style="font-weight: 600;">${itemNames[i]}</td>
                        <td>${qty}</td>
                        <td style="font-weight: bold;">${sub}</td>
                      </tr>`;
      tbody.innerHTML += row;
      grandTotal += sub;
    }
  });
  document.getElementById("grandTotal").textContent =
    "Grand Total: " + grandTotal;
  document.getElementById("billPopup").style.display = "flex";
}

function closeBill() {
  document.getElementById("billPopup").style.display = "none";
}

function clearAll() {
  document
    .querySelectorAll(".item-row input")
    .forEach((input) => (input.value = 0));
  document
    .querySelectorAll(".subtotal")
    .forEach((sub) => (sub.textContent = 0));
  for (let i = 0; i < subtotals.length; i++) subtotals[i] = 0;
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("Service Worker Registered"));
}
