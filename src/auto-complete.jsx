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
            selected: -1,
            filter  : ''
        };
    }


    render() {
        this.setList();

        return <div className = 'dropdown' onKeyDown = {this.handleKeyDown.bind(this)}>
            <ACInput placeholder = {this.props.placeholder}
                     onFilter = {this.handleFiltering.bind(this)}
                     text = {this._list[this.state.selected]} />

            <ACList onItemClick = {this.handleItemClick.bind(this)}
                    selected = {this.state.selected}
                    list = {this._list} />
        </div>;
    }


    setList() {
        console.log('set list');

        let filter = this.state.filter.toUpperCase();

        this._list = this.props.list
            .map((item) => item[this.props.itemKey])
            .filter((listItem) => listItem && listItem.toUpperCase().includes(filter));
    }


    handleKeyDown(event) {
        let keyCode = event.keyCode || event.which; //38 - up, 40 - down, 39 - right, 13 - enter, 08 - backspace

        switch (keyCode) {
            case 13: this.handleEnter(); break;
            case 38: this.handleListServe(-1); break;
            case 40: this.handleListServe(1); break;
        }
    }

    handleListServe(step) {
        console.log(this._list.length);

        let selected = this.state.selected + step;

        selected = Math.min(selected, this._list.length - 1);
        selected = Math.max(selected, 0);

        this.setState({
            selected: selected
        });
    }


    handleFiltering(value) {
        console.log('Filter string is: ', value);

        this.setState({
            filter: value
        })
    }


    handleEnter() {
        console.log('Pressed enter on item: ', this.state.filter);
    }


    handleItemClick(itemValue) {
        console.log('clicked item is: ' , itemValue);
    }
}


export default AutoCompleteBox;