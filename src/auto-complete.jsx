/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACInput from './auto-complete-input';
import ACList from './auto-complete-list';


class AutoCompleteBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: -1
        };
    }


    render() {
        let list = this.props.list.map((item) => {
            return item[this.props.itemKey];
        });

        return <div className = 'dropdown' onKeyDown = {this.handleKeyDown.bind(this)}>
                    <ACInput placeholder = {this.props.placeholder}></ACInput>
                    <ACList list = {list} selected = {this.state.selected}></ACList>
                </div>;
    }


    handleKeyDown(event) {
        let keyCode = event.keyCode || event.which; //38 - up, 40 - down, 39 - right, 13 - enter

        switch (keyCode) {
            case 38: this.handleListServe(-1); break;
            case 40: this.handleListServe(1); break;
        }
    }

    handleListServe(step) {
        let selected = this.state.selected + step;

        selected = Math.min(selected, this.props.list.length - 1);
        selected = Math.max(selected, 0);

        this.setState({ selected: selected });
    }
}


export default AutoCompleteBox;