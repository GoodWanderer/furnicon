import { useSelector, useDispatch } from 'react-redux';
import { setFilterFeaturesWidth, setFilterFeaturesAppointment, setFilterFeaturesAll } from './../../../../actions';

const ButtonFilterFeatures = () => {
  const { filterFeaturesWidth, filterFeaturesAppointment } = useSelector(state => state);
  const dispatch = useDispatch();

  const onChangeFilterFeaturesWidth = (value) => {
    if (value === filterFeaturesWidth)
      dispatch(setFilterFeaturesWidth(false))
    else
    dispatch(setFilterFeaturesWidth(value))
  }

  // const onChangeFilterFeaturesAppointment = (value) => {
  //   if (value === filterFeaturesAppointment)
  //     dispatch(setFilterFeaturesAppointment(false))
  //   else
  //   dispatch(setFilterFeaturesAppointment(value))
  // }

  return (
    <div className="configuration-filter__filters configuration-filter-filters">
      <div className="configuration-filter-filters__row">
        <div className="configuration-filter-filters__block">
          <div 
            onClick={() => dispatch(setFilterFeaturesAll())}
            className={`configuration-filter-filters__item ${filterFeaturesWidth===false&&filterFeaturesAppointment===false?'active':''}`}
            >Все</div>
        </div>
        <div className="configuration-filter-filters__block">
          <div 
            onClick={() => onChangeFilterFeaturesWidth(40)}
            className={`configuration-filter-filters__item  ${filterFeaturesWidth===40?'active':''}`}
            >40
          </div>
          <div 
            onClick={() => onChangeFilterFeaturesWidth(60)}
            className={`configuration-filter-filters__item  ${filterFeaturesWidth===60?'active':''}`}
            >60
          </div>
          <div 
            onClick={() => onChangeFilterFeaturesWidth(80)}
            className={`configuration-filter-filters__item  ${filterFeaturesWidth===80?'active':''}`}
            >80
          </div>
        </div>
        <div className="configuration-filter-filters__block">
          {/* <div
            onClick={() => onChangeFilterFeaturesAppointment('storage')}
            className={`configuration-filter-filters__item ${filterFeaturesAppointment==='storage'?'active':''}`}
            >Место хранения
          </div>
          <div 
            onClick={() => onChangeFilterFeaturesAppointment('washing')}
            className={`configuration-filter-filters__item ${filterFeaturesAppointment==='washing'?'active':''}`}
            >Под мойку
          </div>
          <div 
            onClick={() => onChangeFilterFeaturesAppointment('oven')}
            className={`configuration-filter-filters__item ${filterFeaturesAppointment==='oven'?'active':''}`}
            >Под духовку
          </div> */}
          {/* <div 
            onClick={() => onChangeFilterFeaturesAppointment('technic')}
            className={`configuration-filter-filters__item ${filterFeaturesAppointment==='technic'?'active':''}`}
            >Техника
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ButtonFilterFeatures;