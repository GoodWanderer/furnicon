
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setModulesCommon, setModulesQuanity, setCurrentModuleSelected, setModulesSelected } from './../../../actions/index';

import pImg01 from './../img01.svg';
import pImg02 from './../img02.svg';
import pImg01Active from './../img01-active.svg';
import pImg02Active from './../img02-active.svg';

import { addSvg } from './../../../resources/img/configurationLayout';

const ListModulesCommon = () => {
  const { modulesCommon, modulesSelected, currentModuleSelected, filterType, filterFeaturesWidth, filterFeaturesAppointment } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModulesCommon([
      {
        'id': 1,
        'quanity': 0,
        'name': 'Верхний ящик',
        'text': 'Одна дверь',
        'img': pImg01,
        'activeImg': pImg01Active,
        'type': 'up',
        'width': 40,
        'appointment': 0,
      },
      {
        'id': 2,
        'quanity': 0,
        'name': 'Верхний ящик',
        'text': 'Одна дверь',
        'img': pImg01,
        'activeImg': pImg01Active,
        'type': 'up',
        'width': 40,
        'appointment': 0,
      },
      {
        'id': 3,
        'quanity': 0,
        'name': 'Нижний шкаф',
        'text': 'Два ящика',
        'img': pImg02,
        'activeImg': pImg02Active,
        'type': 'down',
        'width': 60,
        'appointment': 1,
      },
      {
        'id': 4,
        'quanity': 0,
        'name': 'Нижний шкаф',
        'text': 'Два ящика',
        'img': pImg02,
        'activeImg': pImg02Active,
        'type': 'down',
        'width': 80,
        'appointment': 1,
      }
    ]))
  }, [])

  const onAddModuleSeclected = (item) => {
    console.log(currentModuleSelected);
    console.log(currentModuleSelected?.modeles?.up1?.id);
    console.log(!currentModuleSelected?.modeles?.up1?.id);
    if (item.type === 'down') {
      if (!currentModuleSelected?.modeles?.down?.id) {
        let down = {
          id: item.id,
          img: item.img,
          iactiveImg: item.activeImg
        }
        dispatch(setCurrentModuleSelected(
          {...currentModuleSelected, 
            modeles: {...currentModuleSelected.modeles, down},
          }
        ))
        dispatch(setModulesSelected(
          [...modulesSelected.map((el) => {
            if (el.id === currentModuleSelected.id)
              return {...currentModuleSelected, 
                       modeles: {...currentModuleSelected.modeles, down}
                      }
            else {
              return el
            }
          })
          ]
        ))
      }
    }
    else {
      console.log(1);
      let up = {
        id: item.id,
        img: item.img,
        iactiveImg: item.activeImg
      }
      console.log(2);
      if (!currentModuleSelected?.modeles?.up1?.id) {
        dispatch(setCurrentModuleSelected(
          {...currentModuleSelected, 
            modeles: {...currentModuleSelected.modeles, up1: up},
          }
        ))
        dispatch(setModulesSelected(
          [...modulesSelected.map((el) => {
            if (el.id === currentModuleSelected.id)
              return {...currentModuleSelected, 
                        modeles: {...currentModuleSelected.modeles, up1: up}
                      }
            else {
              return el
            }
          })
          ]
        ))
      } else if (!currentModuleSelected?.modeles?.up2?.id) {
        console.log(3);
        dispatch(setCurrentModuleSelected(
          {...currentModuleSelected, 
            modeles: {...currentModuleSelected.modeles, up2: up},
          }
        ))
        dispatch(setModulesSelected(
          [...modulesSelected.map((el) => {
            if (el.id === currentModuleSelected.id)
              return {...currentModuleSelected, 
                        modeles: {...currentModuleSelected.modeles, up2: up}
                      }
            else {
              return el
            }
          })
          ]
        ))
      }
    }
  }
  

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
            onClick={() => onAddModuleSeclected(item)}
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
  const items = renderItems(filterFeaturesAppointmentItems);

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