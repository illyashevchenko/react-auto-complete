/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACInputButton from './auto-complete-input-button';
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
    let { onChange, placeholder, loading } = this.props;

    return <div className = 'input-group'>
      <input
          className   = 'form-control'
          onChange    = {this.handleChange.bind(this)}
          onKeyDown   = {this.handleKeyDown.bind(this)}
          placeholder = {placeholder}
          type        = 'text'
          value       = {this.state.value} />
      <ACInputButton
          className = 'glyphicon loader'
          show      = {loading} />
      <ACInputButton
          className = 'glyphicon glyphicon-search'
          onClick   = {this.handleSearch.bind(this)}
          show      = {!loading} />
      <ACInputButton
          className = 'glyphicon glyphicon-remove'
          onClick   = {onChange.bind(null, '')} />
    </div>;
  }
}

ACInput.propTypes = {
  debounce    : React.PropTypes.number,
  loading     : React.PropTypes.bool,
  onChange    : React.PropTypes.func.isRequired,
  placeholder : React.PropTypes.string,
  value       : React.PropTypes.string
};


ACInput.defaultProps = {
  debounce   : 0,
  loading    : false,
  placeholder: ''
};


export default ACInput;