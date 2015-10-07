/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import classNames from 'classnames';


class ACListItem extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.selected !== this.props.selected || nextProps.text !== this.props.text;
  }


  render() {
    let className = classNames({
      active: this.props.selected
    });

    return <li
        className = {className}
        onClick = {this.props.onClick} >
      <a>{this.props.text}</a>
    </li>;
  }
}

ACListItem.propTypes = {
  onClick : React.PropTypes.func,
  selected: React.PropTypes.bool,
  text    : React.PropTypes.string.isRequired
};


ACListItem.defaultProps = {
  onClick : () => {},
  selected: false
};

export default ACListItem;