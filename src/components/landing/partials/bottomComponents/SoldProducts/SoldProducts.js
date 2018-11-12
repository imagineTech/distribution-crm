import React from 'react';



//Components
import Heading from './partials/Heading';
import ProductWrapper from './partials/ProductWrapper';
import ProductComponent from './partials/ProductComponent/ProductComponent';

const SoldProducts = () => {



  return(
    <div>
      <Heading>Products we have sold</Heading><hr />
      <ProductWrapper>
        <ProductComponent brandName="Maybeline" productDescription="Nailpolish" details="New in box" retailPrice="$5.99" unitPrice="$0.28" quantity="67,265pcs" total="$18,834.20" />
        <ProductComponent brandName="Stila" productDescription="All day matte lipstick" details="New in box, The following colors: Coquille, Bonbon, Soire, Palais, Framboise, Jolie" retailPrice="$18.00" unitPrice="$6" quantity="6000pcs" total="$36,000" />
        <ProductComponent brandName="Shiseido" productDescription="Shimmering eyeshadow" details="New in box, Assorted colors: Pk302, Bl722, Vl305, Bl215" retailPrice="$18.00" unitPrice="$6.00" quantity="6000pcs" total="$36,000" />
        <ProductComponent brandName="Abercrombie&Fitch" productDescription="Fierce" details="New in box, 1.7oz Cologne for men" retailPrice="$58.58" unitPrice="$22.00" quantity="1200pcs" total="$26,400" />
        <ProductComponent brandName="Anastasia" productDescription="Beverly Hills Prism" details="New in box" retailPrice="$42" unitPrice="$21" quantity="400pcs" total="$8,400" />
        <ProductComponent brandName="Tarte" productDescription="Tarteist lip paint" details="New in box" retailPrice="$20.00" unitPrice="$4" quantity="275pcs" total="$1,000" />
        <ProductComponent brandName="Ugg" productDescription="Assorted boots" details="New in their original box. Comes with the seal of authenticity" retailPrice="$190" unitPrice="$45" quantity="1120pcs" total="$50,400" />
        <ProductComponent brandName="Bareminerals" productDescription="Sunscreen for face and body" details="New in box, Color: medium skin tones" retailPrice="$19.99" unitPrice="$6" quantity="400pcs" total="$2,400" />
      </ProductWrapper>

    </div>
  )
}

export default SoldProducts;
