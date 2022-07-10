import styled from 'styled-components';

import NavConfiguration from './../navConfiguration/NavConfiguration';
import StyledButton from '../../button/Button';

import { img01 } from '../../../resources/img/nav';

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`
export const StyledLeft = styled.div`
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
    }
    span {
      font-family: 'SFProMedium';
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
      margin: 0 0 0 15px;
    }
`

const NavStart = ({onSetPage}) => {
  return (
    <NavConfiguration>
      <StyledRow>
        <StyledLeft>
          <img src={img01} alt="img" />
          <span>#001</span>
        </StyledLeft>
        <div>
          <StyledButton 
            next
            onClick={() => onSetPage()}
            >Далее</StyledButton>
        </div>
      </StyledRow>
    </NavConfiguration>
  );
};

export default NavStart;