var thename = "Isaiah Dizon";
var info2 = "cs190 Javascript Lab 2";
var id2 = "865";
var special = 1;
var thetype = "direct";

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
    alert("The current special is #2");
  }

  if (special == 3) {
    alert("The current special is #3");
  }

  special = special + 1;

  if (special > 3) {
    special = 1;
  }
}

function changetype607() {
  var newtype;

  if (thetype == "direct") {
    newtype = "advertising";
  }

  if (thetype == "advertising") {
    newtype = "subscription";
  }

  if (thetype == "subscription") {
    newtype = "direct";
  }

  thetype = newtype;
  alert("Customer type changed to " + thetype);
}

function displaytype714() {
  if (thetype == "direct") {
    alert("Buy Now! From this web page! My children need new shoes!");
  }

  if (thetype == "advertising") {
    alert("Support our advertisers! Click on an ad, so I can make money!");
  }

  if (thetype == "subscription") {
    alert("Renew your subscription today! My children need medicine!");
  }
}

function getName3590() {
  var thename;
  var message;

  thename = prompt("Enter your name");

  message = "Your Name Is: " + thename + " ";

  if (thename.length < 5) {
    message = message + "You have a short name";
  }

  if (thename.length >= 5) {
    if (thename.length <= 10) {
      message = message + "You have a medium name";
    }
  }

  if (thename.length > 10) {
    message = message + "You have a long name";
  }

  document.getElementById("name359").innerHTML = message;
}

function getAge2590() {
  var theage;
  var message;

  theage = prompt("Enter your age");

  message = "Your Age Is: " + theage + " ";

  if (theage < 18) {
    message = message + "You are a kid";
  }

  if (theage >= 18) {
    if (theage <= 50) {
      message = message + "You are an adult";
    }
  }

  if (theage > 50) {
    message = message + "You are a senior citizen";
  }

  document.getElementById("age259").innerHTML = message;
}
