import React from 'react'
import styles from './Button.css'

const BUTTONS = {
    'default': {
        'text' : 'Default'
    },
    'primary': {
        'text' : 'Primary',
        'onClick': () => console.info('Awesome!')
    },
    'danger': {
        'text' : 'Danger',
        'onClick': () => alert('Danger!')
    }
}

function Button({type}) {
    return <button className={styles[type]} onClick={BUTTONS[type].onClick}>{BUTTONS[type].text}</button>
}

export default Button