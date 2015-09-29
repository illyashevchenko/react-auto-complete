/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';


class ACInput extends React.Component {
    render() {
        let {onFilter, ...props} = this.props;

        return  <input className = 'form-control'
                       type = 'text'
                       ref  = 'input'
                       onChange = {this.handleInput.bind(this)}
                       {...props} />;
    }


    handleInput(event) {
        let value = event.target.value;
        this.props.onFilter(value);
    }
}


export default ACInput;