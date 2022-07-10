import { useSelector, useDispatch } from 'react-redux';
import { setConfigurationMainPage } from '../../../actions';

import styled from 'styled-components';

import StyledButton from '../../button/Button';
import NavConfiguration from './../navConfiguration/NavConfiguration';
import { StyledRow, StyledLeft } from './../navStart/NavStart';

const StyledConfigurationPage = styled.div`
  position: relative;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 14px;
  line-height: 64px;
  text-transform: uppercase;
  color: #8F97A3;
  margin: 0 32px 0 0;
  cursor: pointer;
  &.active {
    color: #393E46;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #212121;
    }
  }
`

const NavLayout = () => {
  const { configurationMainPage } = useSelector(state => state);
  const dispatch = useDispatch();

  const btnNext = configurationMainPage !== 2 ? 
    <StyledButton onClick={() => dispatch(setConfigurationMainPage(2))} next>Далее</StyledButton> 
    : 
    null;

  return (
    <NavConfiguration>
      <StyledRow>
        <StyledLeft>
          <StyledConfigurationPage 
            onClick={() => dispatch(setConfigurationMainPage(1))}
            className={`${configurationMainPage === 1 ?'active':''}`}>макет</StyledConfigurationPage>
          <StyledConfigurationPage
            onClick={() => dispatch(setConfigurationMainPage(2))} 
            className={`${configurationMainPage === 2 ?'active':''}`}>расчет</StyledConfigurationPage>
        </StyledLeft>
        <div>
          {btnNext}
        </div>
      </StyledRow>
    </NavConfiguration>
  );
};

export default NavLayout;