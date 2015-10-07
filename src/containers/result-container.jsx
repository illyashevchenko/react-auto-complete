/**
 * Created by Illia_Shevchenko on 06.10.2015.
 */
import React from 'react';
import AltContainer from 'alt/AltContainer';

import Result from '../components/result/result';
import ResultStore from '../stores/result-store';


class Container extends React.Component {
  render() {
    return <AltContainer
        store = {ResultStore}>
      <Result />
    </AltContainer>;
  }
}

export default Container;