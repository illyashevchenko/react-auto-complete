/**
 * Created by Illia_Shevchenko on 29.09.2015.
 */
import React from 'react';
import classNames from 'classnames';
import { hasEqualProps } from '../../helpers/equals';

/**
 * Input button (placed near input component) component
 * @param {Object} props Component properties
 * @param {string} [props.className = ''] Class name for root element
 * @param {Function} [props.onClick = () => {}] Handler for clicking on the button
 * @param {boolean} [props.show = true] Flag to show the button
 */
class ACInputButton extends React.Component {
  /**
   * Need for optimization - we should re-render component only if the show or className props were changed
   * @param {Object} nextProps New props
   * @returns {boolean} true if component should be updated
   */
  shouldComponentUpdate (nextProps) {
    return !hasEqualProps(['show', 'className'], nextProps, this.props);
  }


  /**
   * Renders component
   * @returns {XML}
   */
  render () {
    const { onClick = () => {}, className, show } = this.props;

    const containerClassName = classNames('input-group-btn', { // use the second let, because IDE resists to catch syntax when one using one let
      hide: !show
    });

    return (<span
      className = {containerClassName}
      onClick   = {onClick}>
          <button
            className = 'btn btn-default'
            type      = 'button'>
            <span className = {className}></span>
          </button>
        </span>);
  }
}

ACInputButton.propTypes = {
  className: React.PropTypes.string.isRequired,
  onClick  : React.PropTypes.func,
  show     : React.PropTypes.bool
};


ACInputButton.defaultProps = {
  className: '',
  show     : true,
  onClick  : () => {}
};


export default ACInputButton;
