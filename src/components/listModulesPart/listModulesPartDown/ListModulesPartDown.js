import { useSelector } from 'react-redux';

const ListModulesPartDown = ({item}) => {
  const { currentModuleSelected } = useSelector(state => state);
  let img = item?.modeles?.down?.img;
  let indent = item?.modeles?.down?.indent || 0;
  if (item.id === currentModuleSelected.id)
    img = item?.modeles?.down?.activeImg;

  return (
    <div
      style={{
        height: `calc(100% + ${indent}px)`,
        margin: `-${indent}px 0 0`,
        border: img?'none':'',
        background: img?`url(${img}) 0 0/100% 100% no-repeat`:''
      }} 
      className={`configuration-layout-plan-selected__down`}>
    </div>
  )
};

export default ListModulesPartDown;