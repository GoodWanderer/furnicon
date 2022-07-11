import { useSelector } from 'react-redux';

import styled, { css } from 'styled-components';

import { arrowRigth, equalSvg } from '../../../resources/img/header';

const StyledNavLocation = styled.nav`
  position: relative;
  height: 52px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 100%;
    background-color: #393E46;
    z-index: -1;
  } 
`
const StyledRow = styled.ul`
  display: flex;
  align-items: center;
`
const StyledItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 8px 0 0;
  img {
    width: 15px;
    height: 12px;
    ${props => props.first && css`
      width: 20px;
      height: 20px;
    `}
  }
  span {
    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 52px;
    color: #fff;
    margin: 0 0 0 8px;
  }
`

const Navlocation = () => {
  const {configurationPage, configuration} = useSelector(state => state);

  const renderLocation = () => {
    if (configurationPage !== 1) 
      return (
        <StyledItem>
          <img src={arrowRigth} alt="Подстраница" />
          <span>{configuration}</span>
        </StyledItem>
      )
    return null;
  }

  const configurationPagePath = renderLocation();

  return (
    <StyledNavLocation>
      <StyledRow>
        <StyledItem first>
            <img src={equalSvg} alt="Страница" />
            <span>Проект</span>
        </StyledItem>
        {configurationPagePath}
      </StyledRow>
    </StyledNavLocation>
  );
};

export default Navlocation;