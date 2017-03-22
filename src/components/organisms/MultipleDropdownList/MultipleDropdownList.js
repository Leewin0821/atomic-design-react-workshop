import React, {Component} from 'react'
import { ChosenItem } from '../../molecules'

class MultipleDropdownList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataModel : Object.assign({}, {'band':this.props.dataModel.band})
        }
    }

    pickOption(value) {
        // this.setState({
        //     dataModel : Object.assign(this.state.dataModel, {
        //         value : this.props.dataModel[value]
        //     })
        // })
    }

    render() {
        let dropdownLists = Object.keys(this.state.dataModel).map((key)=>{
            return <ChosenItem label={key} options={this.state.dataModel[key]}
                                pickOption={this.pickOption} />
        });
        return (
            <div>
                {dropdownLists}
                <button>Find your car</button>
            </div>
        )
    }
}

export default MultipleDropdownList