/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import HelloWorld from './components/hello/hello';
import Result from './components/result/result';

import AutoCompleteBox from './components/auto-complete/auto-complete';


React.render(
    <HelloWorld phrase="ES678"/>,
    document.getElementById('test')
);


React.render(
    <Result />,
    document.getElementById('result')
);


React.render(
    <AutoCompleteBox placeholder = 'Start typing...'
                     minLetters  = {2}
                     itemsCount  = {5}
                     debounce    = {2000}
                     error       = 'Sorry, could not find anything'/>,
    document.getElementById('select')
);