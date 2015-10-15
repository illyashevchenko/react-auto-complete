/**
 * Created by Illia_Shevchenko on 07.10.2015.
 */

export function hasEqualProps(props, firstObj, secondObj) {
  return props.every((prop) => !firstObj.hasOwnProperty(prop)
                            ||  firstObj[prop] === secondObj[prop]);
}


export function isArrayChanged(firstArray, secondArray, oldLength) {
  return typeof firstArray !== 'undefined' && (firstArray !== secondArray || firstArray.length !== oldLength);
}