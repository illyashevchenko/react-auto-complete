/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import alt from '../alt';
import ResultActions from '../actions/result-actions';


class ResultStore {
  constructor() {
    this.result = '';

    this.bindListeners({
      handleSetResult: ResultActions.SET
    });
  }


  handleSetResult(result) {
    this.result = result;
  }
}


export default alt.createStore(ResultStore, 'ResultStore');