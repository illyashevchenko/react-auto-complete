/**
 * Created by Illia_Shevchenko on 28.09.2015.
 */
import React from 'react';
import HelloWorld from './hello';
import AutoCompleteBox from './auto-complete';

React.render(
    <HelloWorld phrase="ES678"/>,
    document.getElementById('test')
);

let list = [
        {
            "registered": "Thursday, August 7, 2014 1:38 PM",
            "firstName": "Blevins",
            "name": {
                "last": "Mcleod",
                "firstName": "Stephanie"
            },
            "index": 0
        },
        {
            "registered": "Wednesday, December 10, 2014 5:05 PM",
            "firstName": "Reilly",
            "name": {
                "last": "Solomon",
                "firstName": "Dixon"
            },
            "index": 1
        },
        {
            "registered": "Monday, March 24, 2014 5:50 AM",
            "firstName": "Stevens",
            "name": {
                "last": "Burton",
                "firstName": "Alvarado"
            },
            "index": 2
        },
        {
            "registered": "Saturday, February 8, 2014 10:51 AM",
            "firstName": "Mitchell",
            "name": {
                "last": "Powers",
                "firstName": "Gillespie"
            },
            "index": 3
        },
        {
            "registered": "Tuesday, June 23, 2015 2:26 AM",
            "firstName": "Sutton",
            "name": {
                "last": "Camacho",
                "firstName": "Sherrie"
            },
            "index": 4
        },
        {
            "registered": "Wednesday, July 1, 2015 9:47 AM",
            "firstName": "Fannie",
            "name": {
                "last": "Payne",
                "firstName": "Bowen"
            },
            "index": 5
        },
        {
            "registered": "Tuesday, July 14, 2015 2:38 AM",
            "firstName": "Floyd",
            "name": {
                "last": "Barlow",
                "firstName": "Kerri"
            },
            "index": 6
        },
        {
            "registered": "Monday, July 14, 2014 5:57 AM",
            "firstName": "Cain",
            "name": {
                "last": "Ferrell",
                "firstName": "Elena"
            },
            "index": 7
        },
        {
            "registered": "Saturday, April 12, 2014 7:55 PM",
            "firstName": "Powers",
            "name": {
                "last": "Lloyd",
                "firstName": "Rita"
            },
            "index": 8
        },
        {
            "registered": "Saturday, September 19, 2015 5:58 AM",
            "firstName": "Ora",
            "name": {
                "last": "Farmer",
                "firstName": "Cooley"
            },
            "index": 9
        },
        {
            "registered": "Thursday, July 3, 2014 8:02 AM",
            "firstName": "Brown",
            "name": {
                "last": "Kirby",
                "firstName": "Harrison"
            },
            "index": 10
        },
        {
            "registered": "Sunday, December 21, 2014 9:55 AM",
            "firstName": "Rogers",
            "name": {
                "last": "Mosley",
                "firstName": "Wanda"
            },
            "index": 11
        },
        {
            "registered": "Friday, April 3, 2015 4:51 PM",
            "firstName": "Acevedo",
            "name": {
                "last": "Joyce",
                "firstName": "Kane"
            },
            "index": 12
        },
        {
            "registered": "Saturday, April 26, 2014 10:15 AM",
            "firstName": "Rios",
            "name": {
                "last": "Mccoy",
                "firstName": "Amie"
            },
            "index": 13
        },
        {
            "registered": "Sunday, November 16, 2014 10:38 AM",
            "firstName": "Amanda",
            "name": {
                "last": "Hull",
                "firstName": "Katie"
            },
            "index": 14
        },
        {
            "registered": "Thursday, September 17, 2015 1:12 PM",
            "firstName": "Kimberley",
            "name": {
                "last": "Humphrey",
                "firstName": "Veronica"
            },
            "index": 15
        },
        {
            "registered": "Thursday, July 2, 2015 6:51 AM",
            "firstName": "Montoya",
            "name": {
                "last": "Bradford",
                "firstName": "Preston"
            },
            "index": 16
        },
        {
            "registered": "Sunday, April 12, 2015 3:08 AM",
            "firstName": "May",
            "name": {
                "last": "Holloway",
                "firstName": "Tricia"
            },
            "index": 17
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finley",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finle",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Wednesday, March 18, 2015 3:10 AM",
            "firstName": "Finl",
            "name": {
                "last": "Shepherd",
                "firstName": "Pat"
            },
            "index": 18
        },
        {
            "registered": "Tuesday, June 10, 2014 7:04 AM",
            "firstName": "Alisha",
            "name": {
                "last": "Armstrong",
                "firstName": "Woodward"
            },
            "index": 19
        }
    ],

    onSelect = (string) => {
        document.getElementById('result').textContent = `Selected item first name is ${string}`;
    };


React.render(
    <AutoCompleteBox list = {list} itemKey = 'firstName' onSelect = {onSelect} minLetters = {2} maxItems = {0} placeholder = 'Start typing...'/>,
    document.getElementById('select')
);

