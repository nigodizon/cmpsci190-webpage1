companyname4 = "Dizon Books";
address4 = "962 Main St. Valencia, CA 91344";
phonenumber5 = "(555) 638-1234";

function getHeader() {
  var output;

  output = "";
  output =
    output +
    "<div style='width:100%; background-color:lightblue; text-align:center; padding:20px;'>";
  output =
    output +
    "<span style='font-size:36px; font-weight:bold;'>" +
    companyname4 +
    "</span>";
  output = output + "</div>";

  return output;
}

function getFooter(companyname, address, phonenumber) {
  var output;

  output = "";
  output =
    output +
    "<div style='width:100%; background-color:lightgray; text-align:center; padding:12px; margin-top:30px;'>";
  output = output + "<span style='font-size:14px;'>";
  output = output + companyname + " | " + address + " | " + phonenumber;
  output = output + "</span>";
  output = output + "</div>";

  return output;
}
