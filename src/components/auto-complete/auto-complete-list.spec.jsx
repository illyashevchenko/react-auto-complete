/**
 * Created by Illia_Shevchenko on 08.10.2015.
 */
/*eslint max-nested-callbacks: 0*/
import { expect, render, sinon } from '../../helpers/test-helper';

import ACList from './auto-complete-list';
import ACListItem from './auto-complete-list-item';

describe('ACList', () => {
  let defaultProps = {
    list      : ['foo', 'bar', 'barry'],
    itemsCount: 3
  };

  //beforeEach(() => {
  //  revert = ACList.__set__('ACListItem', ACListItemMock);
  //});


  //afterEach(() => {
  //  revert();
  //});


  //it('should be true', () => {
  //  return expect(true).to.be.true && expect(false).to.be.false;
  //});

  describe('List items', () => {
    it('should render proper list items count', () => {
      let children = render(ACList, {}, defaultProps).scryWithTag('li');

      expect(children.length).to.be.equal(3);
    });


    it('should set proper list items text', () => {
      let items = render(ACList, {}, defaultProps).scryWithType(ACListItem);

      expect(items[0].props.text).to.be.equal('foo');
      expect(items[1].props.text).to.be.equal('bar');
      expect(items[2].props.text).to.be.equal('barry');
    });


    it('should be able to select the first list item', () => {
      let items = render(ACList, {
        selected: 0
      }, defaultProps).scryWithType(ACListItem);

      return expect(items[0].props.selected).to.be.true  &&
             expect(items[1].props.selected).to.be.false &&
             expect(items[2].props.selected).to.be.false;
    });


    it('should be able to select the second list item', () => {
      let items = render(ACList, {
        selected: 1
      }, defaultProps).scryWithType(ACListItem);

      return expect(items[0].props.selected).to.be.false &&
             expect(items[1].props.selected).to.be.true  &&
             expect(items[2].props.selected).to.be.false;
    });


    it('should set onClick handler to items', () => {
      let handler = sinon.spy(),
          items   = render(ACList, {
            onItemClick: handler
          }, defaultProps).scryWithType(ACListItem);

      items.forEach((item) => { item.props.onClick(); });
      expect(handler.callCount).to.equal(3);
    });
  });
});