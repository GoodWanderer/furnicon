import { useSelector } from 'react-redux';

const ListModulesPartUp1 = ({item, width}) => {
  const { currentModuleSelected } = useSelector(state => state);
  let img = item?.modeles?.up1?.img;
  if (item.id === currentModuleSelected.id)
    img = item?.modeles?.up1?.activeImg;
  return (
    <div
      style={{
        flex: width?'0 0 calc(50% - 2.5px)':'0 0 100%',
        border: img?'none':'',
        background: img?`url(${img}) 0 0/100% 100% no-repeat`:''
      }} 
      className={`configuration-layout-plan-selected__up-1`}>
    </div>
  )
};

export default ListModulesPartUp1;