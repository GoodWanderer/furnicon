
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setModulesCommon, setModulesQuanity } from './../../../actions/index';

import useAddModuleInCell from './../../../service/AddModuleInCell';

import pImg01 from './../img01.svg';
import pImg02 from './../img02.svg';
import pImg03 from './../img03.svg';
import pImg04 from './../img04.svg';
import pImg05 from './../img05.svg';
import pImg06 from './../img06.svg';
import pImg07 from './../img07.svg';
import pImg08 from './../img08.svg';
import pImg01Active from './../img01-active.svg';
import pImg02Active from './../img02-active.svg';
import pImg03Active from './../img03-active.svg';
import pImg04Active from './../img04-active.svg';
import pImg05Active from './../img05-active.svg';
import pImg06Active from './../img06-active.svg';
import pImg07Active from './../img07-active.svg';
import pImg08Active from './../img08-active.svg';

import { addSvg } from './../../../resources/img/configurationLayout';


const ListModulesCommon = () => {
  const { modulesCommon, filterType, filterFeaturesWidth, filterFeaturesAppointment, modulesSelectedDown, modulesSelectedUp, modulesSelectedDown2, modulesSelectedUp2 } = useSelector(state => state);
  const dispatch = useDispatch();

  const { addModuleInCellUp, addModuleInCellDown, addModuleInCellMedium } = useAddModuleInCell();

  useEffect(() => {
    dispatch(setModulesCommon([
      {
        'startId': 1,
        'id': 1,
        'quanity': 0,
        'name': 'Верхний шкаф',
        'text': 'Одна дверь',
        'img': pImg01,
        'activeImg': pImg01Active,

        'type': 'up',
        'width': 40,
        'appointment': 'storage',

        'indent': 0
      },
      // {
      //   'id': 2,
      //   'quanity': 0,
      //   'name': 'Верхний ящик',
      //   'text': 'Одна дверь',
      //   'img': pImg01,
      //   'activeImg': pImg01Active,

      //   'type': 'up',
      //   'width': 40,
      //   'appointment': 'storage',

      //   'indent': 0,
      // },
      {
        'startId': 2,
        'id': 2,
        'quanity': 0,
        'name': 'Нижний шкаф',
        'text': 'Одна дверь',
        'img': pImg02,
        'activeImg': pImg02Active,

        'type': 'down',
        'width': 40,
        'appointment': 'storage',

        'replaceMax': 3,
        'indent': 0,
      },
      {
        'startId': 3,
        'id': 3,
        'quanity': 0,
        'name': 'Нижний шкаф',
        'text': 'Двойная дверь',
        'img': pImg06,
        'activeImg': pImg06Active,

        'type': 'down',
        'width': 60,
        'appointment': 'storage',

        'replaceMin': 2,
        'indent': 0,
      },
      {
        'startId': 4,
        'id': 4,
        'quanity': 0,
        'name': 'Нижняя угловая',
        'text': 'Левый',
        'img': pImg07,
        'activeImg': pImg07Active,

        'type': 'down',
        'width': 60,
        'appointment': 'storage',

        'indent': 0,
      },
      {
        'startId': 5,
        'id': 5,
        'quanity': 0,
        'name': 'Нижняя угловая',
        'text': 'правый',
        'img': pImg08,
        'activeImg': pImg08Active,

        'type': 'down',
        'width': 60,
        'appointment': 'storage',

        'indent': 0,
      },
      {
        'startId': 6,
        'id': 6,
        'quanity': 0,
        'name': 'Холодильник',
        'text': 'Описание',
        'img': pImg05,
        'activeImg': pImg05Active,

        'type': 'medium',
        'width': 80,
        'appointment': 'technic',

        'indent': 0,
      },
      {
        'startId': 7,
        'id': 7,
        'quanity': 0,
        'name': 'Под духовку',
        'text': 'Описание',
        'img': pImg03,
        'activeImg': pImg03Active,

        'type': 'down',
        'width': 80,
        'appointment': 'technic',

        'indent': 14,
      },
      {
        'startId': 8,
        'id': 8,
        'quanity': 0,
        'name': 'Под мойку',
        'text': 'Описание',
        'img': pImg04,
        'activeImg': pImg04Active,

        'type': 'down',
        'width': 80,
        'appointment': 'washing',

        'indent': 24,
      },
    ]))
  }, [])
  

  const renderFilterFeaturesWidth = (itmes) => {
    return itmes.filter(item => {
      if (item.width === filterFeaturesWidth) 
        return item;
    })
  }

  const renderFilterFeaturesAppointmentItems = (itmes) => {
    return itmes.filter(item => {
      if (item.appointment === filterFeaturesAppointment) 
        return item;
    })
  }

  const renderFilterType = (itmes) => {
    return itmes.filter(item => {
      if (item.type === filterType) 
        return item;
    })
  }

  const renderFilterTechnicItems = (itmes) => {
    return itmes.filter(item => {
      if (item.id !== 7 && item.id !== 8) 
        return item;
    })
  }

  const renderItems = (itmes) => {
    return itmes.map(item => {
      return (
        <div key={item.id} className="configuration-filter-products__item">
        <div className="configuration-filter-products__img">
          <img src={item.img} alt="Товар" />
          <div className="configuration-filter-products__size">{item.width}</div>
          <div className="configuration-filter-products__quanity">{item.quanity}</div>
        </div>
        <div className="configuration-filter-products__row">
          <div className="configuration-filter-products__info">
            <div className="configuration-filter-products__name">{item.name}</div>
            <div className="configuration-filter-products__text">{item.text}</div>
          </div>
          <div
            onClick={() => item.type==='up'?
              addModuleInCellUp(item):item.type==='down'?
              addModuleInCellDown(item):addModuleInCellMedium(item)}
            className="configuration-filter-products__add"
            ><img src={addSvg} alt="add" /></div>
        </div>
      </div>
      )
    });
  }

  const filterTypeItems = filterType !== false ? renderFilterType(modulesCommon) : modulesCommon;
  const filterFeaturesWidthItems = filterFeaturesWidth !== false ? renderFilterFeaturesWidth(filterTypeItems) : filterTypeItems;
  const filterFeaturesAppointmentItems = filterFeaturesAppointment !== false ? renderFilterFeaturesAppointmentItems(filterFeaturesWidthItems) : filterFeaturesWidthItems;
  const filterTechnicItems = filterFeaturesAppointmentItems !== false ? renderFilterTechnicItems(filterFeaturesAppointmentItems) : filterFeaturesAppointmentItems;
  const items = renderItems(filterTechnicItems);

  useEffect(() => {
    dispatch(setModulesQuanity(items.length?items.length:0))
  }, [items.length])

  return (
    <div className="configuration-filter__product configuration-filter-products">                  
      {items}
    </div>
  );
};

export default ListModulesCommon;