import { useSelector, useDispatch } from 'react-redux';
import { setModulesSelected, setCurrentModuleSelected } from '../../../actions';

import { v4 as uuidv4 } from 'uuid';

const ListModulesSelected = () => {
  const { modulesSelected, currentModuleSelected } = useSelector(state => state);
  const dispatch = useDispatch();

  const onAddModulesSelected = () => {
    const id = uuidv4();
    const item = {
      id, 
      depth: 'full', 
      mounted: 'x2',
      modeles: {
        up1: {},
        up2: {},
        down: {}
      }
    }
    dispatch(setModulesSelected([
      ...modulesSelected, item
    ]));
    dispatch(setCurrentModuleSelected(item));
  }

  const onSetCurrentModuleSelected = (item) => {
    dispatch(setCurrentModuleSelected(item));
  }

  const renderSelectedItems = (items) => {
    return items.map(item => {
      const up2View = item.modeles.up2 !== false ? <Up2 item={item}/> : null;
      const up1View = item.modeles.up1 !== false ? <Up1 width={up2View} item={item}/> : null;
      const upView = up1View || up2View ? <div className='configuration-layout-plan-selected__up'>{up1View}{up2View}</div> : null;
      const downView = item.modeles.down !== false ? <Down width={up1View} item={item}/> : null;
      return (
        <div 
          key={item.id} 
          onClick={() => onSetCurrentModuleSelected(item)}
          className={`configuration-layout-plan-selected__item ${item.id === currentModuleSelected?.id ? 'active':''}`}>
          {upView}
          {downView}
        </div>
      )
    });
  }

  const selectedItems = renderSelectedItems(modulesSelected)

  return (
    <div className="configuration-layout-plan__selected configuration-layout-plan-selected">
      {selectedItems}
      <div
        onClick={() => onAddModulesSelected()} 
        className="configuration-layout-plan-selected__item add">
        <div className={`configuration-layout-plan-selected__text`}>
          +
        </div>
      </div>
    </div>
  );
};

const Up1 = ({width, item}) => {
  let img = item?.modeles?.up1?.img;
  return (
    <div
      style={{
        flex: width?'0 0 calc(50% - 2.5px)':'0 0 100%',
        border: img?'none':'',
        background: img?`url(${img}) 0 0/100% 100% no-repeat`:''
      }} 
      className={`configuration-layout-plan-selected__up-1`}>
      {/* <img src="" alt="" /> */}
    </div>
  )
}
const Up2 = ({item}) => {
  let img = item?.modeles?.up2?.img;
  return (
    <div 
    style={{
      border: img?'none':'',
      background: img?`url(${img}) 0 0/100% 100% no-repeat`:''
    }} 
    className={`configuration-layout-plan-selected__up-2`}>
      {/* <img src="" alt="" /> */}
    </div>
  )
}
const Down = ({width, item}) => {
  let img = item?.modeles?.down?.img;
  return (
    <div
      style={{
        height: !width?'100%':'60%',
        margin: !width?'0':'5px 0 0',
        border: img?'none':'',
        background: img?`url(${img}) 0 0/100% 100% no-repeat`:''
      }} 
      className={`configuration-layout-plan-selected__down`}>
      {/* <img
        style={{
          width: width?'100%':'',
          height: width?'100%':'',
          objectFit: width?'fill':'',
          background: url();
        }}
        src={item?.modeles?.down?.img} alt="" /> */}
    </div>
  )
}

export default ListModulesSelected;