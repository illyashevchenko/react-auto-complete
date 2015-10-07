/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import HelloWorld from './components/hello/hello';
import Result from './containers/result-container';

import AutoCompleteBox from './containers/auto-complete-container';


React.render(
    <HelloWorld phrase = 'ES6'/>,
    document.getElementById('test')
);


React.render(
    <Result />,
    document.getElementById('result')
);


React.render(
    <AutoCompleteBox
        debounce    = {500}
        errorMsg    = 'Sorry, could not find anything'
        itemsCount  = {5}
        minLetters  = {2}
        placeholder = 'Start typing...'/>,
    document.getElementById('select')
);