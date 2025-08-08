'use strict';

module.exports.bytes2Short = bytes2Short;
module.exports.bytes2Int = bytes2Int;
module.exports.bytes2Long = bytes2Long;
module.exports.bytes2Float = bytes2Float;
module.exports.short2Bytes = short2Bytes;
module.exports.int2Bytes = int2Bytes;
module.exports.long2Bytes = long2Bytes;
module.exports.float2Bytes = float2Bytes;
module.exports.bytes2HexStr = bytes2HexStr;
module.exports.hexStr2Bytes = hexStr2Bytes;

var POW32 = Math.pow(2, 32);

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
  if (b.getBigInt64) {
    for (var i = 0; i < 8; i++) {
      b.setInt8(i, arr[start + i]);
    }
    return b.getBigInt64(0, littleEndian);
  }
  return bytes2Int(arr, 0) * POW32 + bytes2Int(arr, 4);
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
  const a = new ArrayBuffer(8);
  const b = new DataView(a);
  if (b.setBigInt64) {
    b.setBigInt64(0, BigInt(i), littleEndian);
  } else {
    b.setInt32(0, Math.floor(i / POW32), littleEndian);
    b.setInt32(4, i % POW32, littleEndian);
  }

  return new Uint8Array(a);
}

// The length of the array returned is 4
function float2Bytes(i, littleEndian) {
  const a = new ArrayBuffer(4);
  const b = new DataView(a);

  b.setFloat32(0, i, littleEndian);

  return new Uint8Array(a);
}

/**
 * 将字节数组转换为十六进制字符串
 */
function bytes2HexStr(arr, start = 0, end = arr.length, { joinChar = '', uppercase = false } = {}) {
  if (!isarray(arr) || arr.length < end) {
    return '';
  }
  const hex = Array.prototype.slice
    .call(arr, start, end)
    .map(a => a.toString(16).padStart(2, '0'))
    .join(joinChar);
  return uppercase ? hex.toUpperCase() : hex;
}

/**
 * 判断是否为有效的十六进制字符串
 */
function isHexString(str) {
  return !!str && /^[0-9a-fA-F]+$/.test(str);
}

/**
 * 将十六进制字符串转换为 Uint8Array
 * @param {string} str - 十六进制字符串
 * @param {Object} [options]
 * @param {string} [options.splitChar=''] - 分隔符，默认空字符串表示无分隔符
 * @param {boolean} [options.padEnable=false] - 是否启用奇数长度补零
 * @param {boolean} [options.padLeft=false] - 奇数长度补零时，是否左补零（否则右补零）
 */
function hexStr2Bytes(str, { splitChar = '', padEnable = false, padLeft = false } = {}) {
  if (!str) return new Uint8Array(0);

  if (typeof splitChar === 'string' && splitChar.length > 0) {
    const arr = str.split(splitChar).filter(s => isHexString(s));

    const len = arr.length;
    const buffer = new ArrayBuffer(len);
    const view = new DataView(buffer);

    for (let i = 0; i < len; i++) {
      view.setUint8(i, parseInt(arr[i], 16));
    }
    return new Uint8Array(buffer);
  }

  // 无分隔符时处理连续的16进制字符串
  if (!isHexString(str)) return new Uint8Array(0);

  let hexStr = str;
  if (hexStr.length % 2 !== 0 && padEnable) {
    if (padLeft) {
      hexStr = hexStr.padStart(hexStr.length + 1, '0');
    } else {
      hexStr = hexStr.padEnd(hexStr.length + 1, '0');
    }
  }

  const len = Math.floor(hexStr.length / 2);
  const buffer = new ArrayBuffer(len);
  const view = new DataView(buffer);

  for (let i = 0; i < len; i++) {
    const s = hexStr.slice(2 * i, 2 * i + 2);
    view.setUint8(i, parseInt(s, 16));
  }
  return new Uint8Array(buffer);
}
