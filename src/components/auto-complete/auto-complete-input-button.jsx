/**
 * Created by Illia_Shevchenko on 29.09.2015.
 */
import React from 'react';
import classNames from 'classnames';

class ACInputButton extends React.Component {
    render() {
        let { onClick = () => {}, className, show } = this.props;

        let containerClassName = classNames('input-group-btn', { //use the second let, because IDE resists to catch syntax when one using one let
            hide: typeof show === 'boolean' && !show
        });

        return <span className = {containerClassName}
                     onClick   = {onClick}>
                   <button className = 'btn btn-default'
                           type      = 'button'>
                       <span className = {className}></span>
                   </button>
               </span>;
    }
}

ACInputButton.propTypes = {
    className: React.PropTypes.string.isRequired,
    onClick  : React.PropTypes.func,
    show     : React.PropTypes.boolean

};


ACInputButton.defaultProps = {
    //show   : true,
    onClick: () => {}
};


export default ACInputButton;