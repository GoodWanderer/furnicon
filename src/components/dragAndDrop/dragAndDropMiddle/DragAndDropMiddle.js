import { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ListModulesMiddleItem from './../../listModulesItem/listModulesMiddleItem/ListModulesMiddleItem';
import ListModulesPartMiddle from './../../listModulesPart/listModulesPartMiddle/ListModulesPartMiddle';


const DragAndDropMiddle = ({arr, updateArrFunction, children}) => {
  const dispatch = useDispatch();

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