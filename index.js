const cap = document.querySelector("#cap");
const fw = document.querySelector("#fw");
const drip = document.querySelector("#drip");
const spro = document.querySelector("#spro");
const cano = document.querySelector("#cano");
let capnum = document.createElement("p");
let fwnum = document.createElement("p");
let dripnum = document.createElement("p");
let spronum = document.createElement("p");
let canonum = document.createElement("p");
let capCounter = 0;
let fwCounter = 0;
let dripCounter = 0;
let sproCounter = 0;
let canoCounter = 0;

cap.addEventListener("click", () => {
  let newnum = (capCounter += 1);
  capnum.textContent = newnum;
  cap.appendChild(capnum);

  if (newnum > 3) {
    cap.style.backgroundColor = "yellow";
  }

  if (newnum > 7) {
    cap.style.backgroundColor = "red";
  }
  if (newnum > 10) {
    alert("spro machine broke!");
  }
});

fw.addEventListener("click", () => {
  let newnum2 = (fwCounter += 1);
  fwnum.textContent = newnum2;
  fw.appendChild(fwnum);

  if (newnum2 > 3) {
    fw.style.backgroundColor = "yellow";
  }

  if (newnum2 > 7) {
    fw.style.backgroundColor = "red";
  }
  if (newnum2 > 10) {
    alert("spro machine broke!");
  }
});

drip.addEventListener("click", () => {
  let newnum3 = (dripCounter += 1);
  dripnum.textContent = newnum3;
  drip.appendChild(dripnum);

  if (newnum3 > 3) {
    drip.style.backgroundColor = "yellow";
  }
  if (newnum3 > 7) {
    drip.style.backgroundColor = "red";
  }
  if (newnum3 > 10) {
    alert("Out of drip!");
  }
});

spro.addEventListener("click", () => {
  let newnum4 = (sproCounter += 1);
  spronum.textContent = newnum4;
  spro.appendChild(spronum);

  if (newnum4 > 3) {
    spro.style.backgroundColor = "yellow";
  }

  if (newnum4 > 7) {
    spro.style.backgroundColor = "red";
  }
  if (newnum4 > 10) {
    alert("spro machine broke!");
  }
});

cano.addEventListener("click", () => {
  let newnum5 = (canoCounter += 1);
  canonum.textContent = newnum5;
  cano.appendChild(canonum);

  if (newnum5 > 3) {
    cano.style.backgroundColor = "yellow";
  }
  if (newnum5 > 7) {
    cano.style.backgroundColor = "red";
  }
  if (newnum5 > 10) {
    alert("spro machine broke!");
  }
});
