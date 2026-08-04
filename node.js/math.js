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
    }
    const result = a / b;
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
}
export function modulas(a, b) {
  return a % b;
}
