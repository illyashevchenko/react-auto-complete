/**
 * Created by Illia_Shevchenko on 08.10.2015.
 */
import { expect, render, TestUtils, sinon } from '../../utils/test-helper';
import ACListItem from './auto-complete-list-item';

describe('ACListItem', () => {
  const defaultProps = {
    selected: false,
    text    : ''
  };


  it('should set active class of selected prop is set', () => {
    const container = render(ACListItem, {
      selected: true
    }, defaultProps)
      .findWithTag('li');


    expect(container.className).to.have.string('active');
  });


  it('should not set active class of selected prop is not set', () => {
    const container = render(ACListItem, {
      selected: false
    }, defaultProps)
      .findWithTag('li');


    expect(container.className).not.to.have.string('active');
  });


  it('should not set proper label to anchor', () => {
    const container = render(ACListItem, {
      text: 'foo-bar'
    }, defaultProps)
      .findWithTag('a');


    expect(container.textContent).to.equal('foo-bar');
  });


  it('should set onclick handler', () => {
    const spy = sinon.spy();
    const container = render(ACListItem, {
      onClick: spy
    }, defaultProps)
      .findWithTag('li');

    TestUtils.Simulate.click(container);
    return expect(spy).to.have.been.calledOnce;
  });

  describe('should component update', function () {
    const component = render(ACListItem, {
      selected: false,
      text    : ''
    }, defaultProps);


    it('should allow to update component if text property was changed', () => {
      const shouldUpdate = component.shouldComponentUpdate({
        selected: false,
        text    : 'new'
      });

      return expect(shouldUpdate).to.be.true;
    });


    it('should disallow to update component if text property was not changed', () => {
      const shouldUpdate = component.shouldComponentUpdate({
        selected: false,
        text    : ''
      });

      return expect(shouldUpdate).to.be.false;
    });


    it('should allow to update component if selected property was changed', () => {
      const shouldUpdate = component.shouldComponentUpdate({
        selected: true,
        text    : ''
      });

      return expect(shouldUpdate).to.be.true;
    });


    it('should disallow to update component if selected property was not changed', () => {
      const shouldUpdate = component.shouldComponentUpdate({
        selected: false,
        text    : ''
      });

      return expect(shouldUpdate).to.be.false;
    });
  });
});
