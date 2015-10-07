/**
 * Created by Illia_Shevchenko on 07.10.2015.
 */

export function hasEqualProps(props, firstObj, secondObj) {
  return props.every((prop) => firstObj[prop] === secondObj[prop]);
}


export function isArrayChanged(firstArray, secondArray) {
  return firstArray !== secondArray || firstArray.length !== secondArray.length;
}