import Styled from 'styled-components';

//This contains the image next to the about content.
const Portrait = Styled.div`
  background: url(${process.env.PUBLIC_URL}/sample-pics/img9.jpg) no-repeat;
  background-size: cover;
  width: 490px;
  height: 390px;
  display: inline-block;
  margin: 0 30px;
  border: 10px solid #222;
  border-radius: 5px;
`
export default Portrait;
