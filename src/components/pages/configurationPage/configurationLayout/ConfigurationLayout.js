import { useMemo, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentModuleSelected, setResizeActiveModuleWidth, setModulesSelectedDown, setModulesSelectedDown2, setModulesCommon } from './../../../../actions/index';

import useCalc from './../../../../service/Calc';
import ButtonMode from './../../../button/buttonMode/ButtonMode';
import ParametersModule from './../../../parametersModule/ParametersModule';
import ConfigurationMap from './../../../configurationMap/ConfigurationMap';

import './configurationLayout.scss';

import pImg01 from './../../../listModules/img01.svg';
import pImg02 from './../../../listModules/img02.svg';
import pImg022 from './../../../listModules/img022.svg';
import pImg03 from './../../../listModules/img03.svg';
import pImg04 from './../../../listModules/img04.svg';
import pImg05 from './../../../listModules/img05.svg';
import pImg06 from './../../../listModules/img06.svg';
import pImg07 from './../../../listModules/img07.svg';
import pImg08 from './../../../listModules/img08.svg';
import pImg01Active from './../../../listModules/img01-active.svg';
import pImg02Active from './../../../listModules/img02-active.svg';
import pImg022Active from './../../../listModules/img022-active.svg';
import pImg03Active from './../../../listModules/img03-active.svg';
import pImg04Active from './../../../listModules/img04-active.svg';
import pImg05Active from './../../../listModules/img05-active.svg';
import pImg06Active from './../../../listModules/img06-active.svg';
import pImg07Active from './../../../listModules/img07-active.svg';
import pImg08Active from './../../../listModules/img08-active.svg';


const ConfigurationLayout = () => {
  const {modulesSelectedMiddle, width, resizeActiveModuleWidth, currentModuleSelected, modulesSelectedDown, modulesSelectedDown2, configurationMainPage } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setModulesCommon([
      {
        'startId': 1,
        'id': 1,
        'quanity': 0,
        'name': 'Верхний шкаф',
        'text': 'Одна дверь',
        'img': pImg02,
        'activeImg': pImg02Active,

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
        'img': pImg022,
        'activeImg': pImg022Active,

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

        'indent': 24,
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

        'indent': 39,
      },
    ]))
  }, [])

  const { calcWidthPercent, calcWidthAll } = useCalc();

  const sizeWidth = useMemo(() => calcWidthPercent(width), [width, configurationMainPage]);

  // const allModulesWidth1 = calcWidthAll(modulesSelectedDown);
  // const allModulesWidth2 = calcWidthAll(modulesSelectedDown2);

  let middleWidth = 0;
  if (modulesSelectedMiddle.length > 1) {
    modulesSelectedMiddle.forEach((item) => {
      if (item.content !== 'body') {
        middleWidth += item.width;
      }
    });
  }

  // const onSetResizeWidthEnd = (e) => {
  //   if (resizeActiveModuleWidth) {
  //     e.preventDefault();
  //     dispatch(setResizeActiveModuleWidth(false));
  //   }
  // }

  // const onResizeWidth = (e) => {
  //   if (resizeActiveModuleWidth) {
  //     e.preventDefault();

  //     let vList = 0;

  //     let eTarget = document.querySelector('.configuration-layout-plan-selected__item-w-down.active .resize-w-btn');
  //     if (eTarget === null) {
  //       ++vList;
  //       eTarget = document.querySelector('.configuration-layout-plan-selected__item-w-down-2.active .resize-w-btn');
  //     }

  //     const cordNull = eTarget.parentElement.parentElement.offsetLeft;
  //     const cordMouse = e.pageX;
  //     const cordModule = eTarget.parentElement.parentElement.parentElement.parentElement.offsetLeft;
  //     const newItemWidth = (cordMouse - cordModule - 10 - cordNull) * 400 / 70 - 500;

  //     let formatNewItem = Math.trunc(newItemWidth/ 10) * 10;

  //     if (formatNewItem < 200) {
  //       if (formatNewItem <= currentModuleSelected.width) 
  //         formatNewItem = 200;
  //     }
  //     else if (formatNewItem > 800) {
  //       if (formatNewItem >= currentModuleSelected.width) 
  //         formatNewItem = 800;
  //     }

  //     if (vList === 0) { 
  //       if (allModulesWidth1 + (formatNewItem - currentModuleSelected.width) > width - middleWidth) {
  //         if (formatNewItem >= currentModuleSelected.width) {
  //             formatNewItem = Math.trunc((width - middleWidth - allModulesWidth1 + currentModuleSelected.width) / 10) * 10;
  //           }
  //       }
  //     } else {
  //       if (allModulesWidth2 + (formatNewItem - currentModuleSelected.width) > width) {
  //         if (formatNewItem >= currentModuleSelected.width) {
  //             formatNewItem = Math.trunc((width - allModulesWidth2 + currentModuleSelected.width) / 10) * 10;
  //           }
  //       }
  //     }

  //     dispatch(setCurrentModuleSelected(
  //       {...currentModuleSelected, 
  //         width: formatNewItem,
  //       }
  //     ))

  //     if (vList === 0) {
  //       dispatch(setModulesSelectedDown(
  //         [...modulesSelectedDown.map((el) => {
  //           if (el.id === currentModuleSelected.id)
  //             return {...currentModuleSelected, 
  //                       width: formatNewItem,
  //                     }
  //           else {
  //             return el
  //           }
  //         })
  //         ]
  //       ))
  //     } else {
  //       dispatch(setModulesSelectedDown2(
  //         [...modulesSelectedDown2.map((el) => {
  //           if (el.id === currentModuleSelected.id)
  //             return {...currentModuleSelected, 
  //                       width: formatNewItem,
  //                     }
  //           else {
  //             return el
  //           }
  //         })
  //         ]
  //       ))
  //     }
  //   }
  // }

  const parametersModule = currentModuleSelected?.modeles?.down?.id || 
                           currentModuleSelected?.modeles?.up1?.id || 
                           currentModuleSelected?.modeles?.up3?.id ?
                           <ParametersModule />:null;

  return (
    <>
      <main>
        <section className="configuration-layout" style={{position: 'relative'}}>
          <ButtonMode />
          {parametersModule}
          <div
            // onMouseUp={(e) => onSetResizeWidthEnd(e)} 
            // onMouseMove={(e) => onResizeWidth(e, sizeWidth)}  
            className="configuration-layout-plan">
            <div className="configuration-layout-plan__content _container">
              <ConfigurationMap sizeWidth={sizeWidth}/>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ConfigurationLayout;