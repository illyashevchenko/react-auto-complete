/**
 * Created by Illia_Shevchenko on 08.10.2015.
 */
import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import _ from 'underscore';


let render = (Element, curProps = {}, defaultProps = {}) => {
  let props = _.extend(defaultProps, curProps);

  let result = TestUtils.renderIntoDocument(<Element {...props}/>);
  result.findWithTag = TestUtils.findRenderedDOMComponentWithTag.bind(TestUtils, result);

  return result;
};


export {
  React,
  expect,
  TestUtils,
  render
}