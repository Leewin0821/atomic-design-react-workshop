import React from 'react'
import {storiesOf} from '@kadira/storybook'
import MultipleDropdownList from './MultipleDropdownList'

const dropdownLists = [
    {
        'label': "Car make",
        'options': [{
            'text': 'Benz',
            'value': 'benz'
        }, {
            'text': 'BMW',
            'value': 'bmw'
        }, {
            'text': 'Audi',
            'value': 'audi'
        }]
    },
    {
        'label': "Car model",
        'options': [{
            'text': 'one',
            'value': 'one'
        }, {
            'text': 'two',
            'value': 'two'
        }, {
            'text': 'three',
            'value': 'three'
        }]
    },
];

storiesOf('ORGANISMS - MultipleDropdownList', module)
    .add('with MultipleDropdownList', () => (
        <MultipleDropdownList dropdownLists={dropdownLists} />
    ));