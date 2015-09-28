/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';


class ACListItem extends React.Component {
    render() {
        return  <li className = {this.props.selected ? 'active' : ''} onClick = {this.props.onClick}>
                    <a>{this.props.text}</a>
                </li>;
    }
}


export default ACListItem;