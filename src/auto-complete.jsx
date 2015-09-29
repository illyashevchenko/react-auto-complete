/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACInput from './auto-complete-input';
import ACList from './auto-complete-list';

import listStore from './list-store-mock';
import listAction from './list-action-mock';


class AutoCompleteBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: -1,
            filter  : '',
            list    : [],
            showList: false,
            loading : false,
            error   : false
        };
    }


    render() {
        return <div className = 'dropdown' onKeyDown = {this.handleKeyDown.bind(this)}>
                    <ACInput placeholder = {this.props.placeholder}
                             onFilter = {this.handleFiltering.bind(this)}
                             onSearch = {this.handleSearch.bind(this)}
                             value = {this.state.list[this.state.selected] || this.state.filter} />

                    <ACList onItemClick = {this.handleItemClick.bind(this)}
                            selected = {this.state.selected}
                            list = {this.state.list}
                            show = {this.state.showList}/>
                </div>;
    }


    componentDidMount() {
        this.unbind = listStore.bind(this.handleListChange.bind(this), this.handleListChangeError.bind(this));
    }


    componentWillUnmount() {
        this.unbind();
    }


    handleListChange(list) {
        list = this.getList(list);

        this.setState({
            list    : list,
            showList: !!list.length
        })
    }


    handleListChangeError() {
        this.setState({
            error  : true,
            loading: false
        })
    }


    getList(list) {
        return list
            .map((item) => item[this.props.itemKey])
            .slice(0, this.props.maxItems || undefined);
    }


    handleFiltering(value) {
        let needLoading = value.length >= this.props.minLetters;

        this.setState({
            filter  : value,
            selected: -1,
            loading : needLoading,
            showList: false
        });

        if (needLoading) {
            listAction.filter(value);
        }
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


    handleSearch() {
        if (this.state.filter) {
            this.handleItemClick(this.state.filter);
        }
    }


    handleComplete() {
        if (this.state.showList && this.state.list[0]) {
            this.handleItemClick(this.state.list[0]);
        }
    }


    handleEnter() {
        let item = this.state.list[this.state.selected]; //if the list is shown

        if (this.state.showList && item) {
            this.handleItemClick(item);
        }
    }


    handleItemClick(itemValue) {
        this.setState({
            filter  : itemValue,
            selected: -1,
            showList: false
        });
    }
}


export default AutoCompleteBox;