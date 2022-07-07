import { useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import ListModulesSelectedItem from './../../listModulesItem/listModulesSelectedItem/ListModulesSelectedItem';
import ListModulesPartUp1 from './../../listModulesPart/listModulesPartUp1/ListModulesPartUp1';
import ListModulesPartUp3 from './../../listModulesPart/listModulesPartUp3/ListModulesPartUp3';
import ListModulesPartDown from './../../listModulesPart/listModulesPartDown/ListModulesPartDown';

const DragAndDropModule = ({arr, updateArrFunction, view}) => {
  const {wall} = useSelector(state => state);
  const dispatch = useDispatch();

  const moveModulesSelected = useCallback(
    (dragIndex, hoverIndex) => {
      const dragItem = arr[dragIndex]
      const hoverItem = arr[hoverIndex]

      const updatedModules = [...arr];
      updatedModules[dragIndex] = hoverItem;
      updatedModules[hoverIndex] = dragItem;

      dispatch(updateArrFunction(updatedModules))
    },
    [arr],
  )

  const renderSelectedItems = () => {
    return arr.map((item, index) => {
      console.log(`arr${view}`, item);
      let contentView;
      if (view === 'w-up' || view === 'w-up-2') {
        const up1View = item.modeles.up1 !== false ? <ListModulesPartUp1 item={item} width={null} /> : null;
        const up3View = item.modeles.up3 !== false ? <ListModulesPartUp3 item={item} width={up1View}/> : null;
        contentView = up3View
      } else {
        contentView = item.modeles.down !== false ? <ListModulesPartDown item={item}/> : null;
      }

      return (
        <ListModulesSelectedItem
          key={item.id}
          el={item}
          index={index}
          cName={`configuration-layout-plan-selected__item-${view}`}
          moveModulesSelected={moveModulesSelected}
          view={view}
          wall={wall}>
          {contentView}
        </ListModulesSelectedItem>
      )
    });
  }

  // const renderSelectedDownItems = (items) => {
  //   return items.map((item, index) => {
  //     const down3View = item.modeles.down !== false ? <ListModulesPartDown item={item}/> : null;
  //     return (
  //       <ListModulesSelectedItem
  //         key={item.id} 
  //         index={index}
  //         el={item}
  //         // setT={setT}
  //         cName='configuration-layout-plan-selected__item-w-down'
  //         moveModulesSelected={moveModulesSelectedDown}
  //         listNum={1}>
  //         {down3View}
  //       </ListModulesSelectedItem>
  //     )
  //   });
  // }

  // const [t, setT] = useState(false);

  // const moveModulesSelectedDown = useCallback(
  //   (dragIndex, hoverIndex) => {
  //     const dragItem = modulesSelectedDown[dragIndex]
  //     const hoverItem = modulesSelectedDown[hoverIndex]

  //     const updatedModules = [...modulesSelectedDown];
  //     updatedModules[dragIndex] = hoverItem;
  //     updatedModules[hoverIndex] = dragItem;

  //     dispatch(setModulesSelectedDown(updatedModules))
  //   },
  //   [modulesSelectedDown],
  // )

  const selectedItems = renderSelectedItems(arr);
  // const selectedItemsDown = renderSelectedDownItems(modulesSelectedDown);

  return (
    <DndProvider backend={HTML5Backend}>
      {selectedItems}
    </DndProvider>
  )
};

export default DragAndDropModule;