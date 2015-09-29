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
            filter  : '',
            list    : [],
            showList: false
        };
    }


    render() {
        return <div className = 'dropdown' onKeyDown = {this.handleKeyDown.bind(this)}>
                    <ACInput placeholder = {this.props.placeholder}
                             onFilter = {this.handleFiltering.bind(this)}
                             text = {this.state.list[this.state.selected] || this.state.filter} />

                    <ACList onItemClick = {this.handleItemClick.bind(this)}
                            selected = {this.state.selected}
                            list = {this.state.list}
                            show = {this.state.showList}/>
                </div>;
    }


    getList(filter) {
        filter = filter.toUpperCase();

        return this.props.list
            .map((item) => item[this.props.itemKey])
            .filter((listItem) => listItem && listItem.toUpperCase().includes(filter))
            .slice(0, this.props.maxItems || undefined);
    }


    handleKeyDown(event) {
        let keyCode = event.keyCode || event.which; //38 - up, 40 - down, 39 - right, 13 - enter

        switch (keyCode) {
            case 13:
                this.handleEnter();
            break;
            case 38:
                this.handleListServe(-1);
                event.preventDefault(); //prevent default <input> behaviour for up/down button presses
            break;
            case 40:
                this.handleListServe(1);
                event.preventDefault();
            break;
            case 39:
                this.handleComplete();
            break;
        }
    }


    handleComplete() {
        if (this.state.showList && this.state.list[0]) {
            this.handleItemClick(this.state.list[0]);
        }
    }


    handleListServe(step) {
        if (!this.state.list.length) {
            return;
        }

        let selected = this.state.selected + step;

        selected = Math.min(selected, this.state.list.length - 1);
        selected = Math.max(selected, 0);

        this.setState({
            selected: selected,
            showList: true
        });
    }


    handleFiltering(value) {
        let list = this.getList(value);

        this.setState({
            filter  : value,
            selected: -1,
            list    : list,
            showList: list.length && value.length >= this.props.minLetters
        });
    }


    handleEnter() {
        let item = this.state.showList && this.state.list[this.state.selected]; //if the list is shown
        this.handleItemClick(item || this.state.filter);
    }


    handleItemClick(itemValue) {
        this.setState({
            filter  : itemValue,
            selected: -1,
            showList: false
        });

        this.props.onSelect(itemValue);
    }
}


export default AutoCompleteBox;