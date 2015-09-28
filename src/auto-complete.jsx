/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';

class ACInput extends React.Component {
    render() {
        return  <input type = 'text' className = 'form-control' placeholder = {this.props.placeholder}/>;
    }

    handleKeyDown(event) {
        console.log('input: ', event.key);
    }
}


class ACList extends React.Component {
    render() {
        let listItemNodes = this.props.list.map((listItem, index) => {
            return <ACListItem selected = {index === +this.props.selected}
                               text = {listItem}
                               key = {index}>
                   </ACListItem>
        });

        return  <ul className='dropdown-menu show'>
                    {listItemNodes}
                </ul>;
    }
}


class ACListItem extends React.Component {
    render() {
        return  <li className = {this.props.selected ? 'active' : ''}>
                    <a>{this.props.text}</a>
                </li>;
    }
}


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