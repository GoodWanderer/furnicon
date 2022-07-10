import { useSelector } from 'react-redux';

import useModulesOperation from '../../../service/ModulesOperation';

import {selectSvg} from '../../../resources/img/parametersModule'

const ParametersModuleTechnic = ({arrMiddle, updateArrFunctionMiddle, arrDown, updateArrFunctionDown, parametersModuleShelves, onSetMaterialActive, onSetModuleTest, materialActive, setMaterialActive}) => {
  const { currentModuleSelected } = useSelector(state => state);
  const {onChangeTypeDownToMiddle} = useModulesOperation({arrMiddle, updateArrFunctionMiddle, arrDown, updateArrFunctionDown});

  const typeRender = () => {
    return (
      <>
        <li
          onClick={() => onSetModuleTest('start')} 
          className="parameters-Module-body__select-item">Полки</li>
        <li
          onClick={() => onChangeTypeDownToMiddle(currentModuleSelected.id)} 
          className="parameters-Module-body__select-item">Пенал</li>
        <li
          onClick={() => onSetModuleTest(7)} 
          className="parameters-Module-body__select-item">Под духовку</li>
        <li 
          onClick={() => onSetModuleTest(8)} 
          className="parameters-Module-body__select-item">Под мойку</li>
      </>
    )
  }

  const typeView = typeRender(); 

  return (
    <div className="parameters-Module-body__block">
      <div
        style={{alignItems: 'center'}} 
        className="parameters-Module-body__row">
        <div
          style={{margin: 0}} 
          className="parameters-Module-body__half">
          <span className="parameters-Module-body__name">Тип модуля</span>
        </div>
        <div
          style={{margin: 0}} 
          className="parameters-Module-body__half">
          <div className="parameters-Module-body__select">
            <div
              onClick={() => onSetMaterialActive(3)} 
              className="parameters-Module-body__select-row">
              <div className="parameters-Module-body__select-value">
                {currentModuleSelected?.modeles?.down?.id===7?'Под духовку':currentModuleSelected?.modeles?.down?.id===8?'Под мойку':'Полки'}
              </div>
              <img src={selectSvg} alt="Выбрать" />
            </div>
            <ul className={`parameters-Module-body__select-list ${materialActive===3?'active':''}`}>
              {typeView}
            </ul>
          </div>        
        </div>
      </div>
      {parametersModuleShelves}
    </div>
  )
};

export default ParametersModuleTechnic;