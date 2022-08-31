# react-bytes

Exchange int and short with bytes array

## Installation

```
$ npm instal react-bytes
```

## API

### bytes2Short(arr, start)

transform bytes array to short

```js
bytes2Short([1, 2], 0).should.equal(258);
```

### bytes2Int(arr, start)

transform bytes array to int

```js
bytes2Int([1, 2, 3, 4], 0).should.equal(16909060);
```

### bytes2Long(arr, start)

transform bytes array to long

```js
bytes2Long([1, 2, 3, 4, 5, 6, 7, 8], 0).should.equal(72623859790382856n);
```

### bytes2Float(arr, start)

transform bytes array to float

```js
bytes2Float([1, 2, 3, 4], 0).should.equal(2.387939260590663e-38);
```

### short2Bytes(i)

transform short to bytes

```js
int2Bytes(258).should.equal([1, 2]);
```

### int2Bytes(i)

transform int to bytes

```js
int2Bytes(16909060).should.equal([1, 2, 3, 4]);
```

### long2Bytes(i)

transform long to bytes

```js
long2Bytes(72623859790382856n).should.equal([1, 2, 3, 4, 5, 6, 7, 8]);
```

### float2Bytes(i)

transform float to bytes

```js
float2Bytes(2.387939260590663e-38).should.equal([1, 2, 3, 4]);
```
