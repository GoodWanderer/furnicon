import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentModuleSelected } from '../../../actions';

import useCalc from './../../../service/Calc';

import ListModulesPartResize from './../../listModulesPart/listModulesPartResize/ListModulesPartResize';
import { setCurrentModuleSelectedListNum } from './../../../actions/index';


const ListModulesSelectedItem = ({el, index, cName, moveModulesSelected, view, wall, children}) => {
  const { currentModuleSelected } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const {calcWidthPercentItem} = useCalc();

  const [{ isDragging }, dragRef] = useDrag({
    type: cName,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [spec, dropRef] = useDrop({
    accept: cName,
    hover: (item, monitor) => {
      const dragIndex = item.index
      const hoverIndex = index
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.right - hoverBoundingRect.left) / 2
      const hoverActualY = monitor.getClientOffset().x - hoverBoundingRect.left

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

      moveModulesSelected(dragIndex, hoverIndex)
      item.index = hoverIndex;
    },
  })

  const ref = useRef(null)
  const dragDropRef = dragRef(dropRef(ref))

  const opacity = isDragging ? 0 : 1
  console.log('itemHeight', el);
  const itemHeight = el.type === 'up' ? '140px':'170px';

  const calcWidth = calcWidthPercentItem(el.width);

  const onClickItem = (el) => {
    // dispatch(setCurrentModuleSelectedListNum(listNum));
    dispatch(setCurrentModuleSelected(el));
  } 

  return (
    <div 
      onClick={() => onClickItem(el)}
      ref={dragDropRef}
      style={{
        height: itemHeight, 
        // marginTop: el.type==='middle'?'-211px':'',
        opacity: opacity,
        width: `${calcWidth}px`,
        background: opacity ? '' : '#000' }}
      className={`${cName} ${el.id === currentModuleSelected?.id ? 'active':''}`}>
      {children}
      {/* <ListModulesPartResize item={el}/> */}
    </div>
  );
};

export default ListModulesSelectedItem;