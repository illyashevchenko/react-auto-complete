/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACListItem from './auto-complete-list-item';
import classNames from 'classnames';


class ACList extends React.Component {
    render() {
        let listItemNodes = this.props.list.map((listItem, index) => {
                return <ACListItem selected = {index === +this.props.selected}
                                   onClick = {this.props.onItemClick.bind(null, listItem)}
                                   text = {listItem}
                                   key = {index} />
            }),
            className = classNames('dropdown-menu', {
                show: this.props.show
            });

        return  <ul className = {className}>
                    {listItemNodes}
                </ul>;
    }
}


export default ACList;