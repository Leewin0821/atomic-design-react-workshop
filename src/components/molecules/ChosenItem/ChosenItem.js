import React, {Component} from 'react'
import { Select } from '../../atoms'

class ChosenItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <Select pickOption={this.props.pickOption} options={this.props.options}/>
            </div>
        )
    }
}

export default ChosenItem