/**
 * Created by Illia_Shevchenko on 29.09.2015.
 */
import React from 'react';
import classNames from 'classnames';

class ACInputButton extends React.Component {
    render() {
        let {onClick = () => {}, className, show} = this.props,
            containerClassName = classNames('input-group-btn', {
                hide: typeof show === 'boolean' && !show
            });

        return <span className = {containerClassName} onClick = {onClick}>
                   <button className = 'btn btn-default' type = 'button'>
                       <span className = {className}></span>
                   </button>
               </span>;
    }
}


export default ACInputButton;