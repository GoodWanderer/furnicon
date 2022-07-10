
import styled from 'styled-components';

const StyledContein = styled.div`
	max-width: ${props => props.theme.maxWidthContainer};
	width: 100%;
	margin: 0 auto;
` 

const StyledConteiner = (props) => {
  return <StyledContein {...props}/>
};

export default StyledConteiner;