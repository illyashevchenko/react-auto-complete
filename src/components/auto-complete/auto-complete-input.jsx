/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import _ from 'underscore';


class ACInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleSearchDebounce = _.debounce(this.handleSearch.bind(this), props.debounce);
  }


  componentWillReceiveProps(props) {
    if (props.value !== this.props.value) {
      this.setState({
        value: props.value
      });
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value || nextState.value !== this.state.value;
  }


  handleSearch() {
    this.props.onChange(this.state.value);
  }


  handleChange(event) {
    this.setState({
      value: event.target.value
    });

    this.handleSearchDebounce();
  }


  handleKeyDown(event) {
    let keyCode = event.keyCode || event.which;

    if (keyCode === 13 && this.props.value !== this.state.value) {
      this.handleSearch();
    }
  }


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