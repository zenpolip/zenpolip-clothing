import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import { selectCartItem } from '../../redux/cart/cart.selector';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {
                    cartItems.length ? (
                        cartItems.map(({ id, ...otherProps }) => (
                            <CartItem key={id} {...otherProps} />
                        ))
                    )
                        : (
                            <span className="empty-message">Your cart is empty</span>
                        )
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})

export default connect(mapStateToProps)(CartDropdown);
