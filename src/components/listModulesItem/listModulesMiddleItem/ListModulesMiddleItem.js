import { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useDrag, useDrop } from 'react-dnd';

import useCalc from './../../../service/Calc';
import { setCurrentModuleSelectedListNum, setCurrentModuleSelected } from './../../../actions/index';

const ListModulesMiddleItem = ({el, index, noMove, func, listNum, children}) => {
  const { currentModuleSelected, height } = useSelector(state => state);
  const dispatch = useDispatch();

  const {calcWidthPercentItem} = useCalc();

  const [{ isDragging }, dragRef] = useDrag({
    type: 'configuration-layout-plan-selected__item-w-middle-e',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [spec, dropRef] = useDrop({
    accept: 'configuration-layout-plan-selected__item-w-middle-e',
    hover: (item, monitor) => {
      const dragIndex = item.index
      const hoverIndex = index
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.right - hoverBoundingRect.left) / 2
      const hoverActualY = monitor.getClientOffset().x - hoverBoundingRect.left

      if (dragIndex < hoverIndex && hoverActualY < hoverMiddleY) return
      if (dragIndex > hoverIndex && hoverActualY > hoverMiddleY) return

      func(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  })

  const ref = useRef(null)
  const dragDropRef = dragRef(dropRef(ref))

  const opacity = isDragging ? 0 : 1


  if (el.content === 'body')
    return (
      <div 
        ref={dragDropRef}
        onMouseDown={(e) => {
          if (e.target.classList.contains('configuration-layout-plan-selected__item-w-middle-e'))
            e.preventDefault();
        }}
        className="configuration-layout-plan-selected__item-w-middle-e">
        {children}
      </div>
    )

  const calcWidth = calcWidthPercentItem(el.width);

  const onClickItem = (el) => {
    // dispatch(setCurrentModuleSelectedListNum(listNum));
    dispatch(setCurrentModuleSelected(el));
  } 

  return (
    <div
      onClick={() => onClickItem(el, listNum)}
      ref={dragDropRef}
      style={{  
        boxSizing: 'content-box',
        padding: '0 5px',
        height: height, 
        opacity: opacity,
        width: `${calcWidth}px`,
        background: opacity ? '' : '#000' }}
      className={`configuration-layout-plan-selected__item-w-middle-e ${el.id === currentModuleSelected?.id ? 'active':''}`}>
      {children}
      {/* <ListModulesPartResize item={el}/> */}
    </div>
  )
};

export default ListModulesMiddleItem;