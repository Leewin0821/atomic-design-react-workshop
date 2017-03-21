import React, {Component} from 'react'

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'value' : {}
        };
        this.options = (this.hasOptions(props)) ?
            props.options : [{'text':'Please select', 'value': ''}];
        this.handleChange = this.handleChange.bind(this);
    }

    hasOptions() {
        return this.props.options && this.props.options.length
    }
    handleChange(event) {
        this.setState({
            'value' : event.target.value
        })
    }
    render() {
        const options = this.options.map((option)=>{
            return (
                <option value={option.value}>{option.text}</option>
            )
        });
        return (
            <select disabled={!this.hasOptions()} value={this.state.value} onChange={this.handleChange}>
                {options}
            </select>
        )
    }
}

export default Select