/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';


class ACInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    render() {
        let {onFilter, text, ...props} = this.props;

        console.log('Input filter is: ', text);
        return  <input className = 'form-control'
                       type = 'text'
                       ref  = 'input'
                       value = {text || this.state.value}
                       onChange = {this.handleInput.bind(this)}
                       {...props} />;
    }


    handleInput(event) {
        let value = event.target.value;

        this.props.onFilter(value);
        this.setState({
            value: value
        });
    }
}


export default ACInput;