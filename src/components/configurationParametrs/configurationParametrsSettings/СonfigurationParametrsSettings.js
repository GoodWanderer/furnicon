import { useSelector, useDispatch } from 'react-redux';
import { setConfigurationSettings, setMaterialHousing, setMaterialRearWall, setMaterialFacade } from './../../../actions/index';

import styled from 'styled-components';

import ModuleParametersSelect from './../../moduleParameters/moduleParametersСomponents/moduleParametersСomponentsSelect/ModuleParametersSelect';

import { StyledLayoutChoiseListItem, StyledLayoutChoiseList, StyledLayoutChoiseImg, StyledLayoutChoiseName, StyledLayoutChoiseTitle } from '../ConfigurationParametrs';

import { settingsSvg } from './../../../resources/img/configurationLayout';
import { closeSvg } from './../../../resources/img/moduleParameters';

const StyledLayoutChoise = styled.div`
  position: relative;
`
const StyledSettingsBlock = styled.div`
  position: absolute;
  top: 5px;
  left: calc(100% + 37px);
  width: 300px;
  box-sizing: border-box;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.32);
  z-index: 9999;
  border-radius: 4px;
`
const StyledSettingsClose = styled.div`
  position: absolute;
  top: 0;
  right: -44px;
  width: 28px;
  height: 28px;
  background: ${props => props.theme.background.blue};
  border-radius: 50px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    filter: brightness(0) invert(1);
  }
`
const StyledSettingsTitle = styled.div`
  padding: 16px;
  height: 48px;
  background: ${props => props.theme.background.blue};
  border-bottom: 1px solid #E8E8E8;

  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`
const StyledSettingsContent = styled.div`
  background: #fff;
  padding: 16px 16px 24px;
  border-radius: 4px;
`

const ConfigurationParametrsSettings = () => {
  const { configurationSettings, materials, materialHousing, materialRearWall, materialFacade } = useSelector(state => state);
  const dispatch = useDispatch();

  const onChangeConfigurationSettings = (value=!configurationSettings) => {
    dispatch(setConfigurationSettings(value))
  }

  const settingsBlockView = configurationSettings ? 
    <StyledSettingsBlock>
      <StyledSettingsClose
        onClick={() => onChangeConfigurationSettings(false)}>
        <img src={closeSvg} alt="Закрыть" />
      </StyledSettingsClose>
      <StyledSettingsTitle>Настройки</StyledSettingsTitle>
      <StyledSettingsContent>
        <ModuleParametersSelect 
          name="Материал корпуса"
          current={materialHousing?materialHousing:"Выберите материал..."}
          funcSelection={setMaterialHousing}
          list={materials}
          blockMarginTop="0px"/>
        <ModuleParametersSelect 
          name="Материал задней стенки"
          current={materialRearWall?materialRearWall:"Выберите материал..."}
          funcSelection={setMaterialRearWall}
          list={materials}/>
        <ModuleParametersSelect 
          name="Материал фасада"
          current={materialFacade?materialFacade:"Выберите материал..."}
          funcSelection={setMaterialFacade}
          list={materials}/>
      </StyledSettingsContent>
    </StyledSettingsBlock> 
    : 
    null;

  return (
    <StyledLayoutChoise>
      <StyledLayoutChoiseTitle>Настройки</StyledLayoutChoiseTitle>
      <StyledLayoutChoiseList>
        <StyledLayoutChoiseListItem
          onClick={() => onChangeConfigurationSettings()} 
          opacity={configurationSettings}
          cursor='pointer'>
          <StyledLayoutChoiseImg><img src={settingsSvg} alt="settings" /></StyledLayoutChoiseImg>
          <StyledLayoutChoiseName></StyledLayoutChoiseName>
        </StyledLayoutChoiseListItem>
      </StyledLayoutChoiseList>
      {settingsBlockView}
    </StyledLayoutChoise>
  )
} 

export default ConfigurationParametrsSettings;