import { useSelector } from 'react-redux';
import { setModulesSelectedUp, setModulesSelectedDown, setModulesSelectedUp2, setModulesSelectedDown2, setModulesSelectedMiddle, setModulesSelectedMiddle2 } from './../../actions/index';

import WidthPlan from './../widthPlan/WidthPlan';
import ListModulesSelected from './../listModules/listModulesSelected/ListModulesSelected';
import DragAndDropMiddle from './../dragAndDrop/dragAndDropMiddle/DragAndDropMiddle';

const ConfigurationMap = ({ sizeWidth }) => {
  const {configuration, wall, modulesSelectedUp, modulesSelectedUp2, modulesSelectedDown, modulesSelectedDown2, modulesSelectedMiddle, modulesSelectedMiddle2} = useSelector(state => state);

  const configurationView = wall === 1 ? 
      <div
        style={{width: `calc(${sizeWidth}% + 12px`}}
        className="configuration-layout-plan__wrapper-modeules">
        <DragAndDropMiddle 
          arr={modulesSelectedMiddle} 
          updateArrFunction={setModulesSelectedMiddle}>
          <ListModulesSelected 
            arrUp={modulesSelectedUp} 
            arrDown={modulesSelectedDown} 
            updateArrFunctionUp={setModulesSelectedUp} 
            updateArrFunctionDown={setModulesSelectedDown} 
            arrMiddle={modulesSelectedMiddle}
            listNum={1}/>
        </DragAndDropMiddle>
      </div> 
    : 
    <div
      style={{width: `calc(${sizeWidth}% + 12px`}}
      className="configuration-layout-plan__wrapper-modeules">
        <DragAndDropMiddle 
          arr={modulesSelectedMiddle2} 
          updateArrFunction={setModulesSelectedMiddle2}>
          <ListModulesSelected 
            arrUp={modulesSelectedUp2} 
            arrDown={modulesSelectedDown2} 
            updateArrFunctionUp={setModulesSelectedUp2} 
            updateArrFunctionDown={setModulesSelectedDown2} 
            arrMiddle={modulesSelectedMiddle2}
            listNum={2}/>
        </DragAndDropMiddle>
    </div>;

  const renderMap = () => {
    switch (configuration) {
      case 'Прямая':
      case 'Островок':
        return (
          <>
            <div style={{height: '50px'}}></div>
            <WidthPlan />
            <div 
              style={{width: `calc(${sizeWidth}% + 12px`}} 
              className="configuration-layout-plan__wrapper-modeules">
              <DragAndDropMiddle arr={modulesSelectedMiddle} updateArrFunction={setModulesSelectedMiddle}>
                <ListModulesSelected 
                  arrUp={modulesSelectedUp} 
                  arrDown={modulesSelectedDown} 
                  updateArrFunctionUp={setModulesSelectedUp} 
                  updateArrFunctionDown={setModulesSelectedDown} 
                  arrMiddle={modulesSelectedMiddle}
                  listNum={1}/>
              </DragAndDropMiddle>
            </div>
            <div style={{height: '35px'}}></div>
          </>
        )
      case 'Паралельная':
      case 'Угловая':
        return (
          <>
            <div style={{height: '50px'}}></div>
            <WidthPlan />
            {configurationView}
            <div style={{height: '35px'}}></div>
          </>
        )
      default:
        return null;
    }
  }

  return renderMap();
};

export default ConfigurationMap;