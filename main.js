function hide() {
    document.getElementById("footer").style.display = "none";
}
function toggledrop() {
    var x = document.getElementById("dropdown");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }