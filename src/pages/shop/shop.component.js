import { Component } from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data'

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
       
    }
    render() {
        return (
            <div>
                <p>SHOP PAGE</p>  
                {
                    SHOP_DATA.map(({id, title}) => (
                        <p key={id}>{title}</p>
                    ))
                }
                );
            </div>
        )
    }
}

export default Shop;
