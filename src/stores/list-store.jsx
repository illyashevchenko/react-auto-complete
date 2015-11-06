/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import alt from '../alt-start';
import ListActions from '../actions/list-actions';


class ListStore {
  constructor () {
    this._emptyList = [];
    this.loading  = false;
    this.list     = this._emptyList;
    this.error    = false;
    this.selected = -1;
    this.filter   = '';

    this.bindListeners({
      handleFetch  : ListActions.FETCH,
      handleUpdate : ListActions.UPDATE,
      handleError  : ListActions.ERROR,
      handleFilter : ListActions.SET_FILTER,
      handleServing: ListActions.SERVE_TO
    });
  }


  handleFetch () {
    /**
     * this flag can be set previously with reset loading flag,
     * but we still need prevent double update
     */
    this.preventNearestUpdate = this.preventNearestUpdate || this.loading;

    this.loading = true;
    this.error   = false;
  }


  handleUpdate (list) {
    if (this.preventNearestUpdate) {
      this.preventNearestUpdate = null;
      return;
    }

    let mappedList = list.map((item) =>  item.firstName);
    mappedList = this.list.concat(mappedList);

    this.loading = false;
    this.list    = mappedList;
    this.error   = !mappedList.length;
  }


  handleError () {
    this.loading = false;
    this.error   = true;
  }


  handleFilter (value) {
    if (this.loading) {
      /**
       * if something is loaded and new filter selected (or item selected which is the same here)
       * need to prevent next update and reset loading flag
       */
      this.loading = false;
      this.preventNearestUpdate = true;
    }

    this.list     = this._emptyList;
    this.error    = false;
    this.selected = -1;
    this.filter   = value;
  }


  handleServing (itemNumber) {
    this.selected = itemNumber;
  }
}


export default alt.createStore(ListStore, 'ListStore');
