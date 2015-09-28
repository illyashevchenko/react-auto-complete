/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';


class ACInput extends React.Component {
    render() {
        return  <input type = 'text' className = 'form-control' placeholder = {this.props.placeholder}/>;
    }
}


export default ACInput;