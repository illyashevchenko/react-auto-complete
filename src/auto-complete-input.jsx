/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACInputButton from './auto-complete-input-button';


class ACInput extends React.Component {
    render() {
        let {onFilter, onSearch, ...props} = this.props;

        return <div className = 'input-group'>
                    <input className = 'form-control'
                           type = 'text'
                           ref  = 'input'
                           onChange = {this.handleInput.bind(this)}
                        {...props} />
                    <ACInputButton type = 'search' onClick = {onSearch} />
                    <ACInputButton type = 'remove' onClick = {onFilter.bind(null, '')} />
                </div>;
    }


    handleInput(event) {
        let value = event.target.value;
        this.props.onFilter(value);
    }
}


export default ACInput;