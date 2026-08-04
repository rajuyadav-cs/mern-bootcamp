export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}
export function multiply(a, b) {
  return a * b;
}
export function divide(a, b) {
  try {
    if (b == 0) {
      throw new Error("Zero Division Error");
    }
    const result = a / b;
    return result;
  } catch (error) {
    console.log(`Error ${error.message}`);
    return null;
  }
}
export function modulas(a, b) {
  return a % b;
}
