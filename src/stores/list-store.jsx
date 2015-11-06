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
    this.preventNearestUpdates = 0;

    this.bindListeners({
      handleFetch  : ListActions.FETCH,
      handleUpdate : ListActions.UPDATE,
      handleError  : ListActions.ERROR,
      handleFilter : ListActions.SET_FILTER,
      handleServing: ListActions.SERVE_TO
    });
  }


  handleFetch () {
    this.preventNearestUpdates += +this.loading;

    this.loading = true;
    this.error   = false;
  }


  handleUpdate (list) {
    if (this.preventNearestUpdates) {
      --this.preventNearestUpdates;
      return;
    }

    let mappedList = list.map((item) =>  item.firstName);
    mappedList = this.list.concat(mappedList);

    this.loading = false;
    this.list    = mappedList;
    this.error   = !mappedList.length;
  }


  handleError () {
    this.preventNearestUpdates = 0;
    this.loading = false;
    this.error   = true;
  }


  handleFilter (value) {
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
