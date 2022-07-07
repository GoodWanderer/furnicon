import { useSelector } from 'react-redux';

const ListModulesPartUp2 = ({item}) => {
  const { currentModuleSelected } = useSelector(state => state);
  let img = item?.modeles?.up2?.img;
  if (item.id === currentModuleSelected.id)
    img = item?.modeles?.up2?.activeImg;
  return (
    <div 
    style={{
      border: img?'none':'',
      background: img?`url(${img}) 0 0/100% 100% no-repeat`:''
    }} 
    className={`configuration-layout-plan-selected__up-2`}>
    </div>
  )
};

export default ListModulesPartUp2;