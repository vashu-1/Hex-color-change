function changeColor() {
  var color_code = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  var hexcode = "";
  for (var i = 0; i < 6; i++) {
    const random_code = Math.floor(Math.random() * color_code.length);
    hexcode += color_code[random_code];
  }
  document.getElementById("hex-Code").innerHTML = hexcode;

  document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
}
