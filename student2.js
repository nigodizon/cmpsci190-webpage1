companyname4 = "Dizon Books";
address4 = "962 Main St. Valencia, CA 91344";
phonenumber5 = "(555) 638-1234";

function getHeader() {
  var output;
  var now;

  now = new Date();

  output = "";
  output =
    output +
    "<div style='width:100%; background-color:lightblue; padding:20px;'>";
  output =
    output + "<div style='text-align:right; font-size:12px;'>" + now + "</div>";
  output =
    output +
    "<div style='text-align:center; font-size:36px; font-weight:bold;'>";
  output = output + companyname4;
  output = output + "</div>";
  output = output + "</div>";

  return output;
}

function getFooter(companyname, address, phonenumber) {
  var output;

  output = "";
  output =
    output +
    "<div style='width:100%; background-color:lightgray; text-align:center; padding:12px; margin-top:30px;'>";
  output = output + "<span style='font-size:12px;'>";
  output = output + companyname + " | " + address + " | " + phonenumber + " | ";
  output =
    output +
    navigator.appName +
    " | " +
    navigator.appVersion +
    " | " +
    navigator.platform;
  output = output + "</span>";
  output = output + "</div>";

  return output;
}

function makeMenu2(size) {
  var output;
  var count;

  output = "My Menu: ";
  count = 0;

  while (count < size) {
    output = output + "Button ";
    count = count + 1;
  }

  return output;
}

function makeMain9() {
  var output;

  output = "";
  output = output + "My Product:<br>";
  output = output + "Product Name: <br>";
  output = output + "Product ID: <br>";
  output = output + "Product Description: <br>";
  output = output + "Shopping Cart Link Bar <br>";
  output = output + "Product Image: <br>";

  return output;
}
