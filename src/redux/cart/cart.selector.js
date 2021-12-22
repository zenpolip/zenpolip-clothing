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