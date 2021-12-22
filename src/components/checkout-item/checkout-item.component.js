import { connect } from 'react-redux';
import './checkout-item.styles.scss';
import { clearItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ item, clearItem }) => {
    const { imageUrl, name, quantity, price } = item;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(item)}>
                &#10005;
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
