// ** COUNT OCCURANCES IN AN ARRAY
export const count = (val, obj) =>
  obj.reduce((cumulative, currVal) => {
    // eslint-disable-next-line eqeqeq
    return currVal == val ? (cumulative += 1) : cumulative;
  }, 0);

// ** CONDITIONALLY TRANSFORM TO STRING
export const str = (obj) => {
  try {
    return typeof obj === 'object' ? JSON.stringify(obj) : obj;
  } catch (error) {
    return obj;
  }
};

// ** CONDITIONALLY TRANSFORM TO JSON
export const json = (obj) => {
  try {
    return typeof obj === 'object' ? obj : JSON.parse(obj);
  } catch (e) {
    return obj;
  }
};

// ** CLONE AN OBJECT
export const clone = (obj) => JSON.parse(JSON.stringify(obj));
