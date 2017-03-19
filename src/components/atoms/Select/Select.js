import React, {Component} from 'react'

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'value' : {}
        };
        this.options = props.options;
        this.handleChange = this.handleChange.bind(this);
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
            <select value={this.state.value} onChange={this.handleChange}>
                {options}
            </select>
        )
    }
}

export default Select