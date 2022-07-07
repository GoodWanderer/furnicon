
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentModuleSelected, setModulesSelectedDown, setModulesSelectedDown2, setModulesSelectedUp, setModulesSelectedUp2 } from '../actions';

const useAddModuleInCell = () => {
  const dispatch = useDispatch();
  const {
    modulesSelectedUp, modulesSelectedUp2,
    modulesSelectedDown, modulesSelectedDown2,
    currentModuleSelected, currentModuleSelectedListNum, wall
  } = useSelector(state => state);

  const addModuleInCellDown = (item) => {
    if (!currentModuleSelected?.modeles?.down?.id && currentModuleSelected.type === 'down') {
      let down = {
        startId: item.startId,
        id: item.id,
        img: item.img,
        activeImg: item.activeImg,
        replaceMax: item.replaceMax?item.replaceMax:null,
        replaceMin: item.replaceMax?item.replaceMin:null,
        indent: item.indent,
        appointment: item.appointment, 
      }

      dispatch(setCurrentModuleSelected(
        {...currentModuleSelected, 
          modeles: {...currentModuleSelected.modeles, down},
        }
      ))
      if (wall === 1) {
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
      } else {
        dispatch(setModulesSelectedDown2(
          [...modulesSelectedDown2.map((el) => {
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
  }

  const addModuleInCellUp = (item) => {
    if (!currentModuleSelected?.modeles?.up3?.id && currentModuleSelected.type === 'up') {
      let up3 = {
        id: item.id,
        img: item.img,
        activeImg: item.activeImg
      }
      dispatch(setCurrentModuleSelected(
        {...currentModuleSelected, 
          modeles: {...currentModuleSelected.modeles, up3},
        }
      ))
      if (wall === 1) {
        dispatch(setModulesSelectedUp(
          [...modulesSelectedUp.map((el) => {
            if (el.id === currentModuleSelected.id)
              return {...currentModuleSelected, 
                        modeles: {...currentModuleSelected.modeles, up3}
                      }
            else {
              return el
            }
          })
          ]
        ))
      } else {
        dispatch(setModulesSelectedUp2(
          [...modulesSelectedUp2.map((el) => {
            if (el.id === currentModuleSelected.id)
              return {...currentModuleSelected, 
                        modeles: {...currentModuleSelected.modeles, up3}
                      }
            else {
              return el
            }
          })
          ]
        ))
      }
    }
    else if (currentModuleSelected.type === 'up') {
      let up = {
        id: item.id,
        img: item.img,
        activeImg: item.activeImg
      }

      if (!currentModuleSelected?.modeles?.up1?.id && currentModuleSelected?.modeles?.up1 !== false) {
        dispatch(setCurrentModuleSelected(
          {...currentModuleSelected, 
            modeles: {...currentModuleSelected.modeles, up1: up},
          }
        ))
        if (wall === 1) {
          dispatch(setModulesSelectedUp(
            [...modulesSelectedUp.map((el) => {
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
        } else {
          dispatch(setModulesSelectedUp2(
            [...modulesSelectedUp2.map((el) => {
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
        }

      } 
      // else if (!currentModuleSelected?.modeles?.up2?.id && currentModuleSelected?.modeles?.up2 !== false) {
      //   dispatch(setCurrentModuleSelected(
      //     {...currentModuleSelected, 
      //       modeles: {...currentModuleSelected.modeles, up2: up},
      //     }
      //   ))
      //   if (currentModuleSelectedListNum === 1) {
      //     dispatch(setModulesSelectedUp(
      //       [...modulesSelectedUp.map((el) => {
      //         if (el.id === currentModuleSelected.id)
      //           return {...currentModuleSelected, 
      //                     modeles: {...currentModuleSelected.modeles, up2: up}
      //                   }
      //         else {
      //           return el
      //         }
      //       })
      //       ]
      //     ))
      //   } else {
      //     dispatch(setModulesSelectedUp2(
      //       [...modulesSelectedUp2.map((el) => {
      //         if (el.id === currentModuleSelected.id)
      //           return {...currentModuleSelected, 
      //                     modeles: {...currentModuleSelected.modeles, up2: up}
      //                   }
      //         else {
      //           return el
      //         }
      //       })
      //       ]
      //     ))
      //   }
      // }
    }
  }

  const addModuleInCellMedium = (item) => {
    // console.log(11, currentModuleSelected.type);
    if (currentModuleSelected.type === 'middle') {
      let down = {
        id: item.id,
        img: item.img,
        activeImg: item.activeImg,
        indent: item.indent
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
  }

  return {
    addModuleInCellUp,
    addModuleInCellDown,
    addModuleInCellMedium
  }
};

export default useAddModuleInCell;