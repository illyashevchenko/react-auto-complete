/**
 * Created by Illia_Shevchenko on 05.10.2015.
 */
import React from 'react';

import resultStore from '../../stores/result-store-mock';


class Result extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }


    render() {
        var text = this.state.text ? `Selected item first name is ${this.state.text}` : '';

        return <span>{text}</span>
    }


    componentDidMount() {
        this.unbind = resultStore.bind(this.handleTextChange.bind(this));
    }


    componentWillUnmount() {
        this.unbind();
    }


    handleTextChange(text){
        this.setState({
            text: text
        });
    }
}


export default Result;