/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACListItem from './auto-complete-list-item';
import classNames from 'classnames';
import { hasEqualProps, isArrayChanged } from '../../helpers/equals';


/**
 * List component
 * @param {Object} props Component properties
 * @param {number} props.itemsCount Count of items
 * Component queries this count of items during one query.
 * Also it is treated as 'window height' to the list. So this amount of items will be visible at list
 * @param {Array.<string>} props.list List of items to render
 * @param {Function} [props.onItemClick = () => {}] Handler for item click. Passes value as a string parameter
 * @param {Function} [props.onScrollBottom = () => {}] Handler when bottom is reached on scrolling
 * @param {number} [props.selected = -1] Currently selected item number
 */
class ACList extends React.Component {
  /**
   * Need for optimization - we should re-render component only if the selected or list array props were changed.
   *
   * @param {Object} nextProps New props
   * @returns {boolean} true if component should be updated
   */
  shouldComponentUpdate(nextProps) {
    return !hasEqualProps(['selected'], nextProps, this.props) || isArrayChanged(nextProps.list, this.props.list);
  }


  /**
   * Handles component was updated
   */
  componentDidUpdate() {
    this.setHeight();
    this.scrollList();
  }


  /**
   * Set height of the list. Gets the first element, calculates its height
   * Then sets height of the list as 'itemsCount' x 'itemHeight'
   * Takes into consideration border and padding
   */
  setHeight() {
    if (!this.props.list.length || !this.refs.item0) {
      return;
    }

    let node          = React.findDOMNode(this),
        computedStyle = getComputedStyle(node),
        itemHeight    = React.findDOMNode(this.refs.item0).offsetHeight,

        height        = ACList.heightAddenums.reduce((height, prop) => {
          return height + parseInt(computedStyle[prop], 10);
        }, itemHeight * this.props.itemsCount);

    node.style.maxHeight = height + 'px';
  }


  /**
   * Scrolls list ot currently selected item number.
   */
  scrollList() {
    if (!this.props.list.length || this.props.selected < 0) {
      return;
    }

    let selectedNode = React.findDOMNode(this.refs[`item${this.props.selected}`]),
        node         = React.findDOMNode(this);

    node.scrollTop = selectedNode.offsetTop - node.clientHeight / 2;
  }


  /**
   * Handle mouse scroll on the list.
   * Sets scrollTop position and calls onScrollBottom handler if bottom is reached
   * @param {WheelEvent} event Event
   */
  handleScroll(event) {
    if (event.deltaY <= 0) {
      return;
    }

    let list   = React.findDOMNode(this),
        endTop = list.scrollHeight - list.clientHeight;

    if (endTop > list.scrollTop) {
      return;
    }

    this.props.onScrollBottom();
  }


  /**
   * Renders component
   * @returns {XML}
   */
  render() {
    let listItemNodes = this.props.list.map((listItem, index) => {
          return <ACListItem
              key      = {index}
              onClick  = {this.props.onItemClick.bind(null, listItem)}
              ref      = {`item${index}`}
              selected = {index === +this.props.selected}
              text     = {listItem} />;
        }),
        className = classNames('dropdown-menu scrollable-menu', {
          show: this.props.list.length
        });

    return  <ul
        className = {className}
        onWheel   = {this.handleScroll.bind(this)}>
      {listItemNodes}
    </ul>;
  }
}

ACList.propTypes = {
  itemsCount    : React.PropTypes.number.isRequired,
  list          : React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  onItemClick   : React.PropTypes.func,
  onScrollBottom: React.PropTypes.func,
  selected      : React.PropTypes.number
};


ACList.defaultProps = {
  selected      : -1,
  onItemClick   : () => {},
  onScrollBottom: () => {}
};


ACList.heightAddenums = ['border-top-width', 'border-bottom-width', 'padding-top', 'padding-bottom'];

export default ACList;