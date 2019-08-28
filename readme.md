# react-bytes

Exchange int and short with bytes array

## Installation

```
$ npm install react-bytes
```

## API

### bytes2Int(arr, start)

transform bytes array to int

```js
bytes2Int([1, 1, 1, 1], 0).should.equal(66048);
```

### bytes2Short(arr, start)

transform bytes array to short

```js
bytes2Short([1, 1], 0).should.equal(257);
```

### int2Bytes(i)

transform int to bytes

```js
int2Bytes(66048).should.equal([1, 1, 1, 1]);
```

### short2Bytes(i)

transform short to bytes

```js
int2Bytes(257).should.equal([1, 1]);
```
