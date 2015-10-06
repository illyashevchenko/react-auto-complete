/**
 * Created by Illia_Shevchenko on 06.10.2015.
 */
import React from 'react';
import Result from '../components/result/result';
import ResultStore from '../stores/result-store';

import AltContainer from 'alt/AltContainer';


class Container extends React.Component {
  render() {
    return <AltContainer
        store = {ResultStore}>
      <Result />
    </AltContainer>;
  }
}

export default Container;