/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';

class AutoCompleteInput extends React.Component {
    render() {
        return <div className='dropdown'>
                    <input type='text' className='form-control' placeholder='Start typing...'/>
                    <ul className='dropdown-menu'>
                        <li><a>Option 1</a></li>
                        <li><a>Option 2</a></li>
                        <li><a>Option 3</a></li>
                        <li><a>Option 4</a></li>
                        <li><a>Option 5</a></li>
                        <li><a>Option 6</a></li>
                        <li><a>Option 7</a></li>
                        <li><a>Option 8</a></li>
                        <li><a>Option 9</a></li>
                    </ul>
                </div>;
    }
}

export default AutoCompleteInput;