var a = "*";
var b = "";
for (i = 1; i <= 5; i++) {
  b = b + a;
  console.log(b)
}

// SQUARE

var a = "*";
var b = "";
for (i = 1; i < 5; i++) {
  b = b + a;
}
for (j = 1; j < 5; j++) {
  console.log(b);
}

var star = "*";
var space = " _ ";
var value = 4;
var emptyString = "";
for (let i = 0; i < value; i++) {
  for (let j = 0; j < value; j++) {
    emptyString = emptyString + star;
  }
  console.log(emptyString);
  emptyString = ""
}

// RECTANGLE

var a = "*";
var b = "";
for (let i = 0; i < 10; i++) {
  var b = b + a;
}
for (let j = 0; j < 4; j++) {
  console.log(b);
}

// LINE

var space = " _ ";
var c = 12;
var ans = "";
for (let i = 1; i <= c; i++) {
  if (i % 2 != 0) {
    ans = ans + space;
  } else {
    ans = ans + space;
  }
}
console.log(ans);

//END TO END LINE

var star = "*";
var space = " _ ";
var a = "";
for (let i = 1; i <= 15; i++) {
  if (i == 1 || i == 15) {
    a = a + star;
    if (i == 15) console.log(a);
  } else {
    a = a + space;
  }
}

//MID-POINT OF LINE

var star = "*";
var space = " _ ";
var emptyString = "";
var value = 6;
if (value % 2 == 0) {
  value++;
}
for (let i = 1; i <= value; i++) {
  if (i == Math.ceil(value / 2)) {
    emptyString += star;
  } else {
    emptyString += space;
  }
}
console.log(emptyString);

var star = "*";
var space = " _ ";
var emptyString = " ";
var value = 6;
if (value % 2 == 0) {
  value++;
}
function funame(value) {
  for (let i = 1; i <= value; i++) {
    if (i == Math.round(value / 2)) {
      emptyString += star;
    } else {
      emptyString += space;
    }
  }
  return emptyString;
}
funame(value);
console.log(emptyString);

//HOLLOW SQUARE MATRIX

var star = "*";
var space = " _ ";
var value = 12;
//var emptyString = "";
for (let i = 0; i <= value; i++) {
  emptyString = "";
  for (let j = 0; j <= value; j++) {
    if (i == 0 || i == value || j == 0 || j == value) {
      emptyString += star;
    } else {
      emptyString += space;
    }
  }
  console.log(emptyString);
}

//HOLLOW SQUARE MATRIX CROSS

var star = "*";
var space = " _ ";
var value = 12;
var emptyString = "";
for (let i = 0; i <= value; i++) {
  emptyString = "";
  for (let j = 0; j <= value; j++) {
    if (i == 0 || j == 0 || i == value || j == value || i == j) {
      emptyString += star;
    } else {
      emptyString += space;
    }
  }
  console.log(emptyString);
}

//X - CROSS

var star = " * ";
var space = " _ ";
var value = 11;
var emptyString = "";
for (let i = 1; i <= value; i++) {
  for (let j = 1; j <= value; j++) {
    if (i == j || j == value - i + 1) {
      emptyString = emptyString + star;
    } else {
      emptyString = emptyString + space;
    }
  }
  console.log(emptyString);
  emptyString = "";
}

// HOLLOW SQUARE X - CROSS

var star = " * ";
var space = " _ ";
var value = 11;
var emptyString = "";
for (let i = 1; i <= value; i++) {
  for (let j = 1; j <= value; j++) {
    if (
      i == 1 ||
      j == 1 ||
      i == value ||
      j == value ||
      i == j ||
      j == value - i + 1
    ) {
      emptyString = emptyString + star;
    } else {
      emptyString = emptyString + space;
    }
  }
  console.log(emptyString)  ;
  emptyString = "";
}

// RIGHT TRIANGLE

var star = " * ";
var space = " _ ";
var value = 11;
var emptyString = "";
for (let i = 1; i <= value; i++) {
  for (let j = 1; j <= value; j++) {
    if (i >= j) {
      emptyString = emptyString + star;
    } else {
      emptyString = emptyString + space;
    }
  }
  console.log(emptyString);
  emptyString = "";
}

// LEFT TRIANGLE

var star = " * ";
var space = " _ ";
var value = 11;
var emptyString = "";
for (let i = 1; i <= value; i++) {
  for (let j = 1; j <= value; j++) {
    if (i <= j) {
      emptyString = emptyString + star;
    } else {
      emptyString = emptyString + space;
    }
  }
  console.log(emptyString);
  emptyString = "";
}

// plus

var star = " * ";
var space = " _ ";
var value = 10;
var emptyString = "";
if (value % 2 == 0) {
  value++;
}
for (let i = 1; i <= value; i++) {
  for (let j = 1; j <= value; j++) {
    if (i == parseInt(value / 2) + 1 || j == parseInt(value / 2) + 1) {
      emptyString += star;
    } else {
      emptyString += space;
    }
  }
  console.log(emptyString);
  emptyString = "";
}

// HOLLOW RIGHT TRIANGLE

var star = " * ";
var space = " _ ";
var value = 10;
var emptyString = "";
for (let i = 1; i <= value; i++) {
  for (let j = 1; j <= value; j++) {
    if (i == j || j == 1 || i == value) {
      emptyString += star;
    } else {
      emptyString += space;
    }
  }
  console.log(emptyString);
  emptyString = "";
}

// HOLLOW LEFT TRAINGLE

var star = " * ";
var space = " _ ";
var value = 5;
var emptyString = "";
for (let i = 1; i <= value; i++){
  for (let j = 1; j <= value; j++){
    if (i == value || j == value || j == value - i + 1){
      emptyString += star
    }else {
      emptyString += space
    }
  }
  console.log(emptyString);
  emptyString = ""
}

// CENTER POINT

var star = " * ";
var space = " _ ";
var value = 6;
var emptyString = "";
if (value % 2 == 0) {
  value++;
}
for (let i = 1; i <= value; i++) {
  for (let j = 1; j <= value; j++) {
    if (i == Math.ceil(value / 2) && j == Math.ceil(value / 2)) {
      emptyString += star;
    } else {
      emptyString += space;
    }
  }
  console.log(emptyString);
  emptyString = "";
}

//TRAINGLE

var star = " * ";
var space = " _ ";
var value = 5;
var emptyString = "";

for (let i = 1; i <= value; i++) {
  for (let j = 1; j < value * 2; j++) {
    if (
      i == value - j + 1 ||
      i == value ||
      i == value + j - (value + value - 1)
    ) {
      emptyString += star;
    } else {
      emptyString += space;
    }
  }
  console.log(emptyString);
  emptyString = "";
}

var len = 8;
var height = 5;
for (let i = 0; i <= height; i++) {
  var val = "_";
  for (let j = 0; j <= len; j++) {
    val =
      (len / 2 == j && i == 0) ||
      len / 2 == j - i ||
      len / 2 == j + i ||
      i == height
        ? val.concat("*")
        : val.concat("_");
  }
  console.log(val);
  console.log("\n");
}

//PRINT GIVEN NUMBER OF PATTERNS

var symbols = [" + ", " - ", " * "];
var emptyString = "";
//var value = 1;
function getSymbol(symbolIndex) {
  if (symbolIndex == 1) {
    return symbols[0];
  } else if (symbolIndex == 2) {
    return symbols[1];
  } else if (symbolIndex == 3) {
    return symbols[2];
  } else {
    throw Error("Invalid value ");
  }
}

function printPattern(times, value) {
  emptyString = "";
  for (let loop = 1; loop <= times; loop++) {
    emptyString += getSymbol(value);
  }
  //console.log(value)
  return emptyString;
}
console.log(printPattern(12, 2));
