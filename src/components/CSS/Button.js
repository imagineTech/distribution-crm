import styled from 'styled-components';

 const Button = styled.button`
  background-color: ${props => (props.primary ? '#222': '#008CBA')};
  border: 2px solid white;
  color: white;
  padding: 10px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  opacity: .7;
  font-family: 'Cinzel', serif;
  font-weight: bold;
  width: 300px;
  margin: 10px;
`;

const InputOne = styled.input`

`;

// export const TomatoButton = Button.extend`
//   background: #222;
//   color: white;
//   border-radius: 20px;
//   border: 2px solid white;
//   opacity: .7;
// `

const SecondButton = styled.button`
background-color: ${props => (props.primary ? '#222': '#FB9638')};
border: 3px solid white;
color: ${props => (props.primary ? 'orange': '#222')};
padding: 10px 40px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 25px;
font-family: 'Cinzel', serif;
font-weight: bold;
width: 230px;
margin: 10px 10px;

`

// export {TomatoButton};
export default Button;
export { SecondButton };
