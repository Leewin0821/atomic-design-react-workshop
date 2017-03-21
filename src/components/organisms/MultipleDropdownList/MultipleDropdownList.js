import React, {Component} from 'react'
import { ChosenItem } from '../../molecules'

class MultipleDropdownList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let dropdownLists = this.props.dropdownLists.map((dropdownList)=>{
            return <ChosenItem label={dropdownList.label} options={dropdownList.options}/>
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