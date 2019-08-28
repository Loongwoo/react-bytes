"use strict";

module.exports.bytes2Int = function(arr, start) {
  if (!Array.isArray(arr) || arr.length < start + 4) {
    return 0;
  }
  return Number(
    (arr[start] << 24) |
      (arr[start + 1] << 16) |
      ((arr[start + 2] & 0xff) << 8) |
      (arr[start + 3] & 0xff)
  );
};

module.exports.bytes2Short = function(arr, start) {
  if (!Array.isArray(arr) || arr.length < start + 2) {
    return 0;
  }
  return Number(((arr[start] & 0xff) << 8) | (arr[start + 1] & 0xff));
};

module.exports.int2Bytes = function(i) {
  if (!Number.isInteger(i)) {
    return [];
  }
  return [(i >> 24) & 0xff, (i >> 16) & 0xff, (i >> 8) & 0xff, i & 0xff];
};

module.exports.short2Bytes = function(i) {
  if (!Number.isInteger(i)) {
    return [];
  }
  return [(i >> 8) & 0xff, i & 0xff];
};
