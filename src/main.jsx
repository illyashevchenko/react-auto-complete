/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import HelloWorld from './hello';
import AutoCompleteInput from './auto-complete';

React.render(
    <HelloWorld phrase="ES678"/>,
    document.getElementById('test')
);

React.render(
    <AutoCompleteInput phrase="ES678"/>,
    document.getElementById('select')
);