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
                                   onClick  = {this.props.onItemClick.bind(null, listItem)}
                                   text = {listItem}
                                   key  = {index}
                                   ref  = {`item${index}`} />
            }),
            className = classNames('dropdown-menu scrollable-menu', {
                show: this.props.list.length
            });

        return  <ul className = {className}>
                    {listItemNodes}
                </ul>;
    }


    componentDidUpdate() {
        this.setHeight();
        this.scrollList();
    }


    setHeight () {
        if (!this.props.list.length || !this.refs.item0) {
            return;
        }

        let node          = React.findDOMNode(this),
            computedStyle = getComputedStyle(node),
            itemHeight    = React.findDOMNode(this.refs.item0).offsetHeight,

            height        = ACList.heightAddenums.reduce((height, prop) => {
                return height + parseInt(computedStyle[prop]);
            }, itemHeight * this.props.itemsCount);

        node.style.maxHeight = height + 'px';
    }


    scrollList() {
        if (!this.props.list.length || this.props.selected < 0) {
            return;
        }

        let selectedNode = React.findDOMNode(this.refs[`item${this.props.selected}`]),
            node         = React.findDOMNode(this);

        node.scrollTop = selectedNode.offsetTop - node.offsetHeight / 2;
    }
}

ACList.defaultProps = {
    selected: -1,
    onItemClick: () => {}
};

ACList.heightAddenums = ['border-top-width', 'border-bottom-width', 'padding-top', 'padding-bottom'];

export default ACList;