/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import _ from 'underscore';
import { hasEqualProps } from '../../helpers/equals';


class ACInput extends React.Component {
  /**
   * Input with ability to debounce changing and force changing when enter is pressed
   * @param {Object} props Component properties
   * @param {string} [props.className] Class name for input element
   * @param {number} [props.debounce = 0] Debounce delay in milliseconds
   * @param {Function} props.onChange On change handler. String value is passed as a parameter
   * @param {string} [props.placeholder = ''] Placeholder for input
   * @param {string} [props.value]
   */
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    /**
     * @type {Function} Debounced handler
     */
    this.handleSearchDebounce = _.debounce(this.handleSearch.bind(this), props.debounce);
  }


  /**
   * Process value from props to state if it differs from current (is set from outside)
   * @param {Object} props New props
   */
  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({
        value: props.value
      });
    }
  }


  /**
   * Need for optimization - we should re-render component only if the value on state was changed
   * @param {Object} nextProps New props
   * @param {Object} nextState New state
   * @returns {boolean} true if component should be updated
   */
  shouldComponentUpdate(nextProps, nextState) {
    return !hasEqualProps(['value'], nextState, this.state);
  }


  /**
   * Handles search. Calls onChange callback
   */
  handleSearch() {
    this.props.onChange(this.state.value);
  }


  /**
   * Handles onChange
   * @param {Event} event Event object
   */
  handleChange(event) {
    this.setState({
      value: event.target.value
    });

    this.handleSearchDebounce();
  }


  /**
   * Handles keydown. If 'enter' is pressed - forces searching without debounce
   * @param {Event} event Event object
   */
  handleKeyDown(event) {
    let keyCode = event.keyCode || event.which;

    if (keyCode === 13) {
      this.handleSearch();
    }
  }


  /**
   * Renders component
   * @returns {XML}
   */
  render() {
    let { placeholder } = this.props;

    return <input
        className   = {this.props.className}
        onChange    = {this.handleChange.bind(this)}
        onKeyDown   = {this.handleKeyDown.bind(this)}
        placeholder = {placeholder}
        type        = 'text'
        value       = {this.state.value} />;
  }
}

ACInput.propTypes = {
  className   : React.PropTypes.string,
  debounce    : React.PropTypes.number,
  onChange    : React.PropTypes.func.isRequired,
  placeholder : React.PropTypes.string,
  value       : React.PropTypes.string
};


ACInput.defaultProps = {
  debounce   : 0,
  placeholder: ''
};


export default ACInput;