import { useSelector, useDispatch } from 'react-redux';
import { setFilterType, setFilterALL } from './../../../../actions';

const ButtonFilterType = () => {
  const { filterType } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="configuration-filter__option configuration-filter-option">
      <div 
        onClick={() => dispatch(setFilterALL())}
        className={`configuration-filter-option__item ${filterType===false?'active':''}`}
        >Все</div>
      <div 
        onClick={() => dispatch(setFilterType('down'))}
        className={`configuration-filter-option__item ${filterType==='down'?'active':''}`}
        >Нижняя часть</div>
      <div 
        onClick={() => dispatch(setFilterType('up'))}
        className={`configuration-filter-option__item ${filterType==='up'?'active':''}`}
        >Верхняя часть</div>
      <div 
        onClick={() => dispatch(setFilterType('medium'))}
        className={`configuration-filter-option__item ${filterType==='medium'?'active':''}`}
        >Пеналы</div>
    </div>
  );
};

export default ButtonFilterType;