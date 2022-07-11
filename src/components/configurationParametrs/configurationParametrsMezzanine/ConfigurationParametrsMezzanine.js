import { useSelector, useDispatch } from 'react-redux';
import { setCurrentModuleSelected, setModulesSelectedUp, setModulesSelectedUp2 } from './../../../actions/index';

import { StyledLayoutChoiseItem, StyledLayoutChoiseTitle, StyledLayoutChoiseList, StyledLayoutChoiseListItem, StyledLayoutChoiseName, StyledLayoutChoiseImg } from './../ConfigurationParametrs';

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
    <div>
      <StyledLayoutChoiseTitle>Антресоль</StyledLayoutChoiseTitle>
      <StyledLayoutChoiseList className={`${currentModuleSelected?.modeles?.up3?'active':''}`}>
        <StyledLayoutChoiseListItem 
          opacity={currentModuleSelected?.mounted==='x1' ? 1 : false}
          onClick={() => onSetMounted('x1')}
          >
          <StyledLayoutChoiseImg><img src={img07} alt="img2" /></StyledLayoutChoiseImg>
          <StyledLayoutChoiseName>Да</StyledLayoutChoiseName>
        </StyledLayoutChoiseListItem>
        <StyledLayoutChoiseListItem
          onClick={() => onSetMounted('x0')}
          opacity={currentModuleSelected?.mounted==='x0' ? 1 : false}
          >
          <StyledLayoutChoiseImg><img src={img08} alt="img2" /></StyledLayoutChoiseImg>
          <StyledLayoutChoiseName>Нет</StyledLayoutChoiseName>
        </StyledLayoutChoiseListItem>
      </StyledLayoutChoiseList>
    </div>
  )
}

export default ConfigurationParametrsMezzanine;