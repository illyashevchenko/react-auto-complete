/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import alt from '../alt';
import ListActions from '../actions/list-actions';


class ListStore {
  constructor() {
    this.loading  = false;
    this.list     = [];
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


  handleFetch() {
    this.loading = true;
    this.error   = false;
  }


  handleUpdate(list) {
    list = list.map((item) =>  item.firstName);
    list = this.list.concat(list);

    this.loading = false;
    this.list    = list;
    this.error   = !list.length;
  }


  handleError() {
    this.loading = false;
    this.error   = true;
  }


  handleFilter(value) {
    this.loading  = false;
    this.list     = [];
    this.error    = false;
    this.selected = -1;
    this.filter   = value;
  }


  handleServing(itemNumber) {
    this.selected = itemNumber;
  }
}


export default alt.createStore(ListStore, 'ListStore');