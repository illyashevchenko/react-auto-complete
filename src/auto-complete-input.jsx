/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACInputButton from './auto-complete-input-button';


class ACInput extends React.Component {
    render() {
        let {onChange, onSearch, ...props} = this.props;

        return <div className = 'input-group'>
                    <input className = 'form-control'
                           type = 'text'
                           ref  = 'input'
                           onChange = {this.handleChange.bind(this)}
                           {...props} />
                    <ACInputButton type = 'search' onClick = {onSearch} />
                    <ACInputButton type = 'remove' onClick = {onChange.bind(null, '')} />
                </div>;
    }


    handleChange(event) {
        let value = event.target.value;
        this.props.onChange(value);
    }
}


export default ACInput;