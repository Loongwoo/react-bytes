'use strict';

module.exports.bytes2Short = bytes2Short;
module.exports.bytes2Int = bytes2Int;
module.exports.bytes2Long = bytes2Long;
module.exports.bytes2Float = bytes2Float;
module.exports.short2Bytes = short2Bytes;
module.exports.int2Bytes = int2Bytes;
module.exports.long2Bytes = long2Bytes;
module.exports.float2Bytes = float2Bytes;

function isarray(arr) {
  return Array.isArray(arr) || ArrayBuffer.isView(arr);
}

function bytes2Short(arr, start, littleEndian) {
  if (!isarray(arr) || arr.length < start + 2) {
    return 0;
  }
  const a = new ArrayBuffer(2);
  const b = new DataView(a);

  for (var i = 0; i < 2; i++) {
    b.setInt8(i, arr[start + i]);
  }
  return b.getUint16(0, littleEndian);
}

function bytes2Int(arr, start, littleEndian) {
  if (!isarray(arr) || arr.length < start + 4) {
    return 0;
  }
  const a = new ArrayBuffer(4);
  const b = new DataView(a);

  for (var i = 0; i < 4; i++) {
    b.setInt8(i, arr[start + i]);
  }
  return b.getUint32(0, littleEndian);
}

function bytes2Long(arr, start, littleEndian) {
  if (!isarray(arr) || arr.length < start + 8) {
    return 0;
  }
  const a = new ArrayBuffer(8);
  const b = new DataView(a);

  for (var i = 0; i < 8; i++) {
    b.setInt8(i, arr[start + i]);
  }
  return b.getBigInt64(0, littleEndian);
}

function bytes2Float(arr, start, littleEndian) {
  if (!isarray(arr) || arr.length < start + 4) {
    return 0;
  }
  const a = new ArrayBuffer(4);
  const b = new DataView(a);

  for (var i = 0; i < 4; i++) {
    b.setInt8(i, arr[start + i]);
  }
  return b.getFloat32(0, littleEndian);
}

// The length of the array returned is 2
function short2Bytes(i, littleEndian) {
  if (!Number.isInteger(i)) {
    return [];
  }
  const a = new ArrayBuffer(2);
  const b = new DataView(a);

  b.setInt16(0, i, littleEndian);

  return new Uint8Array(a);
}

// The length of the array returned is 4
function int2Bytes(i, littleEndian) {
  if (!Number.isInteger(i)) {
    return [];
  }
  const a = new ArrayBuffer(4);
  const b = new DataView(a);

  b.setInt32(0, i, littleEndian);

  return new Uint8Array(a);
}

// The length of the array returned is 8
function long2Bytes(i, littleEndian) {
  if (!Number.isInteger(i)) {
    return [];
  }
  const a = new ArrayBuffer(8);
  const b = new DataView(a);

  b.setBigInt64(0, BigInt(i), littleEndian);

  return new Uint8Array(a);
}

// The length of the array returned is 4
function float2Bytes(i, littleEndian) {
  const a = new ArrayBuffer(4);
  const b = new DataView(a);

  b.setFloat32(0, i, littleEndian);

  return new Uint8Array(a);
}
