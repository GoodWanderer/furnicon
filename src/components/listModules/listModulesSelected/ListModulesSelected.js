import { useSelector } from 'react-redux';

import DragAndDropModule from './../../dragAndDrop/dragAndDropModule/DragAndDropModule';
import ListModulesAddItem from './../../listModulesItem/listModulesAddItem/ListModulesAddItem';
import useModulesOperation from './../../../service/ModulesOperation';
import useCalc from './../../../service/Calc';

const ListModulesSelected = ({arrUp, updateArrFunctionUp, arrDown, updateArrFunctionDown, arrMiddle, listNum}) => {
  const { width } = useSelector(state => state);

  const {onAddModulesSelectedUp, onAddModulesSelectedDown} = useModulesOperation({arrUp, updateArrFunctionUp, arrDown, updateArrFunctionDown, arrMiddle});
  const {calcWidthAll} = useCalc();

  const calсWidth = (arrModule) => {
    if (calcWidthAll(arrModule, arrMiddle)+400 > width) 
      return false;
    return true;
  }

  const addItemUp = calсWidth(arrUp) ?
                     <ListModulesAddItem 
                      middle={null}
                      classNameType={`up${listNum===1?'':'-2'}`}
                      onAddModulesSelected={onAddModulesSelectedUp} /> 
                     : null;

  const addItemDown = calсWidth(arrDown) ?
                     <ListModulesAddItem 
                      middle={null}
                      classNameType={`down${listNum===1?'':'-2'}`}
                      onAddModulesSelected={onAddModulesSelectedDown} />
                     : null;

  return (
    <>
      <div
        className="configuration-layout-plan__selected configuration-layout-plan-selected">
        <DragAndDropModule 
          arr={arrUp} 
          updateArrFunction={updateArrFunctionUp} 
          view={`w-up${listNum===1?'':'-2'}`}/>
        {addItemUp}
      </div>
      <div 
        className="configuration-layout-plan__selected configuration-layout-plan-selected">
        {/* <div className={`resize-h ${currentModuleSelected?.height ? 'active':''}`}>
            <span></span>
            <span>{currentModuleSelected.height} мм</span>
            <span></span>
        </div> */}
        <DragAndDropModule           
          arr={arrDown} 
          updateArrFunction={updateArrFunctionDown} 
          view={`w-down${listNum===1?'':'-2'}`}/>
        {addItemDown}
      </div>
    </>
  );
};

export default ListModulesSelected;