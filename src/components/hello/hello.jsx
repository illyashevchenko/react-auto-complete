/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return <h1>Hello from {this.props.phrase}!</h1>;
  }
}


HelloWorld.propTypes = {
  phrase: React.PropTypes.string
};

export default HelloWorld;