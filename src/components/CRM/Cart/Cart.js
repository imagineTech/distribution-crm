import React from 'react';
// import ProductItems from '../../Product/subcomponents/ProductItems';

// const Moltin = MoltinGateway({
//   client_id: '{ authUser.uid }'
// })
// const referenceId= '{ cart.cartItems.id }'

// const Cart = (cart, cartItems, products) => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <div key = { cart.cartItems[id] }>
// 	     { products.map(product => {
// 	     	<div key = { product.id }>
// 	     		<h2> {product.name }</h2>
// 	     		<h2> {product.description }</h2>
// 	     	</div>
// 	     })}
//       </div>
//     </div>
//   );
// } 
const MoltinGateway = require('@moltin/sdk').gateway

const Moltin = MoltinGateway({
  client_id: '{ authUser.uid }'
})

const reference = '{  }'

Moltin.cart( reference )
	.CartItems()
	.then(cart => {
		console.log(CartItems.all)
	})

const Cart = () => {

}


export default Cart;
