/**
 * Created by Illia_Shevchenko on 08.10.2015.
 */
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import _ from 'underscore';

import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
let expect = chai.expect;

let render = (Element, curProps = {}, defaultProps = {}) => {
  let props = _.extend(defaultProps, curProps);

  let result = TestUtils.renderIntoDocument(<Element {...props}/>);
  result.findWithTag = TestUtils.findRenderedDOMComponentWithTag.bind(TestUtils, result);
  result.scryWithTag = TestUtils.scryRenderedDOMComponentsWithTag.bind(TestUtils, result);
  result.findWithType = TestUtils.findRenderedComponentWithType.bind(TestUtils, result);
  result.scryWithType = TestUtils.scryRenderedComponentsWithType .bind(TestUtils, result);
  result.findWithClass = TestUtils.findRenderedDOMComponentWithClass .bind(TestUtils, result);
  result.scryWithClass = TestUtils.scryRenderedDOMComponentsWithClass .bind(TestUtils, result);

  return result;
};

export {
    React,
    expect,
    TestUtils,
    render,
    sinon
}