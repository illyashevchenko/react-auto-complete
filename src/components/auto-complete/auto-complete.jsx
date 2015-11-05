/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACInput from './auto-complete-input';
import ACInputButton from './auto-complete-input-button';
import ACList from './auto-complete-list';
/**
 * @typedef {Function} ListAction~query
 * @param {Object} params Query params
 * @param {string} params.query Query string
 * @param {number} params.start Start position to fetch from
 * @param {number} params.count Count of items to fetch
 */

/**
 * @typedef {Function} ListAction~setFilters
 * @param {string} value Value to set
 * @param {Object} [query] Query parameters. If omitted - query is not required
 * @param {number} [query.start] Start position to fetch from
 * @param {number} [query.count] Count of items to fetch
 */

/**
 * @typedef {Function} ListAction~serveTo
 * @param {number} selected Index of item to be served to
 */

/**
 * @typedef {Function} ResultAction~set
 * @param {string} result Value ot set as the result
 */
class AutoCompleteBox extends React.Component {
  /**
   * Auto-complete component with input and list of items.
   * <b>Provides:</b>
   * <ol>
   *   <li>Debounce on input change</li>
   *   <li>Minimum letters to start search</li>
   *   <li>Keyboard list control (up and down for serving, right for auto-complete, enter for select</li>
   *   <li>Infinite scroll (lazy load) of the list -
   *     if served with keyboard or scrolled with the mouse to the bottom
   *     it loads next amount of items
   *   </li>
   * </ol>
   *
   * @param {Object} props Component properties
   * @param {Object} props.actions Actions for list
   * @param {ListAction~query} props.actions.fetch Handler to fetch items
   * @param {ListAction~setFilters} props.actions.setFilters Handler to set filter and fetch items
   * @param {ListAction~serveTo} props.actions.serveTo Handler to set current served to item
   * @param {Object} props.result Actions for result of searching
   * @param {ResultAction~set} props.result.set Action to set the result.
   * @param {number} [props.debounce = 0] Debounce for input typing
   * @param {boolean} [props.error = false] Flag to show error message
   * @param {string} [props.errorMsg = 'Error!'] Error message text
   * @param {string} [props.filter = ''] Current filter string
   * @param {number} props.itemsCount Items count.
   * Component queries this count of items during one query.
   * Also it is treated as 'window height' to the list. So this amount of items will be visible at list
   * @param {Array.<string>} [props.list = []] List of items (search result)
   * @param {boolean} [props.loading = false] Flag to show loading spinner
   * @param {number} [props.minLetters = 2] Count of letters from which searching will be started
   * @param {string} [props.placeholder = 'Type something...'] Placeholder for input
   * @param {number} [props.selected = -1] Number of currently selected list item (used for keyboard serving purposes)
   */
  constructor(props) {
    super(props);

    /**
     * This is used to have one source and to be able to prevent re-rendering child components
     * @type {[]}
     */
    this.errorList = [this.props.errorMsg];

    /**
     * This is used to have one source and to be able to prevent re-rendering child components
     * @type {[]}
     */
    this.emptyErrorList = [];
  }


  /**
   * Calls 'fetch' action with parameters to fetch next 'itemsCount' elements of the list with filter value
   */
  queryList() {
    this.props.actions.fetch({
      query: this.props.filter,
      start: this.props.list.length,
      count: this.props.itemsCount
    });
  }


  /**
   * Handles keydown on input. Calls appropriate handlers depending on event.keyCode or event.which
   * @param {Event} event
   */
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


  /**
   * Handler for serving the list. Usually for keyboard serving.
   * Selects from -1 position till the last.
   * Calls 'serveTo' action if the end of list was reached
   * @param {Number} step Step for list serving. 1 to jump one item down, -1 to jump one item update
   */
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


  /**
   * Handler for filtering.
   * Does nothing if value equals current filter or list is full filled.
   * Calls 'setFilter' action
   * @param {String} value New filter value.
   */
  handleFiltering(value) {
    if (value === this.props.filter && this.props.list.length) {
      return;
    }

    this.props.actions.setFilter(value);

    if (value.length >= this.props.minLetters) {
      this.props.actions.fetch({
        query: value,
        start: 0,
        count: this.props.itemsCount
      });
    }
  }


  /**
   * Handles auto complete - simulates item click on the first list item
   */
  handleAutoComplete() {
    if (this.props.list[0]) {
      this.handleItemClick(this.props.list[0]);
    }
  }


  /**
   * Handles enter pressing on list item
   *
   * Pressing enter can perform two actions - start filtering (inside ACInput component) and accepting selection in the list
   * If start filtering was accepted inside the ACInput it would clear this.props.list so item here would be undefined
   * And so everything will work properly
   */
  handleEnter() {
    let item = this.props.list[this.props.selected];

    if (item) {
      this.handleItemClick(item);
    }
  }


  /**
   * Handles item click.
   * Calls 'setFilter' action and 'set.result' action
   * @param {String} itemValue current clicked item
   */
  handleItemClick(itemValue) {
    this.props.actions.setFilter(itemValue);
    this.props.result.set(itemValue);
  }


  /**
   * Renders component
   * @returns {XML}
   */
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