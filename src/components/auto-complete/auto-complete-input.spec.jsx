/**
 * Created by Illia_Shevchenko on 08.10.2015.
 */
import { expect, render/* , TestUtils, sinon*/ } from '../../utils/test-helper';
import ACInput from './auto-complete-input';

describe('ACInput', () => {
  const defaultProps = {
    className  : 'foo-bar',
    debounce   : 5,
    onChange   : () => {},
    placeholder: 'awesome placeholder',
    value      : ''
  };

  /* it('should set onclick handler', () => {
   let spy = sinon.spy(),
   container = render(ACInput, {
   onClick: spy
   }, defaultProps)
   .findWithClass('input-group-btn');
   TestUtils.Simulate.click(container);
   return expect(spy).to.have.been.calledOnce;
   });*/


  describe('Creation', () => {
    const input = render(ACInput, {}, defaultProps)
      .findWithTag('input');

    it('should set  className for input element', () => {
      expect(input.className).to.equal('foo-bar');
    });


    it('should set placeholder for input element', () => {
      expect(input.placeholder).to.equal('awesome placeholder');
    });
  });


  describe('should component update', function () {
    const component = render(ACInput, {}, defaultProps);


    it('should allow to update component if value property was changed', () => {
      const shouldUpdate = component.shouldComponentUpdate(null, {
        value: 'new'
      });

      return expect(shouldUpdate).to.be.true;
    });


    it('should disallow to update component if value property was not changed', () => {
      const shouldUpdate = component.shouldComponentUpdate(null, {
        value: ''
      });

      return expect(shouldUpdate).to.be.false;
    });
  });
});
