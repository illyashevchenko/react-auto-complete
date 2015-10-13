/**
 * Created by Illia_Shevchenko on 08.10.2015.
 */
import { expect, render, TestUtils, sinon } from '../../helpers/test-helper';
import ACListItem from './auto-complete-list-item';

describe('ACListItem', () => {
  let defaultProps = {
    selected: false,
    text    : ''
  };


  it('should set active class of selected prop is set', () => {
    let container = render(ACListItem, {
      selected: true
    }, defaultProps)
        .findWithTag('li');


    expect(container.className).to.have.string('active');
  });


  it('should not set active class of selected prop is not set', () => {
    let container = render(ACListItem, {
      selected: false
    }, defaultProps)
        .findWithTag('li');


    expect(container.className).not.to.have.string('active');
  });


  it('should not set proper label to anchor', () => {
    let container = render(ACListItem, {
      text: 'foo-bar'
    }, defaultProps)
        .findWithTag('a');


    expect(container.textContent).to.equal('foo-bar');
  });


  it('should set onclick handler', () => {
    let spy = sinon.spy(),
        container = render(ACListItem, {
          onClick: spy
        }, defaultProps)
            .findWithTag('li');

    TestUtils.Simulate.click(container);
    return expect(spy).to.have.been.calledOnce;
  });
});