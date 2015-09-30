/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import ACInputButton from './auto-complete-input-button';
import _ from 'underscore';


class ACInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleSearch = _.debounce(this.handleSearch.bind(this), props.debounce);
    }


    render() {
        let {onSearch, onChange, placeholder, loading} = this.props;

        return <div className = 'input-group'>
                    <input placeholder = {placeholder}
                           className = 'form-control'
                           onChange = {this.handleChange.bind(this)}
                           value = {this.state.value}
                           type = 'text' />
                    <ACInputButton className = 'glyphicon loader'
                                   show = {loading} />
                    <ACInputButton className = 'glyphicon glyphicon-search'
                                   onClick = {onSearch}
                                   show = {!loading} />
                    <ACInputButton className = 'glyphicon glyphicon-remove'
                                   onClick = {onChange.bind(null, '')} />
                </div>;
    }


    handleSearch() {
        this.props.onChange(this.state.value);
    }


    handleChange(event) {
        this.setState({
            value: event.target.value
        });

        this.handleSearch();
    }
}


export default ACInput;