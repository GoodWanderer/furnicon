import styled from "styled-components";

import StyledConteiner from './../styledGlobal/StyledConteiner';
import HeaderLogo from './headerLogo/HeaderLogo';
import Navlocation from './../nav/navlocation/Navlocation';
import NavGeneral from './../nav/navGeneral/NavGeneral';

const StyledHeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`

const Header = () => {
  return (
    <header className="header">
      <StyledConteiner>
        <StyledHeaderMain>
          <HeaderLogo/>
          <NavGeneral/>
        </StyledHeaderMain>
        <Navlocation/>
      </StyledConteiner>
    </header>
  );
};

export default Header;