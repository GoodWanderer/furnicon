import { useSelector, useDispatch } from 'react-redux';
import { setCurrentModuleSelected, setModulesSelectedDown, setModulesSelectedDown2 } from './../actions/index';

import useCalc from './CalcWidth';

const useResize = () => {
  const {currentModuleSelected, modulesSelectedDown2, modulesSelectedDown, width} = useSelector(state => state);
  const dispatch = useDispatch();

  const { calcWidthAll } = useCalc();

  const onResizeWidth = (value, change=false) => {
      
      let vList = 0;
      let eTarget = document.querySelector('.configuration-layout-plan-selected__item-w-down.active .resize-w-btn');
      if (eTarget === null) {
        vList = 1;
        eTarget = document.querySelector('.configuration-layout-plan-selected__item-w-down-2.active .resize-w-btn');
      }

      let formatNewItem = Number(value);

      let check = 0;
      if (formatNewItem < 200) {
        if (formatNewItem <= currentModuleSelected.width) {
          check = 1;
          formatNewItem = 200;
        } 
      }
      else if (formatNewItem > 800) {
        if (formatNewItem >= currentModuleSelected.width) {
          check = 1;
          formatNewItem = 800;
        }
      }

      const allModulesWidth1 = calcWidthAll(modulesSelectedDown);
      const allModulesWidth2 = calcWidthAll(modulesSelectedDown2);

      if (vList === 0) { 
        if (allModulesWidth1 + (formatNewItem - currentModuleSelected.width) > width) {
          if (formatNewItem >= currentModuleSelected.width) {
              formatNewItem = width - allModulesWidth1 + currentModuleSelected.width;
            }
        }
      } else {
        if (allModulesWidth2 + (formatNewItem - currentModuleSelected.width) > width) {
          if (formatNewItem >= currentModuleSelected.width) {
            formatNewItem = width - allModulesWidth2 + currentModuleSelected.width;
          }
        }
      }

      if (change === false || (change === true && check !== 1)) {
        dispatch(setCurrentModuleSelected(
          {...currentModuleSelected, 
            width: formatNewItem,
          }
        ))
  
        if (vList === 0) {
          dispatch(setModulesSelectedDown(
            [...modulesSelectedDown.map((el) => {
              if (el.id === currentModuleSelected.id)
                return {...currentModuleSelected, 
                          width: formatNewItem,
                        }
              else {
                return el
              }
            })
            ]
          ))
        } else {
          dispatch(setModulesSelectedDown2(
            [...modulesSelectedDown2.map((el) => {
              if (el.id === currentModuleSelected.id)
                return {...currentModuleSelected, 
                          width: formatNewItem,
                        }
              else {
                return el
              }
            })
            ]
          ))
        }
      }
      return formatNewItem;
  }

  return {onResizeWidth}
};

export default useResize;