import styled from 'styled-components';

import ConfigurationParametrsMezzanine from './configurationParametrsMezzanine/ConfigurationParametrsMezzanine';
import ConfigurationParametrsWalls from './configurationParametrsWalls/ConfigurationParametrsWalls';
import ConfigurationParametrsSettings from './configurationParametrsSettings/СonfigurationParametrsSettings';

import StyledConteiner from './../styledGlobal/StyledConteiner';

const StyledLayoutChoise = styled.div`
  margin: 24px 0 0;
`
const StyledRow = styled.div`
  display:flex;
  align-items:center;
`
export const StyledLayoutChoiseItem = styled.div`
  /* margin: 0 50px 0 0; */
`
export const StyledLayoutChoiseTitle = styled.div`
  font-family: 'Inter';
  text-transform: uppercase;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #8F97A3;
`
export const StyledLayoutChoiseList = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 12px 36px 0 0;
`
export const StyledLayoutChoiseListItem = styled.div`
  margin: 0 8px 0 0;
  opacity: ${props => props.opacity || 0.21};
  cursor: ${props => props.cursor || 'default'};
  &:last-child {
    margin: 0;
  }
`
export const StyledLayoutChoiseImg = styled.div`
  width: 48px;
  height: 48px;
  img {
    width: 100%;
    height: 100%;
  }
`
export const StyledLayoutChoiseName = styled.p`
  display: block;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  height: 15px;
  color: #393E46;
  padding: 0 0 0 1px;
  margin: 4px 0 0;
`

const ConfigurationParametrs = () => {
  return (
    <StyledLayoutChoise>
      <StyledConteiner>
        <StyledRow>
          <ConfigurationParametrsMezzanine />
          <ConfigurationParametrsWalls />
          <ConfigurationParametrsSettings />
        </StyledRow>
      </StyledConteiner>
    </StyledLayoutChoise>
  );
};

export default ConfigurationParametrs;