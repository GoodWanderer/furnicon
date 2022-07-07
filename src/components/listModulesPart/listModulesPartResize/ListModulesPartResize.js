import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setResizeActiveModuleWidth, setCurrentModuleSelected, setModulesSelectedDown } from './../../../actions/index';


const ListModulesPartResize = ({item}) => {
  const { currentModuleSelected, modulesCommon, modulesSelectedDown } = useSelector(state => state);
  const dispatch = useDispatch();

  const onSetResizeWidthStart = (e) => {
    e.preventDefault();
    dispatch(setResizeActiveModuleWidth(true));
  }
  
  useEffect(() => {
    if (currentModuleSelected?.modeles?.down?.replaceMax && currentModuleSelected.width >= 600) {
      
      const newModule = modulesCommon.find(module => module.id === currentModuleSelected.modeles.down.replaceMax)

      let down = {
        startId: newModule.startId,
        id: newModule.id,
        img: newModule.img,
        activeImg: newModule.activeImg,
        replaceMax: newModule.replaceMax?newModule.replaceMax:null,
        replaceMin: newModule.replaceMin?newModule.replaceMin:null,
        indent: newModule.indent,
        appointment: newModule.appointment
      }
      dispatch(setCurrentModuleSelected(
        {...currentModuleSelected, 
          modeles: {...currentModuleSelected.modeles, down},
        }
      ))
      dispatch(setModulesSelectedDown(
        [...modulesSelectedDown.map((el) => {
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

    } else if (currentModuleSelected?.modeles?.down?.replaceMin && currentModuleSelected.width < 600) {
      
      const newModule = modulesCommon.find(module => module.id === currentModuleSelected.modeles.down.replaceMin)

      let down = {
        id: newModule.id,
        img: newModule.img,
        activeImg: newModule.activeImg,
        replaceMax: newModule.replaceMax?newModule.replaceMax:null,
        replaceMin: newModule.replaceMin?newModule.replaceMin:null,
        indent: newModule.indent,
        appointment: newModule.appointment
      }
      dispatch(setCurrentModuleSelected(
        {...currentModuleSelected, 
          modeles: {...currentModuleSelected.modeles, down},
        }
      ))
      dispatch(setModulesSelectedDown(
        [...modulesSelectedDown.map((el) => {
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
  }, [currentModuleSelected.width])

  return (
    <div className={`resize-w ${item.id === currentModuleSelected?.id ? 'active':''}`}>
      <span></span>
      <span>{item.width} мм</span>
      <span></span>
      <span
        onMouseDown={(e) => onSetResizeWidthStart(e)}
        className="resize-w-btn"></span>
    </div>
  );
};

export default ListModulesPartResize;