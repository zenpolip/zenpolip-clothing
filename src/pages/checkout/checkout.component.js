import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { selectCartItem, SelectCartTotal } from '../../redux/cart/cart.selector';
import './checkout.styles.scss';

const Checkout = ({ cartItems, totalPrice }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>PRODUCT</span>
                </div>
                <div className="header-block">
                    <span>DESCRIPTION</span>
                </div>
                <div className="header-block">
                    <span>QUANTITY</span>
                </div>
                <div className="header-block">
                    <span>PRICE</span>
                </div>
                <div className="header-block">
                    <span>REMOVE</span>
                </div>
            </div>
            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))
            }
            <div className="total">TOTAL: ${totalPrice}</div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    totalPrice: SelectCartTotal
})

export default connect(mapStateToProps)(Checkout);
