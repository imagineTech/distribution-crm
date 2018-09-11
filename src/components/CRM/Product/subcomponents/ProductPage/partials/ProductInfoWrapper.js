import styled from 'styled-components'

export const ProductInfoWrapper = styled.div`
	@media all and (min-width: 1250px) {
	  position: relative;
	  float: right;
	  margin-top: 75px;
	  padding: 50px 0px 20px 0px;
	  right: 10%;
	  height: 75%;
	  width: 500px;
	}

	@media all and (max-width: 1249px) {
	  position: relative;
	  margin-top: 75px;
	  margin: auto;
	  padding: 50px 0px 20px 0px;
	  height: 75%;
	  width: 500px;
	}
`

export default ProductInfoWrapper;