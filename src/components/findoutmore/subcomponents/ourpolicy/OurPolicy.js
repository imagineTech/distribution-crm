import React from 'react';

//partials

import OurPolicyContainer from './partials/OurPolicyContainer';

//Main OurPolicy component. Contains all components related to our policy.
const OurPolicy = () => {
  return(
    <OurPolicyContainer>
      <h3>Return Policy:</h3>Due to the delicate nature of the products we offer, availability inconsistency, and high shipping rates, we only accept returns under the following circumstances.

      <ul>
        <li>Product is not as described. Examples of this are as follow: the quantity of product received does not match the provided invoice (Please note that in order for your claim to be valid, you must provide sufficient evidence that satisfies our “quantity control guidelines”. For acceptable forms of proof, and or further instructions, please refer to the “quantity control guidelines” listed under the “Quality control Measures” section). More than 5% of the products have damages not specified in the provided product description. Boxing, casing or other product features are difference from the provided description. The expiration date, or batch code does not match the one included in the product description (Note: if the expiration date, batch code, or upc number is not included in the product description, it is the customer’s responsibility to ask for one, and to decide whether to purchase the product or not. If you purchase a product that does not include these details, you automatically agree to take the product in its current expiration date. Kupido Wholesale is no longer responsible for this product’s listed date.)</li>
        <li>Kupido Wholesale has exceeded the handling time limit policy by more than 5 business days, without a verbal or written explanation (Please see our “shipping and handling policy” under the “Our Policy” Section).</li>
        <li>You have been given verbal or written consent by an official Kupido Wholesale representative. </li>
      </ul>

      Shipping and Handling costs: Kupido Export agrees to cover the full shipping and handling costs to return the customer purchased products, the following criteria must be met:

      <ul>
        <li>The product being returned is the same exact product, condition, and quantity the customer received at the time of arrival, which was purchased from Kupido Wholesale LLC.</li>
        <li>The reason for the product return request falls under the “Product not as described” and or “Exceeded handling time limit” policy. NOTE: Kupido Wholesale does not cover shipping and handling costs under the “verbal or written consent” policy, unless otherwise specified by an official Kupido Wholesale representative.</li>
        <li>The customer agrees to ship the product to a Kupido Wholesale LLC specified location.</li>
        <li>The customer agrees to accept shipping labels, shipping company accounts, and or other forms of shipping and handling cost payments. NOTE: Kupido export is not responsible for extra surcharges or fees (Including re-purchasing shipping labels) that arise from shipping untimeliness, and or negligence caused by the customer.</li>
      </ul>

      Returning the funds: Kupido Wholesale LLC agrees to return the full amount of the funds collected from the customer, upon successful verification from a Kupido Wholesale LLC official representative, stating that the return request meets all Return Policy guidelines. Customer must be willing to accept various methods of fund return methods such as bank wires, paypal and other online platforms, bank transfers, etc. Kupido Wholesale LLC has a maximum of five business days to return the funds. Please note that this time limit is automatically extended due to customer’s failure to take the actions required to collect the money after Kupido Wholesale LLC has taken the proper actions. The extension period is equal to the amount of business days which the customer has failed to take action.
    </OurPolicyContainer>
  )
}

export default OurPolicy;
