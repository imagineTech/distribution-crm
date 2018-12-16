import React from "react";
import QuantityCounter from "./QuantityCounter";
const styles = {
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #ccc",
  marginBottom: "0.5em"
};
const CartList = ({ cartItems, profileData, updateQty, removeItm }) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "1em",
        marginBottom: "0.5em"
      }}
    >
      {cartItems.length > 0
        ? cartItems.map(item => {
            return (
              <div key={item.id} style={styles}>
                <p>{item.name}</p>
                <QuantityCounter
                  quantity={item.quantity}
                  onQuantityChange={qty => {
                    updateQty(profileData.id, item.id, qty);
                  }}
                />
                <p>{item.meta.display_price.with_tax.unit.formatted}</p>
                <button
                  onClick={e => {
                    removeItm(profileData.id, item.id, item.quantity);
                  }}
                >
                  X
                </button>
              </div>
            );
          })
        : "Cart is empty"}
    </div>
  );
};

export default CartList;
