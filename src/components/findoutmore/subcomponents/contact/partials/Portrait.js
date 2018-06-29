import Styled from 'styled-components';

const Portrait = Styled.div`
  background: url(${process.env.PUBLIC_URL}/sample-pics/shake1.jpg)no-repeat;
  background-size: cover;
  width: 400px;
  height: 300px;
  border: 4px solid black;
  border-radius: 5px;
`

export default Portrait;
