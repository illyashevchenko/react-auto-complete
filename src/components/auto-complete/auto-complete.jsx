/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACInput from './auto-complete-input';
import ACInputButton from './auto-complete-input-button';
import ACList from './auto-complete-list';

class AutoCompleteBox extends React.Component {
  constructor(props) {
    super(props);

    this.errorList = [this.props.errorMsg];
    this.emptyErrorList = []; //we need this for optimization reasons
  }


  queryList() {
    this.props.actions.fetch({
      query: this.props.filter,
      start: this.props.list.length,
      count: this.props.itemsCount
    });
  }


  handleKeyDown(event) {
    let keyCode = event.keyCode || event.which; //38 - up, 40 - down, 39 - right, 13 - enter

    switch (keyCode) {
      case 13:
        this.handleEnter();
        break;
      case 38:
        this.handleListServe(-1);
        event.preventDefault(); //prevent default <input> behaviour for up/down button presses
        break;
      case 40:
        this.handleListServe(1);
        event.preventDefault();
        break;
      case 39:
        this.handleAutoComplete();
        break;
    }
  }


  handleListServe(step) {
    if (!this.props.list.length) {
      return;
    }

    let loadPosition = this.props.list.length - 2, //this.props.list.length - this.props.itemsCount / 2, //TODO: this formula may be changed
        selected     = this.props.selected + step;


    selected = Math.max(selected, -1);
    selected = Math.min(selected, this.props.list.length - 1);

    if (selected > loadPosition) { //TODO: If we select item we should reset that process of fetching list
      this.queryList();
    }

    this.props.actions.serveTo(selected);
  }


  handleFiltering(value) {
    if (value === this.props.filter && this.props.list.length) {
      return;
    }

    let query;

    if (value.length >= this.props.minLetters) {
      query = {
        start: 0,
        count: this.props.itemsCount
      };
    }

    this.props.actions.setFilter(value, query);
  }


  handleAutoComplete() {
    if (this.props.list[0]) {
      this.handleItemClick(this.props.list[0]);
    }
  }


  handleEnter() {
    /**
     * Pressing enter can perform two actions - start filtering (inside ACInput component) and accepting selection in the list
     * If start filtering was accepted inside the ACInput it would clear this.props.list so item here would be undefined
     * And so everything will work properly
     */
    let item = this.props.list[this.props.selected]; //if the list is shown

    if (item) {
      return this.handleItemClick(item);
    }
  }


  handleItemClick(itemValue) {
    this.props.actions.setFilter(itemValue);
    this.props.result.set(itemValue);
  }


  render() {
    return <div
        className = 'dropdown'
        onKeyDown = {this.handleKeyDown.bind(this)}>
      <div className = 'input-group'>
        <ACInput
            className   = 'form-control'
            debounce    = {this.props.debounce}
            onChange    = {this.handleFiltering.bind(this)}
            placeholder = {this.props.placeholder}
            value       = {this.props.filter} />
        <ACInputButton
            className = 'glyphicon loader'
            show      = {this.props.loading} />
        <ACInputButton
            className = 'glyphicon glyphicon-search'
            onClick   = {this.handleFiltering.bind(this, this.props.filter)}
            show      = {!this.props.loading} />
        <ACInputButton
            className = 'glyphicon glyphicon-remove'
            onClick   = {this.handleFiltering.bind(this, '')} />
      </div>
      <ACList
          itemsCount     = {this.props.itemsCount}
          list           = {this.props.list}
          onItemClick    = {this.handleItemClick.bind(this)}
          onScrollBottom = {this.queryList.bind(this)}
          selected       = {this.props.selected} />
      <ACList
          itemsCount  = {1}
          list        = {this.props.error ? this.errorList : this.emptyErrorList} />
    </div>;
  }
}


AutoCompleteBox.propTypes = {
  actions    : React.PropTypes.shape({
    fetch    : React.PropTypes.func.isRequired,
    setFilter: React.PropTypes.func.isRequired,
    serveTo  : React.PropTypes.func.isRequired
  }),
  debounce   : React.PropTypes.number,
  error      : React.PropTypes.bool,
  errorMsg   : React.PropTypes.string,
  filter     : React.PropTypes.string,
  itemsCount : React.PropTypes.number.isRequired,
  list       : React.PropTypes.arrayOf(React.PropTypes.string),
  loading    : React.PropTypes.bool,
  minLetters : React.PropTypes.number,
  placeholder: React.PropTypes.string,
  result     : React.PropTypes.shape({
    set: React.PropTypes.func.isRequired
  }),
  selected: React.PropTypes.number
};


AutoCompleteBox.defaultProps = {
  debounce   : 0,
  error      : false,
  errorMsg   : 'Error!',
  filter     : '',
  list       : [],
  loading    : false,
  minLetters : 2,
  placeholder: 'Type something...',
  selected   : -1
};


export default AutoCompleteBox;