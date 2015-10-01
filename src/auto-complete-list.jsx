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
                                   key = {index}
                                   ref = {index === 0 ? 'listItem' : ''} />
            }),
            className = classNames('dropdown-menu scrollable-menu', {
                show: this.props.show
            });

        return  <ul className = {className}>
                    {listItemNodes}
                </ul>;
    }

    componentDidUpdate() {
        this.setHeight();
    }


    get heightAddenums() {
        return ['border-top-width', 'border-bottom-width', 'padding-top', 'padding-bottom'];
    }


    setHeight () {
        if (!this.refs.listItem) {
            return;
        }

        let itemHeight    = React.findDOMNode(this.refs.listItem).offsetHeight,
            node          = React.findDOMNode(this),
            computedStyle = getComputedStyle(node),
            height        = this.heightAddenums.reduce((height, prop) => {
                return height + parseInt(computedStyle[prop]);
            }, itemHeight * this.props.itemsCount);

        node.style.maxHeight = height + 'px';
    }
}


export default ACList;