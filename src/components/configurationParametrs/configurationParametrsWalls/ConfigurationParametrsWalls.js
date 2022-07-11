import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentModuleSelected, setWall } from './../../../actions/index';

import { StyledLayoutChoiseTitle, StyledLayoutChoiseList, StyledLayoutChoiseItem, StyledLayoutChoiseImg, StyledLayoutChoiseName, StyledLayoutChoiseListItem } from './../ConfigurationParametrs';

import { img08 } from './../../../resources/img/configurationLayout';

const ConfigurationParametrsWalls = () => {
  const { configuration, wall } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentModuleSelected(false))
  }, [wall])

  const wallRender = () => {
    return (
      <StyledLayoutChoiseListItem
        cursor={'pointer'}
        opacity={wall===2?1:false}
        onClick={() => dispatch(setWall(2))}
        >
        <StyledLayoutChoiseImg><img src={img08} alt="img2" /></StyledLayoutChoiseImg>
        <StyledLayoutChoiseName>B</StyledLayoutChoiseName>
      </StyledLayoutChoiseListItem>
    )
  }

  const wallView = configuration === 'Паралельная' || configuration === 'Угловая' ? wallRender() : null;

  return (
    <StyledLayoutChoiseItem>
      <StyledLayoutChoiseTitle>Стена</StyledLayoutChoiseTitle>
      <StyledLayoutChoiseList className="active">
        <StyledLayoutChoiseListItem 
          cursor={configuration==='Паралельная'||configuration==='Угловая'?'pointer':'default'}
          opacity={wall===1?1:false}
          onClick={() => dispatch(setWall(1))}
          >
          <StyledLayoutChoiseImg><img src={img08} alt="img1" /></StyledLayoutChoiseImg>
          <StyledLayoutChoiseName>A</StyledLayoutChoiseName>
        </StyledLayoutChoiseListItem>
        {wallView}
      </StyledLayoutChoiseList>
    </StyledLayoutChoiseItem>
  )
} 

export default ConfigurationParametrsWalls;