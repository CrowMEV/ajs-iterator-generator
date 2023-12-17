export default function isGenerator(obj) {
  if (!obj) {
    return false;
  }
  return typeof obj[Symbol.iterator] === "function";
}
