import styled from 'styled-components';

import { profileSvg } from "../../../resources/img/header";

const StyledList = styled.ul`
  display: flex;
  align-items: center;
` 

const StyledItem = styled.li`
  margin: 0 0 0 24px;
  & > a {
    display: flex;
    align-items: center;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 14px;
    line-height: 60px;
    color: #393E46;
    span {
      line-height: 58px;
      margin: 0 0 0 5px;
    }
    img {
      width: 20px;
      height: 20px;
      margin: -1px 0 0;
    }
  }
`

const NavGeneral = () => {
  return (
    <nav>
      <StyledList>
        <StyledItem><a href="/">Проекты</a></StyledItem>
        <StyledItem><a href="/">Шаблоны</a></StyledItem>
        <StyledItem><a href="/"><img src={profileSvg} alt="profile" /><span>Арман</span></a></StyledItem>
      </StyledList>
    </nav>
  );
};

export default NavGeneral;