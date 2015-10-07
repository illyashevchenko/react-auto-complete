/**
 * Created by Illia_Shevchenko on 07.10.2015.
 */
import React from 'react';
import AltContainer from 'alt/AltContainer';

import AutoComplete from '../components/auto-complete/auto-complete';
import ListStore from '../stores/list-store';
import ListActions from '../actions/list-actions';
import ResultActions from '../actions/result-actions';


class Container extends React.Component {
  render() {
    return <AltContainer
        actions = {{ actions: ListActions, result: ResultActions }}
        store = {ListStore} >
      <AutoComplete {...this.props}/>
    </AltContainer>;
  }
}

export default Container;