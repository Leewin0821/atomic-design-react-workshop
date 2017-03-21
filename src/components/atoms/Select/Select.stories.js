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
    .add('with no option select', () => (
        <Select options={[]}/>
    ))
    .add('with has options select', () => (
    <Select options={options}/>
))