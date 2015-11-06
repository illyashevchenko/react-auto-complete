/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import classNames from 'classnames';
import { hasEqualProps } from '../../helpers/equals';


/**
 * List item component. Renders <li><a>Text</a></li> structure
 * @param {Object} props Component properties
 * @param {Function} [props.onClick = () => {}] Click mouse handler
 * @param {boolean} [props.selected = false] True if element selected. Adds 'active' class name if set to true
 * @param {string} props.text Text for element
 */
class ACListItem extends React.Component {
  /**
   * Need for optimization - we should re-render component only if the text or selected props were changed
   * @param {Object} nextProps New props
   * @returns {boolean} true if component should be updated
   */
  shouldComponentUpdate (nextProps) {
    return !hasEqualProps(['text', 'selected'], nextProps, this.props);
  }


  /**
   * Renders component
   * @returns {XML}
   */
  render () {
    const className = classNames({
      active: this.props.selected
    });

    return (<li
        className = {className}
        onClick = {this.props.onClick} >
      <a>{this.props.text}</a>
    </li>);
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
