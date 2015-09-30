/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import HelloWorld from './hello';

import AutoCompleteBox from './auto-complete';
import listAction from './list-action-mock';

React.render(
    <HelloWorld phrase="ES678"/>,
    document.getElementById('test')
);


listAction.select = (string) => {
    document.getElementById('result').textContent = `Selected item first name is ${string}`;
};


React.render(
    <AutoCompleteBox minLetters = {2}
                     maxItems = {0}
                     debounce = {2000}
                     placeholder = 'Start typing...'
                     error = 'Sorry, could not find anything'/>,
    document.getElementById('select')
);

