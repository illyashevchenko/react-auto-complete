/**
 * Created by Illia_Shevchenko on 08.10.2015.
 */
import { expect, render, TestUtils, sinon } from '../../helpers/test-helper';
import ACInputButton from './auto-complete-input-button';

describe('ACInputButton', () => {
  let defaultProps = {
    className: 'foo-bar'
  };


  it('should set create span element with given class name', () => {
    let container = render(ACInputButton, {
      selected: true
    }, defaultProps)
        .scryWithClass('foo-bar');


    expect(container.length).to.equal(1);
  });


  it('should set onclick handler', () => {
    let spy = sinon.spy(),
        container = render(ACInputButton, {
          onClick: spy
        }, defaultProps)
            .findWithClass('input-group-btn');

    TestUtils.Simulate.click(container);
    return expect(spy).to.have.been.calledOnce;
  });


  describe('Show/gide', () => {
    it('should not set class for hiding element if it should be shown', () => {
      let container = render(ACInputButton, {
        show: true
      }, defaultProps)
          .findWithClass('input-group-btn');


      expect(container.className).not.to.contain('hide');
    });


    it('should set class for hiding element if it should be', () => {
      let container = render(ACInputButton, {
        show: false
      }, defaultProps)
          .findWithClass('input-group-btn');


      expect(container.className).to.contain('hide');
    });
  });

  
  describe('should component update', function () {
    let component = render(ACInputButton, {}, defaultProps);


    it('should allow to update component if className property was changed', () => {
      let shouldUpdate = component.shouldComponentUpdate({
        className: 'new'
      });

      return expect(shouldUpdate).to.be.true;
    });


    it('should disallow to update component if className property was not changed', () => {
      let shouldUpdate = component.shouldComponentUpdate({
        className: 'foo-bar'
      });

      return expect(shouldUpdate).to.be.false;
    });


    it('should allow to update component if show property was changed', () => {
      let shouldUpdate = component.shouldComponentUpdate({
        show: false
      });

      return expect(shouldUpdate).to.be.true;
    });


    it('should disallow to update component if show property was not changed', () => {
      let shouldUpdate = component.shouldComponentUpdate({
        show: true
      });

      return expect(shouldUpdate).to.be.false;
    });
  });
});