/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import HelloWorld from './components/hello/hello';
import Result from './components/result/result';

import AutoCompleteBox from './components/auto-complete/auto-complete';


React.render(
    <HelloWorld phrase = 'ES678'/>,
    document.getElementById('test')
);


React.render(
    <Result />,
    document.getElementById('result')
);


React.render(
    <AutoCompleteBox
        debounce    = {2000}
        error       = 'Sorry, could not find anything'
        itemsCount  = {5}
        minLetters  = {2}
        placeholder = 'Start typing...'/>,
    document.getElementById('select')
);