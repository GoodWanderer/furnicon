import { useEffect, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { v4 as uuidv4 } from 'uuid';

import pImg05 from './../../listModules/img05.svg';
import pImg05Active from './../../listModules/img05-active.svg';

import ListModulesMiddleItem from './../../listModulesItem/listModulesMiddleItem/ListModulesMiddleItem';
import ListModulesPartMiddle from './../../listModulesPart/listModulesPartMiddle/ListModulesPartMiddle';


const DragAndDropMiddle = ({arr, updateArrFunction, children}) => {
  const {height, depth} = useSelector(state => state);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const middle = {
      id: uuidv4(), 
      type: 'middle',
      width: 600,
      height: height,
      depth,
      modeles: {
        middle: {
          startId: 5,
          id: 5,
          img: pImg05,
          activeImg: pImg05Active,
          replaceMax: null,
          replaceMin: null,
          indent: 0,
          appointment: 'storage', 
        },
      },
      shelves: 0,
      removableShelves: false,
      material: false,
      backWall: false,
    }
    if (arr.length === 1) 
      dispatch(updateArrFunction([middle, ...arr]))
    console.log('render');
  }, [updateArrFunction])

  const moveModulesSelectedMiddle = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = arr[dragIndex]
      const hoverItem = arr[hoverIndex]

      const updatedModules = [...arr];
      updatedModules[dragIndex] = hoverItem;
      updatedModules[hoverIndex] = dragItem;

      dispatch(updateArrFunction(updatedModules));
    }, [arr],
  )

  const renderBody = () => {
    console.log(arr);
    return arr.map((item, i) => {
      if (item.content === 'body') {
        return <ListModulesMiddleItem key={item.id} el={item} index={i} noMove={(e) => e.preventDefault()} func={moveModulesSelectedMiddle}>
                {children}
               </ListModulesMiddleItem> 
      } else {
        const middle = item.modeles.down !== false ? <ListModulesPartMiddle item={item}/> : null;
        return <ListModulesMiddleItem key={item.id} el={item} index={i} noMove={null} func={moveModulesSelectedMiddle}>
                {middle}
               </ListModulesMiddleItem> 
      }
    });
  }

  const bodyView = renderBody();
  
  return (
    <DndProvider backend={HTML5Backend}>
      {bodyView}
    </DndProvider>
  );
};

export default DragAndDropMiddle;