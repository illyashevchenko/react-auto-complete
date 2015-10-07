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

    if (this.loading) {
      return;
    }

    this.loading = listSource.fetch(query, start, count)
        .then((list) => {
          this.actions.update(list);
          this.loading = null;
        })
        .catch(this.actions.error.bind(this));
  }


  error(errorMessage) {
    this.dispatch(errorMessage);
  }


  serveTo(itemNumber) {
    this.dispatch(itemNumber);
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