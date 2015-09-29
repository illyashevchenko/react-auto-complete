/**
 * Created by Illia_Shevchenko on 29.09.2015.
 */
import React from 'react';


class ACInputButton extends React.Component {
    render() {
        return <span className = 'input-group-btn' onClick = {this.props.onClick}>
                   <button className = 'btn btn-default' type = 'button'>
                       <span className = {`glyphicon glyphicon-${this.props.type}`}></span>
                   </button>
               </span>;
    }
}


export default ACInputButton;