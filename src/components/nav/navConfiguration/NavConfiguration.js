
import styled from 'styled-components';

import StyledConteiner from './../../styledGlobal/StyledConteiner';

const StyledContent = styled(StyledConteiner)`
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  height: 64px;
`

const NavConfiguration = ({children}) => {
  return (
    <div className="currentPositionPanel">
      <StyledContent>{children}</StyledContent>
    </div>
  );
};


export default NavConfiguration;