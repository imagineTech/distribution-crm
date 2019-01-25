import React from 'react';



//Components
import Heading from './partials/Heading';
import ProductWrapper from './partials/ProductWrapper';
import ProductComponent from './partials/ProductComponent/ProductComponent';

const SoldProducts = () => {

  return(
    <div>
      <Heading><h1>SOLD PRODUCTS</h1></Heading>
      <div style={{display: "flex", justifyContent: 'center'}}>
      <ProductWrapper>
        {/* <ProductComponent brandName="Maybelline" productDescription="Nail polish" details="New in box" retailPrice="$5.99" unitPrice="$0.28" quantity="67,265pcs" total="$18,834.20" />
        <ProductComponent brandName="Stila" productDescription="All day matte lipstick" details="New in box, The following colors: Coquille, Bonbon, Soire, Palais, Framboise, Jolie" retailPrice="$18.00" unitPrice="$6" quantity="6000pcs" total="$36,000" />
        <ProductComponent brandName="Shiseido" productDescription="Shimmering eyeshadow" details="New in box, Assorted colors: Pk302, Bl722, Vl305, Bl215" retailPrice="$18.00" unitPrice="$6.00" quantity="6000pcs" total="$36,000" />
        <ProductComponent brandName="Abercrombie & Fitch" productDescription="Fierce" details="New in box, 1.7oz Cologne for men" retailPrice="$58.58" unitPrice="$22.00" quantity="1200pcs" total="$26,400" />
        <ProductComponent brandName="Anastasia" productDescription="Beverly Hills Prism" details="New in box" retailPrice="$42" unitPrice="$21" quantity="400pcs" total="$8,400" />
        <ProductComponent brandName="Tarte" productDescription="Tarteist lip paint" details="New in box" retailPrice="$20.00" unitPrice="$4" quantity="275pcs" total="$1,000" />
        <ProductComponent brandName="Ugg" productDescription="Assorted boots" details="New in their original box. Comes with the seal of authenticity" retailPrice="$190" unitPrice="$45" quantity="1120pcs" total="$50,400" />
        <ProductComponent brandName="bareMinerals" productDescription="Sunscreen for face and body" details="New in box, Color: medium skin tones" retailPrice="$19.99" unitPrice="$6" quantity="400pcs" total="$2,400" />
        <hr/> */}
        <ProductComponent
        productImage="https://firebasestorage.googleapis.com/v0/b/distribution-crm.appspot.com/o/imgs%2Fmakeup1.jpg?alt=media&token=bb52bb65-0fac-46ed-9e37-61eeec6a4112"
        brandName="Clé de Peau"
        productDescription="Concealer"
        details="New batch, Color: Ivory"
        retailPrice="$50.50"
        unitPrice="$17"
        quantity="650pcs"/>
        <ProductComponent
        productImage="https://firebasestorage.googleapis.com/v0/b/distribution-crm.appspot.com/o/imgs%2Fmakeup2.jpg?alt=media&token=b34a4817-c4ee-4daa-83a7-5ba8aaa4191e"
        brandName="Viviscal"
        productDescription="Hair Strength Tablets"
        details="180 tablets"
        // retailPrice="$50.50"
        unitPrice="$20"
        quantity="1700pcs"/>
        <ProductComponent
        productImage="https://firebasestorage.googleapis.com/v0/b/distribution-crm.appspot.com/o/imgs%2Fmakeup3.jpg?alt=media&token=87d44a82-ea37-4c7c-88f2-19f67cff8d3c"
        brandName="UGG"
        productDescription="Boots M/W"
        details="Assorted styles and sizes"
        retailPrice="$90-$270"
        unitPrice="$40"
        quantity="800pcs"/>
        <ProductComponent
        productImage="https://firebasestorage.googleapis.com/v0/b/distribution-crm.appspot.com/o/imgs%2Fmakeup4.jpg?alt=media&token=f4a1a59d-d308-41eb-9406-708cd1d126d0"
        brandName="Shiseido"
        productDescription="Lip Gloss"
        details="Color: Baby Doll"
        // retailPrice="$50.50"
        unitPrice="$4"
        quantity="3600pcs"/>
        <ProductComponent
        productImage="https://firebasestorage.googleapis.com/v0/b/distribution-crm.appspot.com/o/imgs%2Fmakeup5.jpg?alt=media&token=98999432-5063-4608-9358-857dc8567596"
        brandName="Laura Mercier"
        productDescription="Flawless Face Palette Tan Makeup Set"
        // details="New batch, Color: Ivory"
        // retailPrice="$50.50"
        unitPrice="$5"
        quantity="800pcs"/>
        <ProductComponent
        productImage="https://firebasestorage.googleapis.com/v0/b/distribution-crm.appspot.com/o/imgs%2Fmakeup6.png?alt=media&token=6d3608bb-b328-48a2-82a8-866c22550e1e"
        brandName="Too Faced "
        productDescription="Lipstick"
        details="Boxed, Color: Naked Dolly"
        // retailPrice="$50.50"
        unitPrice="$2"
        quantity="6000pcs"/>
        <ProductComponent
        productImage="https://firebasestorage.googleapis.com/v0/b/distribution-crm.appspot.com/o/imgs%2Fmakeup7.PNG?alt=media&token=a54f5118-0603-4e08-a70a-78a4f505347f"
        brandName="Issey Miyake"
        productDescription="Nuit D'issey"
        details="Boxed"
        retailPrice="$36"
        unitPrice="$7"
        quantity="400pcs"/>
        <ProductComponent
        productImage="https://firebasestorage.googleapis.com/v0/b/distribution-crm.appspot.com/o/imgs%2Fmakeup8.PNG?alt=media&token=07c9337c-0492-4d64-91f8-98f40415238b"
        brandName="Laura Mercier"
        productDescription="Second Skin"
        details="Boxed, .13oz"
        retailPrice="$25"
        unitPrice="$5"
        quantity="3400pcs"/>
      </ProductWrapper>
      </div>
    </div>
  )
}

export default SoldProducts;
