const length = document.querySelector("#length");
const passLengthResult = document.querySelector("#length-result");
const includeNumbers = document.querySelector("#numbers");
const includeSymbols = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generate");
const result = document.querySelector("#result");
 const copyBtn = document.querySelector(".copy-result"); const alert = document.querySelector(".alert");

const lowerCase = "abcdefghijklmnopqrstuvwxyz"; const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; const numbers = "0123456789"; const symbols = "!@#$%^&*()_+-=";

const allChars = lowerCase + upperCase + numbers + symbols;

function generatePassword() { let password = ""; let chars = allChars;

if (!includeNumbers.checked) { chars = chars.replace(numbers, ""); }

if (!includeSymbols.checked) { chars = chars.replace(symbols, ""); }

for (let i = 0; i < length.value; i++) { password += chars.charAt(Math.floor(Math.random() * chars.length)); }

result.value = password; }

function copyToClipboard() { result.select(); document.execCommand("copy"); alert.textContent = "Password copied to clipboard!"; alert.style.display = "block"; setTimeout(() => { alert.style.display = "none"; }, 3000); }

length.addEventListener("input", () => { passLengthResult.textContent = length.value; });

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", copyToClipboard);

document.addEventListener("DOMContentLoaded", () => { generatePassword(); });

