import React, {Component} from 'react'

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time : new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(()=>{
            this.tick()
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    render() {
        return (
            <div>{this.state.time.toLocaleTimeString()}</div>
        )
    }
    tick() {
        this.setState({
            time : new Date()
        })
    }
}

export default Clock