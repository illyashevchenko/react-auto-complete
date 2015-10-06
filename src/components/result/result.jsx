/**
 * Created by Illia_Shevchenko on 05.10.2015.
 */
import React from 'react';

import ResultStore from '../../stores/result-store';


class Result extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }


  componentDidMount() {
    ResultStore.listen(this.handleChange);
  }


  componentWillUnmount() {
    ResultStore.unlisten(this.handleChange);
  }


  handleChange(state) {
    this.setState(state);
  }


  render() {
    var result = this.state.result ? `Selected item first name is ${this.state.result}` : '';

    return <span>{result}</span>;
  }
}


export default Result;