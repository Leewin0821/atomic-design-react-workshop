import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Button from './Button'

storiesOf('ATOM - Button', module)
  .add('with text', () => (
    <Button />
  ))

//TODO: changed to with primary default dashed danger
