import React from "react";
import ShopItem from "../shop-item/shop-item.component";
import './shop-list.styles.scss'

const ShopList = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, index) => index < 4)
                        .map((item) => (
                            <ShopItem key={item.id} item={item} />
                        ))
                }
            </div>
        </div>
    )
}

export default ShopList;
