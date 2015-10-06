/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACInput from './auto-complete-input';
import ACInputButton from './auto-complete-input-button';
import ACList from './auto-complete-list';

import ListStore from '../../stores/list-store';
import ListActions from '../../actions/list-actions';
import ResultActions from '../../actions/result-actions';


class AutoCompleteBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = Object.assign(ListStore.getState(), {
      selected: -1,
      filter  : ''
    });

    this.errorList = [this.props.error];
    this.handleListChange = this.handleListChange.bind(this);
  }


  componentDidMount() {
    ListStore.listen(this.handleListChange);
  }


  componentWillUnmount() {
    ListStore.unlisten(this.handleListChange);
  }


  handleListChange(state) {
    this.setState(state);
  }


  queryList() {
    if (this.state.loading) {
      return;
    }

    ListActions.fetch({
      query: this.state.filter,
      start: this.state.list.length,
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
    if (!this.state.list.length) {
      return;
    }

    let loadPosition = this.state.list.length - 2, //this.state.list.length - this.props.itemsCount / 2, //TODO: this formula may be changed
        selected     = this.state.selected + step;


    selected = Math.max(selected, -1);
    selected = Math.min(selected, this.state.list.length - 1);

    if (selected > loadPosition) { //TODO: If we select item we should reset that process of fetching list
      this.queryList();
    }

    this.setState({
      selected: selected
    });
  }


  handleFiltering(value) {
    if (value === this.state.filter) {
      return;
    }

    ListActions.clear();

    this.setState({
      filter  : value,
      selected: -1
    }, () => {
      if (value.length >= this.props.minLetters) {
        this.queryList();
      }
    });
  }


  handleAutoComplete() {
    if (this.state.list[0]) {
      this.handleItemClick(this.state.list[0]);
    }
  }


  handleEnter() {
    /**
     * Pressing enter can perform two actions - start filtering (inside ACInput component) and accepting selection in the list
     * If start filtering was accepted inside the ACInput it would clear this.state.list so item here would be undefined
     * And so everything will work properly
     */
    let item = this.state.list[this.state.selected]; //if the list is shown

    if (item) {
      return this.handleItemClick(item);
    }
  }


  handleItemClick(itemValue) {
    this.setState({
      filter  : itemValue,
      selected: -1
    });

    ListActions.clear();
    ResultActions.set(itemValue);
  }


  render() {
    return <div
        className = 'dropdown'
        onKeyDown = {this.handleKeyDown.bind(this)}>
      <ACInput
          debounce    = {this.props.debounce}
          onChange    = {this.handleFiltering.bind(this)}
          placeholder = {this.props.placeholder}
          value       = {this.state.filter} >
        <ACInputButton
            className = 'glyphicon loader'
            show      = {this.state.loading} />
        <ACInputButton
            className = 'glyphicon glyphicon-search'
            onClick   = {this.handleFiltering.bind(this)}
            show      = {!this.state.loading} />
        <ACInputButton
            className = 'glyphicon glyphicon-remove'
            onClick   = {this.handleFiltering.bind(this, '')} />
      </ACInput>
      <ACList
          itemsCount     = {this.props.itemsCount}
          list           = {this.state.list}
          onItemClick    = {this.handleItemClick.bind(this)}
          onScrollBottom = {this.queryList.bind(this)}
          selected       = {this.state.selected} />
      <ACList
          itemsCount  = {1}
          list        = {this.state.error ? this.errorList : []} />
    </div>;
  }
}


AutoCompleteBox.propTypes = {
  debounce   : React.PropTypes.number.isRequired,
  error      : React.PropTypes.string,
  itemsCount : React.PropTypes.number.isRequired,
  minLetters : React.PropTypes.number.isRequired,
  placeholder: React.PropTypes.string
};

export default AutoCompleteBox;