const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("length");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const copyMsg = document.getElementById("copyMsg");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>?/|";

function createPassword() {
  const len = parseInt(lengthInput.value);
  let charset = "";
  let password = "";

  if (upper.checked) charset += upperCase;
  if (lower.checked) charset += lowerCase;
  if (number.checked) charset += numbers;
  if (symbol.checked) charset += symbols;

  if (!charset) {
    passwordBox.value = "Select at least one option!";
    return;
  }

  for (let i = 0; i < len; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  passwordBox.value = password;
  copyMsg.style.display = "none";
}

function copyPassword() {
  if (!passwordBox.value || passwordBox.value.includes("Select")) return;
  passwordBox.select();
  document.execCommand("copy");
  copyMsg.style.display = "inline";
  setTimeout(() => (copyMsg.style.display = "none"), 2000);
}
