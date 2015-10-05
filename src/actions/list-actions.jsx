/**
 * Created by Illia_Shevchenko on 05.10.2015.
 */
import alt from '../alt';
import listSource from '../sources/list-source';


class ListActions {
  update(list) {
    this.dispatch(list);
  }


  fetch({ query, start, count }) {
    this.dispatch();

    listSource.fetch(query, start, count)
        .then(this.actions.update.bind(this))
        .catch(this.actions.error.bind(this));
  }


  error(errorMessage) {
    this.dispatch(errorMessage);
  }


  clearError() {
    this.dispatch();
  }


  clear() {
    this.dispatch();
  }
}


export default alt.createActions(ListActions);