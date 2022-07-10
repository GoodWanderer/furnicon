import styled from "styled-components";

const StyledLogo = styled.div`
 & > a {
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  color: #393E46;
 } 
`

const HeaderLogo = () => {
  return (
    <StyledLogo>
      <a href="/">Furnicom Builder</a>
    </StyledLogo>
  );
};

export default HeaderLogo;