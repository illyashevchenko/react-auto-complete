/**
 * Created by Illia_Shevchenko on 05.10.2015.
 */
import React from 'react';


class Result extends React.Component {
  render() {
    var result = this.props.result ? `Selected item first name is ${this.props.result}` : '';

    return <span>{result}</span>;
  }
}

Result.propTypes = {
  result: React.PropTypes.string
};


export default Result;