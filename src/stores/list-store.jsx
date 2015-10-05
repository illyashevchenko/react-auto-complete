/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import alt from '../alt';
import ListActions from '../actions/list-actions';


class ListStore {
  constructor() {
    this.loading = false;

    this.handleClear();
    this.handleClearError();

    this.bindListeners({
      handleFetch     : ListActions.FETCH,
      handleUpdate    : ListActions.UPDATE,
      handleError     : ListActions.ERROR,
      handleClear     : ListActions.CLEAR,
      handleClearError: ListActions.CLEAR_ERROR
    });
  }


  handleFetch() {
    this.loading = this.list;
    this.handleClearError();
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


  handleClear() {
    this.list = [];
  }

  handleClearError() {
    this.error = false;
  }
}


export default alt.createStore(ListStore, 'ListStore');