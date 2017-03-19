import React, {Component} from 'react'
import { Select } from '../../atoms'

class ChosenItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'label': props.label
        }
    }

    render() {
        return (
            <div>
                <label>{this.state.label}</label>
                <Select options={this.props.options}/>
            </div>
        )
    }
}

export default ChosenItem