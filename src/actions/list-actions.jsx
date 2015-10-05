/**
 * Created by Illia_Shevchenko on 05.10.2015.
 */
import alt from '../alt';


class ListActions {
  filter() {
    this.dispatch.apply(this, arguments);
  }
}


export default alt.createActions(ListActions);