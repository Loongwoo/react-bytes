const ReactBytes = require('./index');

if (ReactBytes.bytes2Short([1, 2], 0) === 258) {
  console.log('bytes2Short ok');
} else {
  console.log('bytes2Short fail');
}

if (ReactBytes.bytes2Int([1, 2, 3, 4], 0) === 16909060) {
  console.log('bytes2Int ok');
} else {
  console.log('bytes2Int fail');
}

if (ReactBytes.bytes2Long([1, 2, 3, 4, 5, 6, 7, 8], 0) === 72623859790382856n) {
  console.log('bytes2Long ok');
} else {
  console.log('bytes2Long fail');
}

if (ReactBytes.bytes2Float([1, 2, 3, 4], 0) === 2.387939260590663e-38) {
  console.log('bytes2Float ok');
} else {
  console.log('bytes2Float fail');
}

if (ReactBytes.short2Bytes(258).join('') === '12') {
  console.log('short2Bytes ok');
} else {
  console.log('short2Bytes fail');
}

if (ReactBytes.int2Bytes(16909060).join('') === '1234') {
  console.log('int2Bytes ok');
} else {
  console.log('int2Bytes fail');
}

if (ReactBytes.long2Bytes(72623859790382856n).join('') === '12345678') {
  console.log('long2Bytes ok');
} else {
  console.log('long2Bytes fail');
}

if (ReactBytes.float2Bytes(2.387939260590663e-38).join('') === '1234') {
  console.log('float2Bytes ok');
} else {
  console.log('float2Bytes fail');
}
