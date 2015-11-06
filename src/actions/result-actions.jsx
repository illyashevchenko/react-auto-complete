/**
 * Created by Illia_Shevchenko on 05.10.2015.
 */
import alt from '../alt-start';


class ResultActions {
  set (result) {
    this.dispatch(result);
  }
}


export default alt.createActions(ResultActions);
