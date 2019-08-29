const ReactBytes = require("./index");

if (ReactBytes.bytes2Short([1, 1], 0) === 257) {
  console.log("bytes2Short ok");
} else {
  console.log("bytes2Short fail");
}

if (ReactBytes.bytes2Int([1, 1, 1, 1], 0) === 16843009) {
  console.log("bytes2Int ok");
} else {
  console.log("bytes2Int fail");
}

if (ReactBytes.bytes2Long([1, 1, 1, 1, 1, 1], 0) === 1103823438081) {
  console.log("bytes2Long ok");
} else {
  console.log("bytes2Long fail");
}

if (ReactBytes.short2Bytes(257).join("") === "11") {
  console.log("short2Bytes ok");
} else {
  console.log("short2Bytes fail");
}

if (ReactBytes.int2Bytes(16843009).join("") === "1111") {
  console.log("int2Bytes ok");
} else {
  console.log("int2Bytes fail");
}

if (ReactBytes.long2Bytes(1103823438081).join("") === "111111") {
  console.log("long2Bytes ok");
} else {
  console.log("long2Bytes fail");
}
