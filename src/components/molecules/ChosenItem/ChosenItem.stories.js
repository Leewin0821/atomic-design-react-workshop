import React from 'react'
import {storiesOf} from '@kadira/storybook'
import ChosenItem from './ChosenItem'

const item = {
    'label': "Choose a number",
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
};

storiesOf('ATOM - ChosenItem', module)
    .add('with ChosenItem', () => (
        <ChosenItem label={item.label} options={item.options}/>
    ));