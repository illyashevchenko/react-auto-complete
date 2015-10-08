/**
 * Created by Illia_Shevchenko on 05.10.2015.
 */
import alt from '../alt-start';
import listSource from '../sources/list-source';


class ListActions {
  update(data) {
    this.dispatch(data);
  }


  fetch({ query, start, count }) {
    this.dispatch();

    listSource.fetch(query, start, count)
        .then(this.actions.update.bind(this))
        .catch(this.actions.error.bind(this));
  }


  error(data) {
    this.dispatch(data);
  }


  serveTo(data) {
    this.dispatch(data);
  }


  setFilter(value, loading = false) {
    this.dispatch(value);

    if (!loading) {
      return;
    }

    this.actions.fetch(Object.assign(loading, {
      query: value
    }));
  }
}


export default alt.createActions(ListActions);