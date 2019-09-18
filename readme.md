# js-bytes

Exchange int and short with bytes array

## Installation

```
$ npm install js-bytes
```

## API

### bytes2Short(arr, start)

transform bytes array to short

```js
bytes2Short([1, 1], 0).should.equal(257);
```

### bytes2Int(arr, start)

transform bytes array to int

```js
bytes2Int([1, 1, 1, 1], 0).should.equal(16843009);
```

### bytes2Long(arr, start)

transform bytes array to long

```js
bytes2Long([1, 1, 1, 1, 1, 1], 0).should.equal(1103823438081);
```

### short2Bytes(i)

transform short to bytes

```js
int2Bytes(257).should.equal([1, 1]);
```

### int2Bytes(i)

transform int to bytes

```js
int2Bytes(16843009).should.equal([1, 1, 1, 1]);
```

### long2Bytes(i)

transform long to bytes

```js
long2Bytes(1103823438081).should.equal([1, 1, 1, 1, 1, 1]);
```
