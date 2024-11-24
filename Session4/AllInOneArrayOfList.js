const values = [
    { original: false, toNumber: Number(false), toString: String(false), toBoolean: Boolean(false) },
    { original: true, toNumber: Number(true), toString: String(true), toBoolean: Boolean(true) },
    { original: 0, toNumber: Number(0), toString: String(0), toBoolean: Boolean(0) },
    { original: 1, toNumber: Number(1), toString: String(1), toBoolean: Boolean(1) },
    { original: "0", toNumber: Number("0"), toString: String("0"), toBoolean: Boolean("0") },
    { original: "000", toNumber: Number("000"), toString: String("000"), toBoolean: Boolean("000") },
    { original: "1", toNumber: Number("1"), toString: String("1"), toBoolean: Boolean("1") },
    { original: NaN, toNumber: Number(NaN), toString: String(NaN), toBoolean: Boolean(NaN) },
    { original: Infinity, toNumber: Number(Infinity), toString: String(Infinity), toBoolean: Boolean(Infinity) },
    { original: -Infinity, toNumber: Number(-Infinity), toString: String(-Infinity), toBoolean: Boolean(-Infinity) },
    { original: "", toNumber: Number(""), toString: String(""), toBoolean: Boolean("") },
    { original: "20", toNumber: Number("20"), toString: String("20"), toBoolean: Boolean("20") },
    { original: "twenty", toNumber: Number("twenty"), toString: String("twenty"), toBoolean: Boolean("twenty") },
    { original: [], toNumber: Number([]), toString: String([]), toBoolean: Boolean([]) },
    { original: [20], toNumber: Number([20]), toString: String([20]), toBoolean: Boolean([20]) },
    { original: [10, 20], toNumber: Number([10, 20]), toString: String([10, 20]), toBoolean: Boolean([10, 20]) },
    { original: ["twenty"], toNumber: Number(["twenty"]), toString: String(["twenty"]), toBoolean: Boolean(["twenty"]) },
    { original: ["ten", "twenty"], toNumber: Number(["ten", "twenty"]), toString: String(["ten", "twenty"]), toBoolean: Boolean(["ten", "twenty"]) },
    { original: function () {}, toNumber: Number(function () {}), toString: String(function () {}), toBoolean: Boolean(function () {}) },
    { original: {}, toNumber: Number({}), toString: String({}), toBoolean: Boolean({}) },
    { original: null, toNumber: Number(null), toString: String(null), toBoolean: Boolean(null) },
    { original: undefined, toNumber: Number(undefined), toString: String(undefined), toBoolean: Boolean(undefined) },
  ];
  
  // Print the conversion results in detail
  values.forEach((item) => {
    console.log(`Original: ${item.original}`);
    console.log(`To Number: ${item.toNumber}`);
    console.log(`To String: ${item.toString}`);
    console.log(`To Boolean: ${item.toBoolean}`);
    console.log("-----------------------");
  });