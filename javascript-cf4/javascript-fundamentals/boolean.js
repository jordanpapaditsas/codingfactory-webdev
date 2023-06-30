let b1 = true;
let b2 = Boolean(1);        // true,  Boolean type
let b3 = new Boolean('');   // false, Object type
let b4 = !!{};

// '', "", `` = false
// 0, 0.0. 0n = false
// null, undefined, NaN = false