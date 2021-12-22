import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const SelectCartItemCount = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce(
        (sum, cartItem) => sum + cartItem.quantity,
        0
    )
)

export const SelectCartTotal = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce(
        (prevValue, cartItem) => prevValue + cartItem.quantity * cartItem.price,
        0
    )
)
