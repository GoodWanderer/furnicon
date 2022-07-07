import { useSelector } from 'react-redux';

const ListModulesPartMiddle = ({item}) => {
  const { currentModuleSelected } = useSelector(state => state);
  let img = item?.modeles?.middle?.img;
  let indent = item?.modeles?.middle?.indent || 0;
  if (item.id === currentModuleSelected.id)
    img = item?.modeles?.middle?.activeImg;

  return (
    <div
      style={{
        height: `calc(100% + ${indent}px)`,
        margin: `-${indent}px 0 0`,
        border: img?'none':'',
        background: img?`url(${img}) 0 0/100% 100% no-repeat`:''
      }} 
      className={`configuration-layout-plan-selected__middle`}>
    </div>
  );
};

export default ListModulesPartMiddle;