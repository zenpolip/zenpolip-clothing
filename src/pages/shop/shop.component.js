import { Component } from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data'
import ShopList from '../../components/shop-list/shop-list.component';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: SHOP_DATA,
        };
    }
    
    render() {
        return (
            <div>
                <p>SHOP PAGE</p>
                {
                    this.state.sections.map(({ id, ...otherProps }) => (                
                        <ShopList key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

export default Shop;
