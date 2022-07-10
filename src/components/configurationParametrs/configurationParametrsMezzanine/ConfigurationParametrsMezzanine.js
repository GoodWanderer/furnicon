import { useSelector, useDispatch } from 'react-redux';
import { setCurrentModuleSelected, setModulesSelectedUp, setModulesSelectedUp2 } from './../../../actions/index';

import { img07, img08 } from '../../../resources/img/configurationLayout';

const ConfigurationParametrsMezzanine = () => {
  const { modulesSelectedUp, modulesSelectedUp2, currentModuleSelected, wall } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const onSetMounted = (mounted) => {
    if (currentModuleSelected?.id && mounted !== currentModuleSelected?.mounted && currentModuleSelected?.type !== 'down' && currentModuleSelected?.type !== 'middle' && currentModuleSelected?.type !== 'middle-up') {
      let obj = {};
      if (mounted === 'x2') {
        let up1 = currentModuleSelected.modeles.up1 ? currentModuleSelected.modeles.up1 : {};
        obj = {...currentModuleSelected.modeles, up1, up2: {}}
      }
      else if (mounted === 'x1') {
        let up1 = currentModuleSelected.modeles.up1 ? currentModuleSelected.modeles.up1 : {};
        obj = {...currentModuleSelected.modeles, up1: up1, up2: false}
      }
      else      
        obj = {...currentModuleSelected.modeles, up1: false, up2: false}
      dispatch(setCurrentModuleSelected({...currentModuleSelected, mounted, modeles: obj}))
      if (wall === 1) {
        dispatch(setModulesSelectedUp(
          [...modulesSelectedUp.map((item) => {
            if (item.id === currentModuleSelected?.id) {
              return {...item, mounted, modeles: obj}
            }
            return item
          })]
        ));
      } else {
        dispatch(setModulesSelectedUp2(
          [...modulesSelectedUp2.map((item) => {
            if (item.id === currentModuleSelected?.id) {
              return {...item, mounted, modeles: obj}
            }
            return item
          })]
        ));
      }
    }
  } 

  return (
    <div className="configuration-layout-choise__item">
      <h3 className="configuration-layout-choise__title">Антресоль</h3>
      <ul className={`configuration-layout-choise__list ${currentModuleSelected?.modeles?.up3?'active':''}`}>
        <li 
          onClick={() => onSetMounted('x1')}
          className={`configuration-layout-choise__list-item ${currentModuleSelected?.mounted==='x1'?'active':''}`}
          >
          <div className="configuration-layout-choise__img"><img src={img07} alt="img2" /></div>
          <p className="configuration-layout-choise__name">Да</p>
        </li>
        <li 
          onClick={() => onSetMounted('x0')}
          className={`configuration-layout-choise__list-item ${currentModuleSelected?.mounted==='x0'?'active':''}`}
          >
          <div className="configuration-layout-choise__img"><img src={img08} alt="img2" /></div>
          <p className="configuration-layout-choise__name">Нет</p>
        </li>
      </ul>
    </div>
  )
}

export default ConfigurationParametrsMezzanine;