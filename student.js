var thename = "Isaiah Dizon";
var info2 = "cs190 JavaScript Lab 2";
var id2 = "865";
var special = 1;

function displayinfo375() {
  alert(thename + " " + info2 + " " + id2);
}

function confirmlink276() {
  return confirm("Are you sure you want to leave this page?");
}

function displayspecial617() {
  if (special == 1) {
    alert("The current special is #1");
  }

  if (special == 2) {
    alert("The current speical is #2");
  }

  if (special == 3) {
    alert("The current special is #3");
  }

  special = special + 1;

  if (special > 3) {
    special = 1;
  }
}
