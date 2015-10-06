/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACListItem from './auto-complete-list-item';
import classNames from 'classnames';


class ACList extends React.Component {
  componentDidUpdate() {
    this.setHeight();
    this.scrollList();
  }


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


  scrollList() {
    if (!this.props.list.length || this.props.selected < 0) {
      return;
    }

    let selectedNode = React.findDOMNode(this.refs[`item${this.props.selected}`]),
        node         = React.findDOMNode(this);

    node.scrollTop = selectedNode.offsetTop - node.offsetHeight / 2;
  }


  handleScroll(event) {
    if (event.deltaY <= 0) {
      return;
    }

    let list   = React.findDOMNode(this),
        endTop = list.offsetHeight - list.clientHeight;

    if (endTop > list.offsetTop) {
      return;
    }

    this.props.onScrollBottom();
  }


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
  selected   : -1,
  onItemClick: () => {}
};


ACList.heightAddenums = ['border-top-width', 'border-bottom-width', 'padding-top', 'padding-bottom'];

export default ACList;