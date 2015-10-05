/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import classNames from 'classnames';


class ACListItem extends React.Component {
    render() {
        let className = classNames({
            active: this.props.selected
        });

        return  <li className = {className} onClick = {this.props.onClick}>
                    <a>{this.props.text}</a>
                </li>;
    }
}


export default ACListItem;