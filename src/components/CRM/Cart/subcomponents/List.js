import React from 'react';
import QuantityCounter from './QuantityCounter';

const CartList = ({ cartItems, auth, updateQty, removeItm }) => {
    return (
        <div>
            {cartItems.map(item => {
            return(
                <div key={item.id}>
                    <QuantityCounter
                        quantity={item.quantity}
                        onQuantityChange={(qty) => {
                        updateQty(auth.uid, item.id, qty);
                    }}/>
                    <span>{item.name}</span>
                    <span>{item.meta.display_price.with_tax.unit.formatted}</span>
                    <button onClick={e => {
                        removeItm(auth.uid, item.id, item.quantity);
                        }}>Remove item
                    </button>
                </div>
            )
            })}
        </div>
    )
}

export default CartList;