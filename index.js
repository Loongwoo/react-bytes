'use strict';

module.exports.bytes2Short = bytes2Short;
module.exports.bytes2Int = bytes2Int;
module.exports.bytes2Long = bytes2Long;
module.exports.short2Bytes = short2Bytes;
module.exports.int2Bytes = int2Bytes;
module.exports.long2Bytes = long2Bytes;

var POW32 = Math.pow(2, 32);

function isarray(arr) {
  return Array.isArray(arr) || ArrayBuffer.isView(arr);
}

function bytes2Short(arr, start) {
  if (!isarray(arr) || arr.length < start + 2) {
    return 0;
  }
  return Number(((arr[start] & 0xff) << 8) | (arr[start + 1] & 0xff));
}

function bytes2Int(arr, start) {
  if (!isarray(arr) || arr.length < start + 4) {
    return 0;
  }
  return Number(
    ((arr[start] & 0xff) << 24) |
      ((arr[start + 1] & 0xff) << 16) |
      ((arr[start + 2] & 0xff) << 8) |
      (arr[start + 3] & 0xff)
  );
}

function bytes2Long(arr, start) {
  if (!isarray(arr) || arr.length < start + 6) {
    return 0;
  }
  return bytes2Short(arr, 0) * POW32 + bytes2Int(arr, 2);
}

// The length of the array returned is 2
function short2Bytes(i) {
  if (!Number.isInteger(i)) {
    return [];
  }
  return [(i >> 8) & 0xff, i & 0xff];
}

// The length of the array returned is 4
function int2Bytes(i) {
  if (!Number.isInteger(i)) {
    return [];
  }
  return [(i >> 24) & 0xff, (i >> 16) & 0xff, (i >> 8) & 0xff, i & 0xff];
}

// The length of the array returned is 6
function long2Bytes(i) {
  if (!Number.isInteger(i)) {
    return [];
  }
  var array = short2Bytes(Math.floor(i / POW32));
  return array.concat(int2Bytes(i % POW32));
}
