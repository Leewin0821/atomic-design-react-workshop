import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Select from './Select'

const options = [{
    'text': 'one',
    'value': 'one'
}, {
    'text': 'two',
    'value': 'two'
}, {
    'text': 'three',
    'value': 'three'
}];

storiesOf('ATOM - Select', module)
    .add('with select', () => (
        <Select options={options}/>
    ))