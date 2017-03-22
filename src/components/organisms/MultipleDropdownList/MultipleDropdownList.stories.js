import React from 'react'
import {storiesOf} from '@kadira/storybook'
import MultipleDropdownList from './MultipleDropdownList'

const dataModel = {
    'band': ['Benz', 'BMW', 'Audi'],
    'Benz': ['C200L', 'E260L', 'S300L'],
    'BMW' : ['320i', '525i', '730i'],
    'Audi' : ['A4L', 'A6L', 'A8L'],
};

storiesOf('ORGANISMS - MultipleDropdownList', module)
    .add('with MultipleDropdownList', () => (
        <MultipleDropdownList dataModel={dataModel}/>
    ));