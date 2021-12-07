import './info-table.styles.scss'
import { Component } from "react";

class InfoTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: 'John Doe',
                email: 'johnny@dodo.com',
                phone: '123-123-456'
        }
    }
    render() {
        return (
            <div className='info-table'>
                {
                    <ul>
                        <li>Name: {this.state.name}</li>
                        <li>Email: {this.state.email} </li>
                        <li>Phone: {this.state.phone} </li>
                    </ul> 
                }
            </div>
        )
    }
}

export default InfoTable;
