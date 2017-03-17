import React from 'react'
import {storiesOf} from '@kadira/storybook'
import Button from './Button'

storiesOf('ATOM - Button', module)
    .add('with default text', () => (
        <Button type="default" />
    ))
    .add('with primary text', () => (
        <Button type="primary" />
    ))
    .add('with danger text', () => (
        <Button type="danger" />
    ))

//TODO: changed to with primary default dashed danger
