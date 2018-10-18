import styled from 'styled-components';

const LandingButton = styled.div`
  width: ${props => (props.primary ? '400px' : '300px')};
  height: 35px;
  background: ${props => (props.primary ? 'rgba(28, 15, 12)' : 'rgba(28, 15, 12)')};
  margin: auto;
  color: white;
  text-align: center;
  line-height: 35px;
  border-radius: ${props => (props.primary ? '5px' : 0)}
`
export default LandingButton;
