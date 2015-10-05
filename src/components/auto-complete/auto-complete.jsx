/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACInput from './auto-complete-input';
import ACList from './auto-complete-list';

import listStore from '../../stores/list-store-mock';
import listAction from '../../actions/list-action-mock';
import resultAction from '../../actions/result-action-mock';


class AutoCompleteBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: -1,
            filter  : '',
            list    : [],
            loading : false,
            error   : false
        };

        this.errorList = [this.props.error];
    }


    componentDidMount() {
        this.unbind = listStore.bind(this.handleListChange.bind(this), this.handleListChangeError.bind(this));
    }


    componentWillUnmount() {
        this.unbind();
    }


    handleListChange(list) {
        list = this.state.list.concat(list);

        this.setState({
            list   : list,
            error  : !list.length,
            loading: false
        });
    }


    handleListChangeError() {
        this.setState({
            error  : !this.state.list.length,
            loading: false
        });
    }


    queryList() {
        this.setState({
            loading: true
        });

        listAction.filter({
            query: this.state.filter,
            start: this.state.list.length,
            count: this.props.itemsCount
        });
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
                this.handleAutoComplete();
                break;
        }
    }


    handleListServe(step) {
        if (!this.state.list.length) {
            return;
        }

        let loadPosition = this.state.list.length - this.props.itemsCount / 2, //TODO: this formula may be changed
            selected     = this.state.selected + step;


        selected = Math.max(selected, -1);
        selected = Math.min(selected, this.state.list.length - 1);

        if (selected > loadPosition) {
            this.queryList();
        }

        this.setState({
            selected: selected
        });
    }


    handleFiltering(value) {
        if (value === this.state.filter) {
            return;
        }

        this.setState({
            error  : false,
            filter  : value,
            list    : [],
            selected: -1
        }, () => {
            if (value.length >= this.props.minLetters) {
                this.queryList();
            }
        });
    }


    handleAutoComplete() {
        if (this.state.list[0]) {
            this.handleItemClick(this.state.list[0]);
        }
    }


    handleEnter() {
        /**
         * Pressing enter can perform two actions - start filtering (inside ACInput component) and accepting selection in the list
         * If start filtering was accepted inside the ACInput it would clear this.state.list so item here would be undefined
         * And so everything will work properly
         */
        let item = this.state.list[this.state.selected]; //if the list is shown

        if (item) {
            return this.handleItemClick(item);
        }
    }


    handleItemClick(itemValue) {
        this.setState({
            filter  : itemValue,
            selected: -1,
            list    : []
        });

        resultAction.set(itemValue);
    }


    render() {
        return <div
            className = 'dropdown'
            onKeyDown = {this.handleKeyDown.bind(this)}>
            <ACInput
                debounce    = {this.props.debounce}
                loading     = {this.state.loading}
                onChange    = {this.handleFiltering.bind(this)}
                placeholder = {this.props.placeholder}
                value       = {this.state.filter} />
            <ACList
                itemsCount  = {this.props.itemsCount}
                list        = {this.state.list}
                onItemClick = {this.handleItemClick.bind(this)}
                selected    = {this.state.selected} />
            <ACList
                itemsCount  = {1}
                list        = {this.state.error ? this.errorList : []} />
        </div>;
    }
}


AutoCompleteBox.propTypes = {
    debounce   : React.PropTypes.number.isRequired,
    error      : React.PropTypes.string,
    itemsCount : React.PropTypes.number.isRequired,
    minLetters : React.PropTypes.number.isRequired,
    placeholder: React.PropTypes.string
};

export default AutoCompleteBox;