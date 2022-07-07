import { useSelector, useDispatch } from 'react-redux';
import { setCurrentModuleSelected } from '../../../actions';

import { v4 as uuidv4 } from 'uuid';

import ListModulesAddItem from './../../listModulesItem/listModulesAddItem/ListModulesAddItem';

// import pImg01 from './../img01.svg';
import pImg02 from './../img02.svg';
import pImg022 from './../img022.svg';
// import pImg03 from './../img03.svg';
// import pImg04 from './../img04.svg';
// import pImg05 from './../img05.svg';
// import pImg06 from './../img06.svg';
// import pImg07 from './../img07.svg';
// import pImg08 from './../img08.svg';
// import pImg01Active from './../img01-active.svg';
import pImg02Active from './../img02-active.svg';
import pImg022Active from './../img022-active.svg';
// import pImg03Active from './../img03-active.svg';
// import pImg04Active from './../img04-active.svg';
// import pImg05Active from './../img05-active.svg';
// import pImg06Active from './../img06-active.svg';
// import pImg07Active from './../img07-active.svg';
// import pImg08Active from './../img08-active.svg';
import DragAndDropModule from './../../dragAndDrop/dragAndDropModule/DragAndDropModule';

import { useEffect } from 'react';

const ListModulesSelected = ({arrUp, updateArrFunctionUp, arrDown, updateArrFunctionDown, listNum}) => {
  const { width, depth, modulesSelectedMiddle, modulesSelectedMiddle2, wall} = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('list', listNum, arrUp, arrDown);
  }, [listNum])

  const onAddModulesSelectedUp = () => {
    console.log('list', listNum, arrUp, arrDown);
    const id = uuidv4();
    const item = {
      id, 
      type: 'up',
      depthType: 'full', 
      mounted: 'x0',
      width: 600,
      height: 800,
      depth,
      modeles: {
        up1: false,
        up3: {
          startId: 1,
          id: 1,
          img: pImg02,
          activeImg: pImg02Active,
          replaceMax: 3,
          replaceMin: null,
          indent: 0,
          appointment: 'storage',
        }
      }
    }
    dispatch(updateArrFunctionUp([
      ...arrUp, item
    ]));
    dispatch(setCurrentModuleSelected(item));
  }

  const onAddModulesSelectedDown = () => {
    const id = uuidv4();
    const item = {
      id, 
      type: 'down',
      width: 600,
      height: 800,
      depth,
      modeles: {
        down: {
          startId: 2,
          id: 2,
          img: pImg022,
          activeImg: pImg022Active,
          replaceMax: 3,
          replaceMin: null,
          indent: 0,
          appointment: 'storage', 
        },
      },
      shelves: 0,
      removableShelves: false,
      material: false,
      backWall: false,
      front: false,
      edge: false,
      ties: 80, 
    }
    dispatch(updateArrFunctionDown([
      ...arrDown, item
    ]));
    dispatch(setCurrentModuleSelected(item));
  }

  const calсWidth = (arr) => {
    let w = 0;
    if (listNum === 1 && modulesSelectedMiddle.length > 1) {
      modulesSelectedMiddle.forEach((item) => {
        if (item.content !== 'body') {
          w += item.width;
        }
      });
    } else if (listNum === 2 && modulesSelectedMiddle2.length > 1) {
      modulesSelectedMiddle2.forEach((item) => {
        if (item.content !== 'body') {
          w += item.width;
        }
      });
    }
    arr.forEach((item) => {
      w += item.width;
    });
    if (w+400 > width) 
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