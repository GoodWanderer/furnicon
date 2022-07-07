import { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setModulesSelectedUp2, setModulesSelectedDown2, setCurrentModuleSelected, setCurrentModuleSelectedListNum } from '../../../actions';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';

import { v4 as uuidv4 } from 'uuid';

import ListModulesSelectedItem from './../../listModulesItem/listModulesSelectedItem/ListModulesSelectedItem';
import ListModulesAddItem from './../../listModulesItem/listModulesAddItem/ListModulesAddItem';

import ListModulesPartUp1 from './../../listModulesPart/listModulesPartUp1/ListModulesPartUp1';
import ListModulesPartUp2 from './../../listModulesPart/listModulesPartUp2/ListModulesPartUp2';
import ListModulesPartUp3 from './../../listModulesPart/listModulesPartUp3/ListModulesPartUp3';
import ListModulesPartDown from './../../listModulesPart/listModulesPartDown/ListModulesPartDown';

const ListModulesSelected2 = () => {
  const { modulesSelectedUp2, modulesSelectedDown2, currentModuleSelected, width, currentModuleSelectedListNum } = useSelector(state => state);
  const dispatch = useDispatch();

  const onAddModulesSelectedUp = () => {
    const id = uuidv4();
    const item = {
      id, 
      type: 'up',
      depthType: 'full', 
      mounted: 'x2',
      width: 400,
      modeles: {
        up1: {},
        up2: {},
        up3: {}
      }
    }
    dispatch(setModulesSelectedUp2([
      ...modulesSelectedUp2, item
    ]));
    dispatch(setCurrentModuleSelected(item));
    dispatch(setCurrentModuleSelectedListNum(2));
  }

  const onAddModulesSelectedDown = () => {
    const id = uuidv4();
    const item = {
      id, 
      type: 'down',
      width: 400,
      height: 800,
      modeles: {
        down: {},
      }
    }
    dispatch(setModulesSelectedDown2([
      ...modulesSelectedDown2, item
    ]));
    dispatch(setCurrentModuleSelected(item));
    dispatch(setCurrentModuleSelectedListNum(2));
  }

  const moveModulesSelectedUp = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = modulesSelectedUp2[dragIndex]
      const hoverItem = modulesSelectedUp2[hoverIndex]

      const updatedModules = [...modulesSelectedUp2];
      updatedModules[dragIndex] = hoverItem;
      updatedModules[hoverIndex] = dragItem;

      dispatch(setModulesSelectedUp2(updatedModules))
    },
    [modulesSelectedUp2],
  )

  const renderSelectedUpItems = (items) => {
    return items.map((item, index) => {
      const up2View = item.modeles.up2 !== false ? <ListModulesPartUp2 item={item}/> : null;
      const up1View = item.modeles.up1 !== false ? <ListModulesPartUp1 item={item} width={up2View} /> : null;
      const upRowView = up1View || up2View ? <div className='configuration-layout-plan-selected__up'>{up1View}{up2View}</div> : null;
      const up3View = item.modeles.up3 !== false ? <ListModulesPartUp3 width={up1View} item={item}/> : null;
      return (
        <ListModulesSelectedItem
          key={item.id}
          height={up1View}
          index={index}
          item={item}
          cName='configuration-layout-plan-selected__item-w-up-2'
          moveModulesSelected={moveModulesSelectedUp}
          listNum={2}>
          {upRowView}
          {up3View}
        </ListModulesSelectedItem>
      )
    });
  }

  const moveModulesSelectedDown = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = modulesSelectedDown2[dragIndex]
      const hoverItem = modulesSelectedDown2[hoverIndex]

      const updatedModules = [...modulesSelectedDown2];
      updatedModules[dragIndex] = hoverItem;
      updatedModules[hoverIndex] = dragItem;

      dispatch(setModulesSelectedDown2(updatedModules))
    },
    [modulesSelectedDown2],
  )

  const renderSelectedDownItems = (items) => {
    return items.map((item, index) => {
      const down3View = item.modeles.down !== false ? <ListModulesPartDown item={item}/> : null;
      return (
        <ListModulesSelectedItem
          key={item.id} 
          index={index}
          item={item}
          cName='configuration-layout-plan-selected__item-w-down-2'
          moveModulesSelected={moveModulesSelectedDown}
          listNum={2}>
          {down3View}
        </ListModulesSelectedItem>
      )
    });
  }

  const selectedItemsUp = renderSelectedUpItems(modulesSelectedUp2);
  const selectedItemsDown = renderSelectedDownItems(modulesSelectedDown2);

  const calсWidth = (arr) => {
    let w = 0;
    arr.forEach((item) => {
      w += item.width;
    });
    if (w+400 > width) 
      return false;
    return true;
  }

  const addItemUp = calсWidth(modulesSelectedUp2) ?
                     <ListModulesAddItem 
                      classNameType={'up'} 
                      onAddModulesSelected={onAddModulesSelectedUp} /> 
                     : null;

  const addItemDown = calсWidth(modulesSelectedDown2) ?
                     <ListModulesAddItem 
                      classNameType={'down'} 
                      onAddModulesSelected={onAddModulesSelectedDown} />
                     : null;

  return (
    <>
      <div
        className="configuration-layout-plan__selected configuration-layout-plan-selected">
        <DndProvider backend={HTML5Backend}>
          {selectedItemsUp}
        </DndProvider>
        {addItemUp}
      </div>
      <div 
        className="configuration-layout-plan__selected configuration-layout-plan-selected">
        <div className={`resize-h ${currentModuleSelected?.height && currentModuleSelectedListNum === 2 ? 'active':''}`}>
            <span></span>
            <span>{currentModuleSelected.height} мм</span>
            <span></span>
        </div>
        <DndProvider backend={HTML5Backend}>
          {selectedItemsDown}
        </DndProvider>
        {addItemDown}
      </div>
    </>
  );
};

export default ListModulesSelected2;