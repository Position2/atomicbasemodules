function openForm() {
  document.getElementById("POP").style.display = "block";
}
function closeForm() {
  document.getElementById("POP").style.display = "none";
}
const copy = document.getElementById('alttext');
function copyToClipboard() {
  var copyText = document.getElementById("content");
  copyText.select();
  copyText.setSelectionRange(0, 999999999);
  navigator.clipboard.writeText(copyText.value);
  alttext.style.background = "#ffffff";
  alttext.style.color = "#d8342f";
  document.getElementById("alttext").innerHTML = "Copied";
}