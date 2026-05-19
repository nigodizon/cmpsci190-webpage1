companyname4 = "Dizon Books";
address4 = "962 Main St. Valencia, CA 91344";
phonenumber5 = "(555) 638-1234";

imgurl739 = "https://www.college1.com/images/";
cardimgurl550 = "https://www.college1.com/images/cards/gbCard";
cardnum580 = -1;

var product1 = {
  name: "The Great Gatsby",
  id: "4426",
  desc: "A classic American novel by F. Scott Fitzgerald",
};
var product2 = {
  name: "To Kill a Mockingbird",
  id: "88123",
  desc: "A powerful novel about justice, childhood, and morality",
};
var product3 = {
  name: "1984",
  id: "2400X",
  desc: "A dystopian novel about surveillance and control",
};

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

function makeMenu2() {
  var output;

  output = "";
  output = output + "Menu: ";
  output =
    output + "<button onclick='execButton382(product1)'>Product #1</button> ";
  output =
    output + "<button onclick='execButton382(product2)'>Product #2</button> ";
  output =
    output + "<button onclick='execButton382(product3)'>Product #3</button> ";
  output = output + "<button onclick='dealCards649()'>Deal Cards</button> ";
  output = output + "<button onclick='hitCard896()'>Hit Card</button>";

  return output;
}

function makeLinkBar432() {
  var output;

  output = "";
  output =
    output +
    "<a href='https://www.paypal.com' target='_blank'>Add To Cart</a> | ";
  output =
    output +
    "<a href='https://www.paypal.com' target='_blank'>View Cart</a> | ";
  output =
    output + "<a href='https://www.paypal.com' target='_blank'>Checkout</a>";

  return output;
}

function makeMain9(myproduct) {
  var output;
  var produrl;

  produrl = imgurl739 + myproduct.id + ".gif";

  output = "";
  output = output + "<div style='padding:20px; text-align:center;'>";
  output = output + "<h2>My Product</h2>";
  output = output + "Product Name: " + myproduct.name + "<br>";
  output = output + "Product ID: " + myproduct.id + "<br>";
  output = output + "Product Description: " + myproduct.desc + "<br><br>";
  output = output + makeLinkBar432() + "<br><br>";
  output = output + "Product Image: <br>";
  output = output + "<img src='" + produrl + "' alt='" + myproduct.name + "'>";
  output = output + "</div>";

  return output;
}

function execButton382(myproduct) {
  cardnum580 = -1;
  document.getElementById("main895").innerHTML = makeMain9(myproduct);
}

function dealCards649() {
  var output;
  var cardurl;

  cardnum580 = 2;

  output = "";
  output = output + "Black Jack Game:<br><br>";

  cardurl = cardimgurl550 + "0.gif";
  output = output + "<img id='card0' src='" + cardurl + "'> ";

  cardurl = cardimgurl550 + "1.gif";
  output = output + "<img id='card1' src='" + cardurl + "'> ";

  cardurl = cardimgurl550 + "52.gif";
  output = output + "<img id='card2' src='" + cardurl + "'> ";

  cardurl = cardimgurl550 + "52.gif";
  output = output + "<img id='card3' src='" + cardurl + "'> ";

  cardurl = cardimgurl550 + "52.gif";
  output = output + "<img id='card4' src='" + cardurl + "'> ";

  document.getElementById("main895").innerHTML = output;
}

function hitCard896() {
  var cardurl;
  var cardid;

  if (cardnum580 == -1) {
    alert("Deal cards first");
    return;
  }

  if (cardnum580 > 4) {
    alert("No more cards");
    return;
  }

  cardurl = cardimgurl550 + cardnum580 + ".gif";
  cardid = "card" + cardnum580;

  document.getElementById(cardid).src = cardurl;

  cardnum580 = cardnum580 + 1;
}
