import { useSelector, useDispatch } from 'react-redux';
import { setConfiguration } from './../../actions/index';

import { img01, img02, img03, img01Active, img02Active, img03Active} from './../../resources/img/configurationStart';

const ConfigurationСhoice = () => {
  const { configuration } = useSelector(state => state);
  const dispatch = useDispatch();

  const onSetConfiguration = (value) => {
    dispatch(setConfiguration(value))
  } 
    
  return (
    <>
      <h1 className="configuration-start__title">Выберите конфигурацию</h1>
      <div className="configuration-start__list">
        <div 
          onClick={() => onSetConfiguration('Прямая')}
          className={`configuration-start__item ${configuration==='Прямая'?'active':''}`}>
          <div className="configuration-start__img">
            <img src={configuration==='Прямая'?img01Active:img01} alt="img01" />
          </div>
          <p className="configuration-start__name">Прямая</p>
        </div>
        <div 
          onClick={() => onSetConfiguration('Паралельная')}
          className={`configuration-start__item ${configuration==='Паралельная'?'active':''}`}
          >
          <div className="configuration-start__img">
            <img src={configuration==='Паралельная'?img02Active:img02} alt="img02" />
          </div>
          <p className="configuration-start__name">Паралельная</p>
        </div>
        <div 
          onClick={() => onSetConfiguration('Угловая')}
          className={`configuration-start__item ${configuration==='Угловая'?'active':''}`}
          >
          <div className="configuration-start__img">
            <img src={configuration==='Угловая'?img03Active:img03} alt="img03" />
          </div>
          <p className="configuration-start__name">Угловая</p>
        </div>
        <div 
          onClick={() => onSetConfiguration('Островок')}
          className={`configuration-start__item ${configuration==='Островок'?'active':''}`}
          >
          <div className="configuration-start__img configuration-start-center_img">
            <img src={configuration==='Островок'?img01Active:img01} alt="img04" />
          </div>
          <p className="configuration-start__name">Островок</p>
        </div>
      </div>
    </>
  );
};

export default ConfigurationСhoice;