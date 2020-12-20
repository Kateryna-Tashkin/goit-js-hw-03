let names = 0;
let value = 0;
const findBestEmployee = function (employees) {
  value = Object.values(employees);
  //console.log(employee);
  const max = Math.max(...value);
  names = Object.keys(employees);
  //console.log(names);
  return max;
};
// const findBestEmployee = function (employees) {
//   for (const key in employees) {
//     console.log(key);
//     value = Object.values(employees);
//     const max = Math.max(...value);
//   }
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
