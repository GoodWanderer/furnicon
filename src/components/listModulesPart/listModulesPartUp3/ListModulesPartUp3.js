import { useSelector } from 'react-redux';

const ListModulesPartUp3 = ({item, width}) => {
  const { currentModuleSelected } = useSelector(state => state);
  let img = item?.modeles?.up3?.img;
  if (item.id === currentModuleSelected.id)
    img = item?.modeles?.up3?.activeImg;
  return (
    <div
      style={{
        height: !width?'100%':'60%',
        margin: !width?'0':'5px 0 0',
        border: img?'none':'',
        background: img?`url(${img}) 0 0/100% 100% no-repeat`:''
      }} 
      className={`configuration-layout-plan-selected__down`}>
    </div>
  )
};

export default ListModulesPartUp3;